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
import { constants, Database } from 'bun:sqlite';

export default class EchelonSource implements SourceInterface {
  rpc: string;
  module: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { denom: string }> = {};
  sourceName: string;
  client: Tendermint34Client | undefined;
  dbPath: string;

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

    if (!params.db_path) {
      throw new Error('No database path configured in params to store users');
    }
    this.dbPath = params.db_path;

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

  getUserBalance = async (
    address: string,
    height: number,
    denom: string,
    multiplier: number,
  ) => {
    const client = await this.getClient();

    const path = '/initia.move.v1.Query/View';
    const userAddressSerialized = bcs.address().serialize(address).toBytes();

    const request = {
      address: this.module,
      moduleName: 'lens',
      functionName: 'get_user_data',
      typeArgs: [],
      args: [userAddressSerialized],
    };
    const data = QueryViewRequest.encode(request).finish();
    const response = await client.abciQuery({ path, data, height });
    const decodedResponse = QueryViewResponse.decode(response.value);
    const balances = JSON.parse(decodedResponse.data);
    const denomBalance = balances.account_coins.data.find(
      (x: { key: string; value: string }) => x.key === denom,
    ).value;

    return String(Math.round(Number(denomBalance) * multiplier));
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [assetId, { denom }] of Object.entries(this.assets)) {
      let offset = 0;

      while (true) {
        const addresses = this.getAddresses(this.paginationLimit, offset);

        if (!addresses.length) {
          break;
        }
        offset += addresses.length;

        const withConcurrencyLimit = pLimit(this.concurrencyLimit);
        const settledResults = await Promise.allSettled(
          addresses.map(({ remote_address }) =>
            withConcurrencyLimit(async () => ({
              address: remote_address,
              balance: await this.getUserBalance(
                remote_address,
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

        this.logger.debug('Processed %d addresses', addresses.length);
      }
    }

    this.logger.debug(
      'Finished fetching balances for %s source',
      this.sourceName,
    );
  };
}
