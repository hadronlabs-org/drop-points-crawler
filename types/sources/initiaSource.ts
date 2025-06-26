import { SourceInterface } from './source';
import { Logger } from 'pino';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from './cbOnUserBalances';
import pLimit from 'p-limit';
import { constants, Database } from 'bun:sqlite';

export abstract class BaseInitiaSource implements SourceInterface {
  rpc: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { denom: string }> = {};
  sourceName: string;
  client: Tendermint34Client | undefined;
  dbPath: string;

  constructor(rpc: string, logger: Logger<never>, params: any) {
    this.logger = logger;

    if (!params.source) throw new Error('No source name configured in params');
    this.sourceName = params.source;

    if (!params.assets) throw new Error('No assets configured in params');
    this.assets = params.assets;

    if (!params.db_path) throw new Error('No db_path configured in params');
    this.dbPath = params.db_path;

    this.rpc = rpc;
    this.concurrencyLimit = parseInt(params.concurrency_limit || '3', 10);
    this.paginationLimit = parseInt(params.pagination_limit || '100', 10);
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
      `SELECT remote_address FROM user_network_link WHERE network = ? ORDER BY ts DESC LIMIT ? OFFSET ?`,
    );

    const users = stmt.all('initia', limit, offset) as {
      remote_address: string;
    }[];
    db.close();
    return users;
  };

  abstract getUserBalance(
    address: string,
    height: number,
    denom: string,
    multiplier: number,
  ): Promise<string>;

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [assetId, { denom }] of Object.entries(this.assets)) {
      let offset = 0;
      while (true) {
        const addresses = this.getAddresses(this.paginationLimit, offset);
        if (!addresses.length) break;
        offset += addresses.length;

        const withLimit = pLimit(this.concurrencyLimit);
        const settledResults = await Promise.allSettled(
          addresses.map(({ remote_address }) =>
            withLimit(async () => ({
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
          settledResults.reduce((acc: any[], r) => {
            if (r.status === 'fulfilled' && r.value.balance !== '0') {
              acc.push(r.value);
            }
            return acc;
          }, []),
        );
      }
      this.logger.debug('Finished balances for %s', this.sourceName);
    }
  };
}
