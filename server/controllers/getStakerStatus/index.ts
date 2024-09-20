import {
  MAINNET_ENVIRONMENT,
  TESTNET_ENVIRONMENT,
  tRPCGetStakerStatusRequest,
  tRPCGetStakerStatusResponse
} from "../../../types/tRPC/tRPCGetStakerStatus";
import { Logger } from 'pino';
import { gql, GraphQLClient } from 'graphql-request';
import { TRPCError } from '@trpc/server';

const GET_STAKER = gql`
  query GetStake($address: String) {
    userBondPlains(first: 1, filter: { address: { equalTo: $address } }) {
      nodes {
        id
      }
    }
  }
`;

const getStakerStatus =
  (config: any, logger: Logger) =>
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

    const client = new GraphQLClient(graphqlUrl);
    const data = await client.request<{
      userBondPlains: { nodes: { id: string }[] };
    }>(GET_STAKER, {
      address,
    });

    logger.debug(
      'Request to get a if address has bonds %s is finished',
      address,
    );

    return { bonded: data.userBondPlains.nodes.length > 0 };
  };

export { getStakerStatus };
