import 'dotenv/config';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { SourceInterface } from '../../../types/sources/source';
import { Logger } from 'pino';
import { GraphQLClient, gql } from 'graphql-request';
import { UserBalancesResponse } from '../../../types/graphQL/userBalancesResponse';

export default class SubqueryIndexerSource implements SourceInterface {
  rpc: string;
  graphqlUrl: string;
  chainId: string;
  logger: Logger<never>;
  assets: Record<string, { denom: string }> = {};
  sourceName: string;
  paginationLimit: number;
  client: Tendermint34Client | undefined;

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

    if (!params.source) {
      throw new Error('No source name is configured in params');
    }
    this.sourceName = params.source;

    if (!params.graphql_url) {
      throw new Error('No subquery indexer url is configured in params');
    }
    this.graphqlUrl = params.graphql_url;

    if (!params.chain_id) {
      throw new Error('No chain id is configured in params');
    }
    this.chainId = params.chain_id;

    this.rpc = rpc;
    this.paginationLimit = parseInt(params.pagination_limit || '10000', 10);
  }

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
    const GET_DENOM_BALANCES = gql`
      query GetDenomBalances(
        $height: BigFloat!
        $denom: String!
        $chainId: String!
        $limit: Int!
        $offset: Int!
      ) {
        userBalances(
          filter: {
            lastHeight: { greaterThanOrEqualTo: $height }
            denom: { equalTo: $denom }
            chainId: { equalTo: $chainId }
          }
          orderBy: [LAST_HEIGHT_ASC]
          first: $limit
          offset: $offset
        ) {
          nodes {
            id
            balance
          }
        }
      }
    `;
    const client = new GraphQLClient(this.graphqlUrl);

    let offset = 0;
    for (const [assetId, asset] of Object.entries(this.assets)) {
      while (true) {
        let graphQlResponse: UserBalancesResponse;
        try {
          graphQlResponse = await client.request<UserBalancesResponse>(
            GET_DENOM_BALANCES,
            {
              height,
              denom: asset.denom,
              chainId: this.chainId,
              limit: this.paginationLimit,
              offset,
            },
          );
        } catch (e) {
          this.logger.error(
            'Unexpected subquery indexer error %s',
            (e as Error).message,
          );
          throw new Error(
            `Unexpected subquery indexer error ${(e as Error).message}`,
          );
        } finally {
          offset += this.paginationLimit;
        }

        if (!graphQlResponse) {
          this.logger.error('No response from subquery indexer');
          throw new Error('No response from subquery indexer');
        }

        const {
          userBalances: { nodes },
        } = graphQlResponse;

        this.logger.debug(
          'Fetched %d accounts from subquery indexer for chain %s',
          nodes.length,
          this.chainId,
        );

        if (nodes.length === 0) break;

        cb(
          nodes.map((node) => ({
            address: node.id,
            balance: (
              (BigInt(node.balance) *
                BigInt(Math.round(multipliers[assetId] * 10000))) /
              BigInt(10000)
            ).toString(),
            asset: assetId,
          })),
        );

        this.logger.debug(
          'Finished fetching %s denom balances for %s source',
          assetId,
          this.sourceName,
        );
      }
    }
  };
}
