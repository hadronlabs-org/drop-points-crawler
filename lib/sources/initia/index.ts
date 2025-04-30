import 'dotenv/config';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  QueryBalanceRequest,
  QueryBalanceResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import {
  QueryAccountsRequest,
  QueryAccountsResponse,
} from 'cosmjs-types/cosmos/auth/v1beta1/query';
import { PageRequest } from 'cosmjs-types/cosmos/base/query/v1beta1/pagination';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { SourceInterface } from '../../../types/sources/source';
import * as protobuf from 'protobufjs';
import pLimit from 'p-limit';
import pino, { Logger } from 'pino';

export default class InitiaSource<A = { denom: string }>
  implements SourceInterface
{
  rpc: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { denom: string } & A>;
  sourceName: string;
  client: Tendermint34Client | undefined;

  getClient = async () => {
    if (!this.client) {
      this.client = await Tendermint34Client.connect(this.rpc);
    }
    return this.client;
  };

  constructor(rpc: string, logger: Logger<never>, params: any) {
    this.logger = logger;

    if (!params.assets) {
      throw new Error('No assets configured in params');
    }
    this.assets = params.assets;

    if (!params.source) {
      throw new Error('No source name configured in params');
    }
    this.sourceName = params.source;

    this.rpc = rpc;
    this.concurrencyLimit = parseInt(params.concurrency_limit || '10', 10);
    this.paginationLimit = parseInt(params.pagination_limit || '5000', 10);
  }

  decodeBaseAccountProto = async (raw: Uint8Array) => {
    const root = await protobuf.load('BaseAccount.proto');
    const BaseAccount = root.lookupType('cosmos.auth.v1beta1.BaseAccount');

    const decoded = BaseAccount.decode(raw);
    const object = BaseAccount.toObject(decoded, {
      longs: String,
      bytes: String,
      defaults: true,
    });

    return object;
  };

  getBaseAccounts = async (
    height: number,
    nextKey: undefined | Uint8Array = undefined,
  ): Promise<{
    results: { address: string }[];
    nextKey: undefined | Uint8Array;
  }> => {
    this.logger.debug('Fetching all active base account addresses');
    const path = '/cosmos.auth.v1beta1.Query/Accounts';
    const request = {
      pagination: PageRequest.fromPartial({
        limit: BigInt(this.paginationLimit),
        key: nextKey,
      }),
    };
    const client = await this.getClient();
    const data = QueryAccountsRequest.encode(request).finish();
    const response = await client.abciQuery({ path, data, height });
    this.logger.trace('Got accounts response %o', response);
    if (response.code !== 0) {
      throw new Error(
        `Tendermint query error: ${response.log} Code: ${response.code}`,
      );
    }
    const accounts = QueryAccountsResponse.decode(response.value);
    const baseAccounts = await Promise.all(
      accounts.accounts
        .filter(
          (account) => account.typeUrl === '/cosmos.auth.v1beta1.BaseAccount',
        )
        .map(async (baseAccount) => {
          const decoded = await this.decodeBaseAccountProto(baseAccount.value);
          return { address: decoded.address };
        }),
    );
    this.logger.debug('Got %d accounts', baseAccounts.length);
    return { results: baseAccounts, nextKey: accounts.pagination?.nextKey };
  };

  getDenomBalance = async (
    address: string,
    asset: { denom: string },
    multiplier: number,
    height: number,
  ) => {
    this.logger.debug(
      'Fetching balance for %o and address %s with multiplier %s',
      asset.denom,
      address,
      multiplier,
    );
    const client = await this.getClient();
    const path = '/cosmos.bank.v1beta1.Query/Balance';
    const request = {
      address,
      denom: asset.denom,
    };
    const requestData = QueryBalanceRequest.encode(request).finish();
    const responseData = await client.abciQuery({
      path,
      data: requestData,
      height,
    });
    this.logger.trace('Got balance response %o', responseData);
    if (responseData.code !== 0) {
      throw new Error(
        `Tendermint query error: ${responseData.log} Code: ${responseData.code}`,
      );
    }
    const response = QueryBalanceResponse.decode(responseData.value);
    return (
      (BigInt(Number(response.balance?.amount)) *
        BigInt(Math.round(multiplier * 10000))) /
      BigInt(10000)
    ).toString();
  };

  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    const status = await client.status();
    return status.syncInfo.latestBlockHeight;
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    let nextKey: undefined | Uint8Array = undefined;
    for (const [assetId, asset] of Object.entries(this.assets)) {
      let count = 0;
      do {
        const { results: addresses, nextKey: newNextKey } =
          await this.getBaseAccounts(height, nextKey);

        count += addresses.length;
        console.log(count);

        const withConcurrencyLimit = pLimit(this.concurrencyLimit);
        const settledResults = await Promise.allSettled(
          addresses.map((account: { address: string }) =>
            withConcurrencyLimit(async () => {
              const x = {
                address: account.address,
                balance: await this.getDenomBalance(
                  account.address,
                  asset,
                  multipliers[assetId],
                  height,
                ),
                asset: assetId,
              };
              if (x.balance !== '0') console.log(x);
              // console.log(x);
              return x;
            }),
          ),
        );

        cb(
          settledResults.reduce(
            (
              filteredResult: {
                address: string;
                balance: string;
                asset: string;
              }[],
              settledResult,
            ) => {
              if (
                settledResult.status === 'fulfilled' &&
                settledResult.value.balance !== '0'
              ) {
                filteredResult.push(settledResult.value);
              }
              return filteredResult;
            },
            [],
          ),
        );

        this.logger.debug('Got next key %s', newNextKey);
        if (!newNextKey) {
          break;
        }
        nextKey = newNextKey;
      } while (nextKey !== undefined && nextKey.length > 0);
      this.logger.debug(
        'Finished fetching balances for %s source',
        this.sourceName,
      );
    }
  };
}

const logger = pino({});
const initia = new InitiaSource('https://rpc.initia.xyz', logger, {
  source: 'initia',
  assets: {
    deINIT: {
      denom:
        'ibc/6190D58F741F1313A7B8F07E34E5603B03C1CC4490F54474986BC97A55EADE92',
    },
  },
});
const height = await initia.getLastBlockHeight();
await initia.getUsersBalances(height - 100, { deINIT: 1 }, () => {});

// const client = await Tendermint34Client.connect('https://rpc.initia.xyz/');
// const status = await client.status();
// const height = status.syncInfo.latestBlockHeight;
// console.log(height);
// const path = '/cosmos.auth.v1beta1.Query/Accounts';
// const request = {
//   pagination: PageRequest.fromPartial({
//     limit: BigInt(100),
//     key: undefined,
//   }),
// };
// const data = QueryAccountsRequest.encode(request).finish();
// const response = await client.abciQuery({ path, data, height });
// console.log(Object.keys(response));
// const accounts = QueryAccountsResponse.decode(response.value);
// console.log(Object.keys(accounts));
//
// const root = await protobuf.load('BaseAccount.proto');
// const BaseAccount = root.lookupType('cosmos.auth.v1beta1.BaseAccount');
//
// const decoded = BaseAccount.decode(accounts.accounts[0].value);
// const object = BaseAccount.toObject(decoded, {
//   longs: String,
//   bytes: String,
//   defaults: true,
// });
// console.log(object);
// console.log(accounts.accounts);
