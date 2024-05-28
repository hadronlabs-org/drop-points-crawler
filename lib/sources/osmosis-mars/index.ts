import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { queryContractOnHeight } from '../../query';
import { CbOnUserBalances } from '../../../types/cbOnUserBalances';
import pLimit from 'p-limit';
import { SourceInterface } from '../../../types/source';
import { PositionResponse } from '../../../types/positionResponse';
import { Logger } from 'pino';

export default class MarsSource implements SourceInterface {
  rpc: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<
    string,
    { nft_contract: string; credit_contract: string; denom: string }
  > = {};
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
    this.paginationLimit = parseInt(params.pagination_limit || '100', 10);
  }

  getAccountTokens = async (
    nftContract: string,
    height: number,
    limit: number,
    startAfter?: string,
  ): Promise<string[]> => {
    const client = await this.getClient();

    this.logger.debug(
      'Fetching %d account tokens starting after %s',
      limit,
      startAfter,
    );

    const data = await queryContractOnHeight<{ tokens: string[] }>(
      client,
      nftContract,
      height,
      {
        all_tokens: { limit, start_after: startAfter },
      },
    );

    this.logger.debug(
      'Finished fetching %d account tokens starting after %s',
      limit,
      startAfter,
    );

    return data.tokens;
  };

  getAccountTokensOwned = async (
    nftContract: string,
    height: number,
    owner: string,
  ): Promise<string[]> => {
    const client = await this.getClient();

    const data = await queryContractOnHeight<{ tokens: string[] }>(
      client,
      nftContract,
      height,
      {
        tokens: { owner },
      },
    );

    return data.tokens;
  };

  getAccountPositions = async (
    creditContract: string,
    height: number,
    account: string,
  ): Promise<PositionResponse> => {
    const client = await this.getClient();

    const data = await queryContractOnHeight<PositionResponse>(
      client,
      creditContract,
      height,
      {
        positions: { account_id: account },
      },
    );

    return data;
  };

  getAccountOwner = async (
    nftContract: string,
    height: number,
    account: string,
  ): Promise<string> => {
    const client = await this.getClient();

    const data = await queryContractOnHeight<{ owner: string }>(
      client,
      nftContract,
      height,
      {
        owner_of: { token_id: account },
      },
    );

    return data.owner;
  };

  getBalanceOrNull = (positions: PositionResponse, denom: string) => {
    if (positions.debts.length > 0 && positions.lends.length > 0) {
      const foundAsset = positions.lends.find((lend) => lend.denom === denom);
      if (foundAsset) return foundAsset.amount;
    }

    return null;
  };

  getAddressAndBalance = async (
    nftContract: string,
    creditContract: string,
    denom: string,
    height: number,
    multiplier: number,
    accountToken: string,
  ): Promise<{ address: string; balance: string; asset: string } | null> => {
    const owner = await this.getAccountOwner(nftContract, height, accountToken);

    const accountTokensOwned = await this.getAccountTokensOwned(
      nftContract,
      height,
      owner,
    );

    if (accountTokensOwned.length === 1) {
      const positions = await this.getAccountPositions(
        creditContract,
        height,
        accountToken,
      );
      const positionsBalance = this.getBalanceOrNull(positions, denom);
      return positionsBalance
        ? {
            address: owner,
            balance: (
              (BigInt(positionsBalance) *
                BigInt(Math.round(multiplier * 10000))) /
              BigInt(10000)
            ).toString(),
            asset: denom,
          }
        : null;
    }

    if (accountToken !== accountTokensOwned[0]) return null;

    let aggregatedBalance = 0;
    let hasFittingPosition = false;

    accountTokensOwned.forEach(async (accountToken) => {
      const currentPositions = await this.getAccountPositions(
        creditContract,
        height,
        accountToken,
      );
      const balance = this.getBalanceOrNull(currentPositions, denom);

      if (balance && !hasFittingPosition) hasFittingPosition = true;

      aggregatedBalance += balance ? parseInt(balance, 10) : 0;
    });

    return hasFittingPosition
      ? {
          address: owner,
          balance: (
            (BigInt(aggregatedBalance) *
              BigInt(Math.round(multiplier * 10000))) /
            BigInt(10000)
          ).toString(),
          asset: denom,
        }
      : null;
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [assetId, asset] of Object.entries(this.assets)) {
      let startAfter = undefined;
      let accountTokens: string[] = [];

      const {
        nft_contract: nftContract,
        credit_contract: creditContract,
        denom,
      } = asset;
      if (!nftContract || !creditContract || !denom) {
        this.logger.warn('Asset %s is invalid, skipping', assetId);
        break;
      }

      while (true) {
        startAfter =
          accountTokens.length > 0
            ? accountTokens[accountTokens.length - 1]
            : undefined;
        accountTokens = await this.getAccountTokens(
          nftContract,
          height,
          this.paginationLimit,
          startAfter,
        );
        if (accountTokens.length === 0) break;

        this.logger.debug(
          'Fetching %s from %d balances with multiplier %d',
          denom,
          this.paginationLimit,
          multipliers[assetId],
        );

        const withConcurrencyLimit = pLimit(this.concurrencyLimit);
        const settledResults = await Promise.allSettled(
          accountTokens.map((accountToken) =>
            withConcurrencyLimit(
              async () =>
                await this.getAddressAndBalance(
                  nftContract,
                  creditContract,
                  denom,
                  height,
                  multipliers[assetId],
                  accountToken,
                ),
            ),
          ),
        );

        this.logger.debug(
          'Finished fetching %s from %d balances with multiplier %d',
          denom,
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
              if (settledResult.status === 'fulfilled' && settledResult.value) {
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

  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    const status = await client.status();
    return status.syncInfo.latestBlockHeight;
  };
}
