import { Logger } from 'pino';
import { GraphQLClient, gql } from 'graphql-request';
import Database from 'bun:sqlite';

type UserBondsResponse =
  | {
      userBonds: {
        nodes: {
          id: string;
          ref: string;
          height: number;
          ts: string;
        }[];
      };
    }
  | undefined;

export const updateReferralData = async (
  db: Database,
  config: any,
  logger: Logger<never>,
): Promise<void> => {
  logger.info('Updating KYC data');
  const height =
    db
      .query<
        { height: number },
        null
      >('SELECT COALESCE(MAX(height),0) height FROM referrals')
      .get(null)?.height || 0;
  logger.debug('Last Referral data at height %s', height);
  const GET_KYC = gql`
    query GetEvents($height: BigFloat!) {
      userBonds(
        filter: { height: { greaterThan: $height } }
        orderBy: [HEIGHT_ASC]
        first: 1000
      ) {
        nodes {
          id
          ref
          height
          ts
        }
      }
    }
  `;
  const client = new GraphQLClient(config.referral.graphql_url);

  let data: UserBondsResponse;
  try {
    data = await client.request<UserBondsResponse>(GET_KYC, {
      height,
    });
  } catch (e) {
    logger.error(e);
    return;
  }
  if (!data) {
    logger.error('No data received');
    return;
  }
  if (data && data.userBonds.nodes.length === 0) {
    logger.info('No new KYC data');
    return;
  }
  for (const one of data.userBonds.nodes) {
    logger.debug('Adding KYC data %o', one);
    db.exec<[string, string, number, number]>(
      'INSERT INTO referrals (referrer, referral, height, ts) VALUES (?, ?, ?, ?)',
      [one.ref, one.id, one.height, (new Date(one.ts).getTime() / 1000) | 0],
    );
  }
};
