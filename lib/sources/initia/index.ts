import 'dotenv/config';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  QueryBalanceRequest,
  QueryBalanceResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { SourceInterface } from '../../../types/sources/source';
import pLimit from 'p-limit';
import { Logger } from 'pino';
import { constants, Database } from 'bun:sqlite';

export default class InitiaSource implements SourceInterface {
  rpc: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { denom: string }>;
  sourceName: string;
  client: Tendermint34Client | undefined;
  dbPath: string;

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

    if (!params.db_path) {
      throw new Error('No database path configured in params to store users');
    }
    this.dbPath = params.db_path;

    this.rpc = rpc;
    this.concurrencyLimit = parseInt(params.concurrency_limit || '10', 10);
    this.paginationLimit = parseInt(params.pagination_limit || '100', 10);
  }

  getAddresses = (
    limit: number,
    offset: number,
  ): { remote_address: string }[] => {
    this.logger.debug('Fetching all linked addresses');

    const db = new Database(
      this.dbPath,
      constants.SQLITE_OPEN_FULLMUTEX |
        constants.SQLITE_OPEN_READWRITE |
        constants.SQLITE_OPEN_CREATE,
    );

    const stmt = db.prepare(
      `SELECT remote_address
     FROM user_network_link
     WHERE network = ?
     ORDER BY ts DESC
     LIMIT ? OFFSET ?`,
    );

    const users = stmt.all('initia', limit, offset) as {
      remote_address: string;
    }[];

    db.close();

    return users;
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
    for (const [assetId, asset] of Object.entries(this.assets)) {
      let offset = 0;
      while (true) {
        const addresses = this.getAddresses(this.paginationLimit, offset);

        if (addresses.length === 0) break;
        offset += addresses.length;

        const withConcurrencyLimit = pLimit(this.concurrencyLimit);
        const settledResults = await Promise.allSettled(
          addresses.map(({ remote_address }) =>
            withConcurrencyLimit(async () => ({
              address: remote_address,
              balance: await this.getDenomBalance(
                remote_address,
                asset,
                multipliers[assetId],
                height,
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

        this.logger.debug('Processed %d addresses', addresses.length);
      }
      this.logger.debug(
        'Finished fetching balances for %s source',
        this.sourceName,
      );
    }
  };
}
