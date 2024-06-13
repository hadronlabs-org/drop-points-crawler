import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import pLimit from 'p-limit';
import { queryContractOnHeight } from '../../query';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { SourceInterface } from '../../../types/sources/source';
import { Logger } from 'pino';

export default class LevanaSource implements SourceInterface {
  rpc: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { lp_token: string }> = {};
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
    this.paginationLimit = parseInt(params.pagination_limit || '300', 10);
  }

  getAccounts = async (
    lpToken: string,
    height: number,
    limit: number,
    startAfter: string | undefined,
  ): Promise<string[]> => {
    const client = await this.getClient();

    this.logger.debug(
      'Fetching %d accounts starting after %s',
      limit,
      startAfter,
    );

    const data = await queryContractOnHeight<{ accounts: string[] }>(
      client,
      lpToken,
      height,
      {
        all_accounts: { limit, start_after: startAfter },
      },
    );

    this.logger.debug(
      'Finished fetching %d accounts starting after %s',
      limit,
      startAfter,
    );

    return data.accounts;
  };

  getAccountBalance = async (
    lpToken: string,
    multiplier: number,
    height: number,
    address: string,
  ): Promise<string> => {
    const client = await this.getClient();

    const data = await queryContractOnHeight<{ balance: string }>(
      client,
      lpToken,
      height,
      {
        balance: { address },
      },
    );

    return (
      (BigInt(data.balance) * BigInt(Math.round(multiplier * 10000))) /
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
      let startAfter = undefined;
      let accounts: string[] = [];

      const { lp_token: lpToken } = asset;
      if (!lpToken) {
        this.logger.warn('Asset %s is invalid, skipping', assetId);
        break;
      }

      while (true) {
        startAfter =
          accounts.length > 0 ? accounts[accounts.length - 1] : undefined;
        accounts = await this.getAccounts(
          lpToken,
          height,
          this.paginationLimit,
          startAfter,
        );
        if (accounts.length === 0) break;

        this.logger.debug(
          'Fetching %s from %d balances with multiplier %d',
          lpToken,
          this.paginationLimit,
          multipliers[assetId],
        );

        const withConcurrencyLimit = pLimit(this.concurrencyLimit);
        const settledResults = await Promise.allSettled(
          accounts.map((account) =>
            withConcurrencyLimit(async () => ({
              address: account,
              balance: await this.getAccountBalance(
                lpToken,
                multipliers[assetId],
                height,
                account,
              ),
              asset: assetId,
            })),
          ),
        );

        this.logger.debug(
          'Finished fetching %s from %d balances with multiplier %d',
          lpToken,
          this.paginationLimit,
          multipliers[assetId],
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

      this.logger.debug(
        'Finished fetching all balances for %s source',
        this.sourceName,
      );
    }
  };
}
