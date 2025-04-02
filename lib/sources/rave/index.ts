import axios from 'axios';
import { SourceInterface } from '../../../types/sources/source';
import pino, { Logger } from 'pino';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  QueryBalanceRequest,
  QueryBalanceResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { evmToHexDenom, toInitiaAddress } from '../../initia-address';
import pLimit from 'p-limit';

export default class RaveSource implements SourceInterface {
  rpc: string;
  kTokenApi: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { denom: string }> = {};
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

    if (!params.ktoken_api) {
      throw new Error('No kToken API configured in params');
    }
    this.kTokenApi = params.ktoken_api;

    this.rpc = rpc;
    this.concurrencyLimit = parseInt(params.concurrency_limit || '3', 10);
    this.paginationLimit = parseInt(params.paginationLimit || '100', 10);
  }

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
    const path = '/cosmos.bank.v1beta1.Query/Balance';
    const request = {
      address,
      denom,
    };
    const requestData = QueryBalanceRequest.encode(request).finish();
    const responseData = await client.abciQuery({
      path,
      data: requestData,
      height,
    });
    const response = QueryBalanceResponse.decode(responseData.value);
    return String(
      Math.round((Number(response.balance?.amount) / 1e18) * multiplier),
    );
  };

  getUsers = async (denom: string, limit: number, offset: number) => {
    const params = {
      ktoken: evmToHexDenom(denom),
      offset,
      limit,
    };

    try {
      const response = await axios.get(this.kTokenApi, { params });
      this.logger.debug('Got %d addresses:', response.data.total);
      return response.data.data;
    } catch (error) {
      this.logger.error('Error fetching kToken data:', error);
      throw error;
    }
  };

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
          users.map((user: { Account: string }) =>
            withConcurrencyLimit(async () => ({
              address: toInitiaAddress(user.Account),
              balance: await this.getUserBalance(
                toInitiaAddress(user.Account),
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
      }
    }
  };
}

const logger = pino({});
const rave = new RaveSource('https://rpc-test-initia.rave.trade', logger, {
  source: 'rave',
  ktoken_api: 'https://vip-test-api.rave.trade/rave/kToken/list',
  assets: { RAVE: { denom: 'evm/26513cd69378889D779fD864aa5014F06b2581a6' } },
});
const height = await rave.getLastBlockHeight();
await rave.getUsersBalances(height - 100, { RAVE: 1 }, () => {});
