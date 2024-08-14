import { SourceInterface } from '../../../types/sources/source';
import { Logger } from 'pino';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { queryContractOnHeight } from '../../query';

import {
  QueryDenomOwnersRequest,
  QueryDenomOwnersResponse,
  QuerySupplyOfRequest,
  QuerySupplyOfResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import { PageRequest } from 'cosmjs-types/cosmos/base/query/v1beta1/pagination';

export default class AstroportSource implements SourceInterface {
  rpc: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { denom: string; pair_contract: string }> = {};
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

    if (!params.source) {
      throw new Error('No source name configured in params');
    }
    this.sourceName = params.source;

    if (!params.assets) {
      throw new Error('No assets configured in params');
    }
    this.assets = params.assets;

    this.rpc = rpc;
    this.concurrencyLimit = parseInt(params.concurrency_limit || '3', 10);
    this.paginationLimit = parseInt(params.paginationLimit || '30', 10);
  }

  getUserBalance = async (
    account: string,
    lpContract: string,
    height: number,
    assetId: string,
    multiplier: number,
  ) => {
    const client = await this.getClient();
    const { balance } = await queryContractOnHeight<{ balance: string }>(
      client,
      lpContract,
      height,
      {
        balance_at: {
          address: account,
          block: height,
        },
      },
    );
    return {
      address: account,
      balance: String(Math.round(Number(balance) * multiplier)),
      asset: assetId,
    };
  };

  getLpToken = async (
    height: number,
    pairContract: string,
  ): Promise<string> => {
    const client = await this.getClient();
    const data: any = await queryContractOnHeight(
      client,
      pairContract,
      height,
      {
        pair: {},
      },
    );

    return data.liquidity_token;
  };

  getDenomBalances = async (
    denom: string,
    multiplier: number,
    height: number,
    nextKey: undefined | Uint8Array = undefined,
  ): Promise<{
    results: Record<string, string>;
    nextKey: undefined | Uint8Array;
  }> => {
    this.logger.debug(
      'Fetching balances for %o with multiplier %s',
      denom,
      multiplier,
    );
    const path = '/cosmos.bank.v1beta1.Query/DenomOwners';
    const request = {
      denom,
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

  getTotalSupply = async (
    token: string,
    height: number,
  ): Promise<number | undefined> => {
    const path = '/cosmos.bank.v1beta1.Query/SupplyOf';
    const request = {
      denom: token,
    };
    const client = await this.getClient();
    const data = QuerySupplyOfRequest.encode(request).finish();
    const response = await client.abciQuery({ path, data, height });
    this.logger.trace('Got response %o', response);
    if (response.code !== 0) {
      throw new Error(
        `Tendermint query error: ${response.log} Code: ${response.code}`,
      );
    }
    const supply = QuerySupplyOfResponse.decode(response.value);
    this.logger.trace('Supply %o', supply);
    return parseInt(supply.amount.amount, 10);
  };

  getLpExchangeRate = async (
    height: number,
    denom: string,
    pairContract: string,
  ): Promise<number> => {
    const client = await this.getClient();
    const pool = await queryContractOnHeight<{
      assets: {
        info: {
          native_token: {
            denom: string;
          };
        };
        amount: string;
      }[];
      total_share: string;
    }>(client, pairContract, height, {
      pool: {},
    });
    this.logger.debug('Got pool %o', pool);
    const assetTotalSupply = pool.assets.find(
      (asset) => asset.info.native_token.denom === denom,
    )!.amount;
    return Number(assetTotalSupply) / Number(pool.total_share);
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [
      assetId,
      { denom, pair_contract: pairContract },
    ] of Object.entries(this.assets)) {
      const lpToken = await this.getLpToken(height, pairContract);
      this.logger.debug(
        `LP token for ${assetId}: ${lpToken} at height ${height}`,
      );
      const exchangeRate = await this.getLpExchangeRate(
        height,
        denom,
        pairContract,
      );
      this.logger.debug(`Exchange rate ${exchangeRate}`);
      let nextKey: undefined | Uint8Array = undefined;
      do {
        const { results, nextKey: newNextKey } = await this.getDenomBalances(
          lpToken,
          (multipliers[assetId] || 1) * exchangeRate,
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
    }
  };

  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    const status = await client.status();
    return status.syncInfo.latestBlockHeight;
  };
}
