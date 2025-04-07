import { SourceInterface } from '../../../types/sources/source';
import { Logger } from 'pino';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import pLimit from 'p-limit';
import { bcs } from '@initia/initia.js';
import {
  QueryViewRequest,
  QueryViewResponse,
} from '@initia/initia.proto/initia/move/v1/query';

export default class EchelonSource implements SourceInterface {
  rpc: string;
  module: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { denom: string }> = {};
  sourceName: string;
  client: Tendermint34Client | undefined;

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

    if (!params.module) {
      throw new Error('No module configured in params');
    }
    this.module = params.module;

    this.rpc = rpc;
    this.concurrencyLimit = parseInt(params.concurrency_limit || '3', 10);
    this.paginationLimit = parseInt(params.paginationLimit || '100', 10);
  }

  getClient = async () => {
    if (!this.client) {
      this.client = await Tendermint34Client.connect(this.rpc);
    }
    return this.client;
  };

  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    const status = await client.status();
    return status.syncInfo.latestBlockHeight;
  };

  getUserBalance = async (
    address: string,
    height: number,
    denom: string,
    multiplier: number,
  ) => {
    const client = await this.getClient();

    const path = '/initia.move.v1.Query/View';
    const userAddressSerialized = bcs.address().serialize(address).toBytes();
    const denomSerialized = bcs.object().serialize(denom).toBytes();

    const request = {
      address: this.module,
      moduleName: 'lending',
      functionName: 'account_coins',
      typeArgs: [],
      args: [userAddressSerialized, denomSerialized],
    };
    const data = QueryViewRequest.encode(request).finish();
    const response = await client.abciQuery({ path, data, height });
    const balances = QueryViewResponse.decode(response.value);

    return String(Math.round(Number(balances.data) * multiplier));
  };

  // eslint-disable-next-line require-await
  getUsers = async (denom: string, limit: number, offset: number) => [
    'init1waj5lmujv6dyqypntp3cts4gkpgnqcvr7tznyk',
    'init1k0gcdykyhk9z7kj6c8kng5wls6l7e3xw9a42tw',
  ];

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [assetId, { denom }] of Object.entries(this.assets)) {
      let offset = 0;

      while (true) {
        const users = await this.getUsers(denom, this.paginationLimit, offset);

        if (!users.length) {
          break;
        }
        offset += users.length;

        const withConcurrencyLimit = pLimit(this.concurrencyLimit);
        const settledResults = await Promise.allSettled(
          users.map((address) =>
            withConcurrencyLimit(async () => ({
              address: address,
              balance: await this.getUserBalance(
                address,
                height,
                denom,
                multipliers[assetId],
              ),
              asset: assetId,
            })),
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
              if (settledResult.status === 'fulfilled') {
                filteredResult.push(settledResult.value);
              }
              return filteredResult;
            },
            [],
          ),
        );

        //TODO: remove that
        break;
      }
    }
  };
}
