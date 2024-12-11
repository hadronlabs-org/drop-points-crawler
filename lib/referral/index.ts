import { Logger } from 'pino';
import { GraphQLClient, gql } from 'graphql-request';
import { PoolClient } from 'pg';

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
  db: PoolClient,
  config: any,
  logger: Logger<never>,
): Promise<void> => {
  logger.info('Updating KYC data');

  const { rows } = await db.query<{ height: number }>(
    'SELECT COALESCE(MAX(height), 0) AS height FROM referrals',
  );
  const height = rows[0]?.height || 0;
  logger.debug('Last Referral data at height %s', height);

  const GET_KYC = gql`
    query GetEvents($height: BigFloat!) {
      userBonds(
        filter: { height: { greaterThan: $height } }
        orderBy: [HEIGHT_ASC]
        first: 100
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

    try {
      await db.query(
        'INSERT INTO referrals (referrer, referral, height, ts) VALUES ($1, $2, $3, $4)',
        [
          one.ref,
          one.id,
          one.height,
          Math.floor(new Date(parseInt(one.ts) | 0).getTime() / 1000),
        ],
      );
    } catch (error) {
      logger.error(
        'Error inserting KYC data for referral %s: %s',
        one.ref,
        (error as Error).message,
      );
    }
  }
};
