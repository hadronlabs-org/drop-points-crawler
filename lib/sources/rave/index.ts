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
import { constants, Database } from 'bun:sqlite';

export default class RaveSource implements SourceInterface {
  rpc: string;
  kTokenApi: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { denom: string }> = {};
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

    if (!params.db_path) {
      throw new Error('No database path configured in params to store users');
    }
    this.dbPath = params.db_path;

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

  saveNewUsers = async (denom: string) => {
    const db = new Database(
      this.dbPath,
      constants.SQLITE_OPEN_FULLMUTEX |
        constants.SQLITE_OPEN_READWRITE |
        constants.SQLITE_OPEN_CREATE,
    );

    const ts = Math.floor(Date.now() / 1000);
    const insertQuery = db.prepare<null, [string, string, string, number]>(
      `INSERT INTO users_archive (address, source, denom, ts)
     VALUES (?, ?, ?, ?)
     ON CONFLICT DO NOTHING`,
    );

    let offset = 0;
    const limit = 100;
    db.run('BEGIN TRANSACTION');
    try {
      while (true) {
        const params = {
          ktoken: evmToHexDenom(denom),
          offset,
          limit,
        };

        let users: { Account: string }[];

        try {
          const response = await axios.get(this.kTokenApi, { params });
          users = response.data?.data;
          if (!Array.isArray(users) || users.length === 0) break;
        } catch (error) {
          this.logger.error('Error fetching kToken data:', error);
          break;
        }

        for (const user of users) {
          insertQuery.run(user.Account, this.sourceName, denom, ts);
        }

        if (users.length < limit) break;
        if (offset >= 1000) break;
        offset += limit;
      }

      db.run('COMMIT');
    } catch (err) {
      db.run('ROLLBACK');
      this.logger.error('Failed to insert users into database:', err);
      throw err;
    } finally {
      db.close();
    }
  };

  getUsersFromArchive = (
    denom: string,
    limit: number = 100,
    offset: number = 0,
  ): { address: string; source: string; ts: number }[] => {
    const db = new Database(
      this.dbPath,
      constants.SQLITE_OPEN_FULLMUTEX |
        constants.SQLITE_OPEN_READWRITE |
        constants.SQLITE_OPEN_CREATE,
    );

    const stmt = db.prepare(
      `SELECT address, source, denom, ts
     FROM users_archive
     WHERE source = ? AND denom = ?
     ORDER BY ts DESC
     LIMIT ? OFFSET ?`,
    );

    const users = stmt.all('rave', denom, limit, offset) as {
      address: string;
      source: string;
      denom: string;
      ts: number;
    }[];

    db.close();
    return users;
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [assetId, { denom }] of Object.entries(this.assets)) {
      await this.saveNewUsers(denom);

      let offset = 0;

      while (true) {
        const users = this.getUsersFromArchive(
          denom,
          this.paginationLimit,
          offset,
        );

        if (!users.length) {
          break;
        }
        offset += users.length;

        const withConcurrencyLimit = pLimit(this.concurrencyLimit);
        const settledResults = await Promise.allSettled(
          users.map((user: { address: string }) =>
            withConcurrencyLimit(async () => {
              return {
                address: toInitiaAddress(user.address),
                balance: await this.getUserBalance(
                  toInitiaAddress(user.address),
                  height,
                  denom,
                  multipliers[assetId],
                ),
                asset: assetId,
              };
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
  db_path: 'data.db', // root path?
  ktoken_api: 'https://vip-test-api.rave.trade/rave/kToken/list',
  assets: { RAVE: { denom: 'evm/26513cd69378889D779fD864aa5014F06b2581a6' } },
});
const height = await rave.getLastBlockHeight();
await rave.getUsersBalances(height - 100, { RAVE: 1 }, () => {});
