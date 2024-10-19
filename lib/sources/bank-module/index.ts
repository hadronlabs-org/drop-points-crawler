import 'dotenv/config';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  QueryDenomOwnersRequest,
  QueryDenomOwnersResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import { PageRequest } from 'cosmjs-types/cosmos/base/query/v1beta1/pagination';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { SourceInterface } from '../../../types/sources/source';
import { Logger } from 'pino';

export default class BankModuleSource<A = { denom: string }>
  implements SourceInterface
{
  rpc: string;
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
    this.paginationLimit = parseInt(params.pagination_limit || '10000', 10);
  }

  getDenomBalances = async (
    asset: { denom: string },
    multiplier: number,
    height: number,
    nextKey: undefined | Uint8Array = undefined,
  ): Promise<{
    results: Record<string, string>;
    nextKey: undefined | Uint8Array;
  }> => {
    this.logger.debug(
      'Fetching balances for %o with multiplier %s',
      asset.denom,
      multiplier,
    );
    const path = '/cosmos.bank.v1beta1.Query/DenomOwners';
    const request = {
      denom: asset.denom,
      pagination: PageRequest.fromPartial({
        limit: BigInt(this.paginationLimit),
        key: nextKey,
      }),
    };
    const client = await this.getClient();
    const data = QueryDenomOwnersRequest.encode(request).finish();
    const response = await client.abciQuery({ path, data, height });
    this.logger.trace('Got response %o', response);
    if (response.code !== 0) {
      throw new Error(
        `Tendermint query error: ${response.log} Code: ${response.code}`,
      );
    }
    const balances = QueryDenomOwnersResponse.decode(response.value);
    const out = balances.denomOwners.reduce(
      (acc, one) => ({
        ...acc,
        [one.address]: (
          (BigInt(one.balance.amount) *
            BigInt(Math.round(multiplier * 10000))) /
          BigInt(10000)
        ).toString(),
      }),
      {},
    );
    this.logger.debug('Got %d balances', Object.keys(out).length);
    return { results: out, nextKey: balances.pagination?.nextKey };
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
      do {
        const { results, nextKey: newNextKey } = await this.getDenomBalances(
          asset,
          multipliers[assetId] || 1,
          height,
          nextKey,
        );
        cb(
          Object.entries(results).map(([address, balance]) => ({
            address,
            balance,
            asset: assetId,
          })),
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
