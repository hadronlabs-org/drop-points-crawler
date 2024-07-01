import 'dotenv/config';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { SourceInterface } from '../../../types/sources/source';
import { Logger } from 'pino';
import { GraphQLClient, gql } from 'graphql-request';
import { PoolPositionResponse } from '../../../types/graphQL/poolPositionResponse';
import pLimit from 'p-limit';
import { queryOsmoPositionOnHeight } from '../../query';

export default class OsmosisLPSource implements SourceInterface {
  rpc: string;
  graphqlUrl: string;
  logger: Logger<never>;
  assets: Record<string, { denom: string; multiplier: number }> = {};
  sourceName: string;
  paginationLimit: number;
  concurrencyLimit: number;
  client: Tendermint34Client | undefined;
  assetsByPoolId: Record<string, string> = {};
  storage: Record<string, Record<string, bigint>> = {};

  getClient = async () => {
    if (!this.client) {
      this.client = await Tendermint34Client.connect(this.rpc);
    }
    return this.client;
  };

  constructor(rpc: string, logger: Logger<never>, params: any) {
    this.logger = logger;

    if (!params.assets) {
      throw new Error('No assets are configured in params');
    }
    this.assets = params.assets;
    for (const assetId of Object.keys(this.assets)) {
      this.storage[assetId] = {};
    }

    if (!params.source) {
      throw new Error('No source name is configured in params');
    }
    this.sourceName = params.source;

    if (!params.graphql_url) {
      throw new Error('No subquery indexer url is configured in params');
    }
    this.graphqlUrl = params.graphql_url;
    this.rpc = rpc;
    this.paginationLimit = parseInt(params.pagination_limit || '10000', 10);
    this.concurrencyLimit = parseInt(params.concurrency_limit || '3', 10);
    this.assetsByPoolId = Object.entries(params.assets).reduce(
      (acc: Record<string, string>, [assetId, asset]: [string, any]) => {
        acc[asset.pool_id] = assetId;
        return acc;
      },
      {},
    );
  }

  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    const status = await client.status();
    return status.syncInfo.latestBlockHeight;
  };

  getPosition = async (id: string, height: number): Promise<void> => {
    const [poolId, positionId] = id.split('_');
    this.logger.trace(
      'Fetching position %s at pool %s height %d',
      positionId,
      poolId,
      height,
    );
    const position = await queryOsmoPositionOnHeight(
      await this.getClient(),
      positionId,
      height,
    );
    this.logger.trace('Fetched position %o', position);
    const asset = this.assetsByPoolId[poolId];
    if (!asset) {
      throw new Error(`No asset found for pool id ${poolId}`);
    }
    const denom = this.assets[asset].denom;

    let amount = BigInt(0);
    if (position.asset0.denom === denom) {
      amount = BigInt(position.asset0.amount);
    } else if (position.asset1.denom === denom) {
      amount = BigInt(position.asset1.amount);
    } else {
      throw new Error(`No asset found for position ${id}`);
    }
    this.logger.trace(
      'Position to add for address: %s amount %o',
      position.position.address,
      amount,
    );
    this.storage[asset][position.position.address] =
      (this.storage[asset][position.position.address] || BigInt(0)) + amount;
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    const withConcurrencyLimit = pLimit(this.concurrencyLimit);
    const GET_ACTIVE_POSITIONS = gql`
      query GetAllPoolPositions($limit: Int!, $offset: Int!) {
        poolPositions(first: $limit, offset: $offset) {
          nodes {
            id
          }
        }
      }
    `;
    this.logger.trace('Connecting to subquery indexer %s', this.graphqlUrl);
    const client = new GraphQLClient(this.graphqlUrl);

    let offset = 0;
    while (true) {
      this.logger.debug('Fetching positions from subquery indexer %o', {
        limit: this.paginationLimit,
        offset,
      });
      let graphQlResponse: PoolPositionResponse;
      try {
        graphQlResponse = await client.request<PoolPositionResponse>(
          GET_ACTIVE_POSITIONS,
          {
            limit: this.paginationLimit,
            offset,
          },
        );
        offset += this.paginationLimit;
        this.logger.trace('Fetched response: %o ', graphQlResponse);
      } catch (e) {
        this.logger.error(
          'Unexpected subquery indexer error %s',
          (e as Error).message,
        );
        this.logger.trace('Error %o', e);
        throw new Error(
          `Unexpected subquery indexer error ${(e as Error).message}`,
        );
      }

      if (!graphQlResponse || !graphQlResponse.poolPositions) {
        throw new Error(
          `Unexpected subquery indexer error: empty response for osmosis-lp source`,
        );
      }

      const nodes = graphQlResponse.poolPositions.nodes;

      this.logger.debug(
        'Fetched %d positions from subquery indexer for osmosis-lp source',
        nodes.length,
      );

      if (nodes.length === 0) break;
      await Promise.allSettled(
        nodes.map((node) =>
          withConcurrencyLimit(async () => {
            try {
              await this.getPosition(node.id, height);
            } catch (e) {
              this.logger.error(
                'Unexpected error while fetching position %s: %s',
                node.id,
                (e as Error).message,
              );
            }
          }),
        ),
      );
    }
    for (const [assetId, wallets] of Object.entries(this.storage)) {
      cb(
        Object.entries(wallets).map(([address, balance]) => ({
          address,
          balance: (
            (balance * BigInt(Math.round(multipliers[assetId] * 10000))) /
            BigInt(10000)
          ).toString(),
          asset: assetId,
        })),
      );
    }
  };
}
