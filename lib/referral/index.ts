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
  logger.debug('Stage 2: adding newcomers');
  const badge = db
    .query<
      { params: string },
      null
    >(`SELECT params FROM badges WHERE id = 'newcomer'`)
    .get(null);
  if (!badge) {
    logger.error('Badge newcomer not found');
    process.exit(1);
  }
  const badgeParams = JSON.parse(badge.params);
  for (const one of data.userBonds.nodes) {
    logger.debug('Adding KYC data %o', one);
    const userBadge = db
      .query<
        { cnt: number },
        [string]
      >(`SELECT count(*) cnt FROM user_badges WHERE address = ?`)
      .get(one.id); // if user has badges so he is not a newcomer

    if (userBadge && userBadge.cnt === 0) {
      const ts = (new Date(one.ts).getTime() / 1000) | 0;
      db.exec<[string, string, number, number]>(
        'INSERT INTO user_badges (address, badge_id, "start", "end") VALUES (?, ?, ?, ?)',
        [one.id, 'newcomer', ts, ts + badgeParams.days * 24 * 60 * 60],
      );
    }

    if (one.ref.length > 0) {
      db.exec<[string, string, number, number]>(
        'INSERT INTO referrals (referrer, referral, height, ts) VALUES (?, ?, ?, ?)',
        [one.ref, one.id, one.height, (new Date(one.ts).getTime() / 1000) | 0],
      );
    }
  }
};
