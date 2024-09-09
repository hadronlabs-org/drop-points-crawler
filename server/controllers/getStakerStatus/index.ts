import {
  tRPCGetStakerStatusRequest,
  tRPCGetStakerStatusResponse,
} from '../../../types/tRPC/tRPCGetStakerStatus';
import { Logger } from 'pino';
import { gql, GraphQLClient } from 'graphql-request';

const GET_STAKER = gql`
  query GetStake($address: String) {
    userBondPlains(first: 1, filter: { address: { equalTo: $address } }) {
      nodes {
        id
      }
    }
  }
`;

const GetStakerStatus =
  (graphqlUrl: string, logger: Logger) =>
  async (
    req: tRPCGetStakerStatusRequest,
  ): Promise<tRPCGetStakerStatusResponse> => {
    const {
      input: { address },
    } = req;
    logger.debug('Receiving request to get a if address has bonds %s', address);
    const client = new GraphQLClient(graphqlUrl);
    const data = await client.request<{
      userBondPlains: { nodes: { id: string }[] };
    }>(GET_STAKER, {
      address,
    });
    return { bonded: data.userBondPlains.nodes.length > 0 };
  };

export { GetStakerStatus };
