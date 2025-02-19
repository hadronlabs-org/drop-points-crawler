import { GraphQLClient, gql } from 'graphql-request';
import { SourceInterface } from '../../../types/sources/source';
import pino, { Logger } from 'pino';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import {
  FlamePosition,
  FlamePositionResponse,
} from '../../../types/graphQL/flamePositionsResponse';

const viem = require('viem');

const GET_POSITIONS = gql`
  query GetPositions(
    $offset: Int!
    $limit: Int!
    $height: Int!
    $pool: String!
  ) {
    positions(
      skip: $offset
      first: $limit
      orderBy: liquidity
      orderDirection: desc
      block: { number: $height }
      where: { pool_: { id: $pool } }
    ) {
      id
      owner
      pool {
        id
        token0 {
          symbol
        }
        token1 {
          symbol
        }
      }
      liquidity
      depositedToken0
      depositedToken1
      withdrawnToken0
      withdrawnToken1
    }
  }
`;

function addDecimals(a: string, b: string): number {
  return parseFloat(a) + parseFloat(b);
}

export default class FlameSource implements SourceInterface {
  rpc: string;
  graphqlUrl: string;
  pool: string;
  logger: Logger<never>;
  paginationLimit: number;
  client: any;

  constructor(rpc: string, logger: Logger<never>, params: any) {
    this.rpc = rpc;
    this.logger = logger;

    if (!params.graphql_url) {
      throw new Error('No graphql_url configured in Flame params');
    }
    this.graphqlUrl = params.graphql_url;

    if (!params.pool) {
      throw new Error('No pool id configured in Flame params');
    }
    this.pool = params.pool;

    this.paginationLimit = parseInt(params.pagination_limit || '100', 10);
  }

  getClient = () => {
    if (!this.client) {
      this.client = viem.createPublicClient({
        transport: viem.http(this.rpc),
      });
    }
    return this.client;
  };

  getLastBlockHeight = async (): Promise<number> => {
    const blockNumber = await this.getClient().getBlockNumber();
    return Number(blockNumber.toString());
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    this.logger.trace('Connecting to Flame GraphQL %s', this.graphqlUrl);
    const client = new GraphQLClient(this.graphqlUrl);

    const depositMap: Record<string, Record<string, number>> = {};
    for (const assetId of Object.keys(multipliers)) {
      depositMap[assetId] = {};
    }

    let offset = 0;
    while (true) {
      this.logger.debug('Fetching positions from Flame GraphQL %o', {
        limit: this.paginationLimit,
        offset,
      });
      let graphQlResponse: any;
      try {
        graphQlResponse = await client.request<FlamePositionResponse>(
          GET_POSITIONS,
          {
            limit: this.paginationLimit,
            offset,
            height,
            pool: this.pool,
          },
        );
        offset += this.paginationLimit;
        this.logger.trace('Fetched response: %o', graphQlResponse);
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

      if (!graphQlResponse) {
        throw new Error(
          `Unexpected subquery indexer error: empty response for flame source`,
        );
      }

      const positions = graphQlResponse.positions;

      if (positions.length === 0) break;

      this.logger.debug(
        'Fetched %d positions from GraphQL for Flame source',
        positions.length,
      );

      positions.forEach((position: FlamePosition) => {
        const { owner } = position;
        Object.keys(multipliers).forEach((assetId) => {
          if (depositMap[assetId][owner]) {
            depositMap[assetId][owner] += parseFloat(position.depositedToken0);
          } else {
            depositMap[assetId][owner] = parseFloat(position.depositedToken0);
          }
        });
      });
    }

    for (const [assetId, deposits] of Object.entries(depositMap)) {
      cb(
        Object.entries(deposits).map(([address, deposited]) => ({
          address,
          balance: (
            (BigInt(Math.round(deposited * 1_000_000)) *
              BigInt(Math.round(multipliers[assetId] * 10000))) /
            BigInt(10000)
          ).toString(),
          asset: assetId,
        })),
      );
    }
  };
}
