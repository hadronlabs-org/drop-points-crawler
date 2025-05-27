import {
  MAINNET_ENVIRONMENT,
  TESTNET_ENVIRONMENT,
  tRPCGetStakerStatusRequest,
  tRPCGetStakerStatusResponse,
} from '../../../types/tRPC/tRPCGetStakerStatus';
import { Logger } from 'pino';
import { gql, GraphQLClient } from 'graphql-request';
import { TRPCError } from '@trpc/server';
import { Database } from 'bun:sqlite';
import { log } from 'console';

const GET_STAKER = gql`
  query GetStake($addresses: [String!]) {
    userBondPlains(first: 1, filter: { address: { in: $addresses } }) {
      nodes {
        id
      }
    }
  }
`;

const getStakerStatus =
  (db: Database, config: any, logger: Logger) =>
  async (
    req: tRPCGetStakerStatusRequest,
  ): Promise<tRPCGetStakerStatusResponse> => {
    const {
      input: { address },
    } = req;

    const {
      referral: {
        graphql_url: graphqlUrl = null,
        environment = MAINNET_ENVIRONMENT,
      },
    } = config;

    logger.debug('Receiving request to get a if address has bonds %s', address);

    if (environment == TESTNET_ENVIRONMENT) {
      logger.debug(
        'Request to get a if address has bonds on testnet environment %s is finished',
        address,
      );

      return { bonded: true };
    }

    if (!graphqlUrl) {
      throw new TRPCError({
        code: 'NOT_IMPLEMENTED',
        message: 'Crawler config is not configured for getting stakers status',
      });
    }
    const addresses = [address.toLowerCase()];
    type dbResponse = {
      address: string;
    };
    let rows: dbResponse[] | null;

    try {
      rows = db
        .query<
          dbResponse,
          [string]
        >(`SELECT remote_address address FROM user_network_link WHERE local_address = ?`)
        .all(address);
      if (rows && rows.length > 0) {
        for (const row of rows) {
          addresses.push(row.address.toLowerCase());
        }
      }
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching user_network_link: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }
    logger.debug(
      'Request to get a if address has bonds %s is started with addresses %o',
      address,
      addresses,
    );
    const client = new GraphQLClient(graphqlUrl);
    const data = await client.request<{
      userBondPlains: { nodes: { id: string }[] };
    }>(GET_STAKER, {
      addresses,
    });

    logger.debug(
      'Request to get a if address has bonds %s is finished',
      address,
    );

    return { bonded: data.userBondPlains.nodes.length > 0 };
  };

export { getStakerStatus };
