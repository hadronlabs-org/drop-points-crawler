import { Logger } from 'pino';
import { connect } from '../../db/index';
import { GraphQLClient, gql } from 'graphql-request';

export const updateReferralData = async (
  config: any,
  logger: Logger<never>,
): Promise<void> => {
  const db = connect(false, config, logger);
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
        first: 1
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
  let data: any;
  try {
    data = (await client.request(GET_KYC, { height })) as any;
  } catch (e) {
    logger.error(e);
    return;
  }
  if (data.userBonds.nodes.length === 0) {
    logger.info('No new KYC data');
    return;
  }
  for (const one of data.userBonds.nodes) {
    logger.debug('Adding KYC data %o', one);
    db.exec<[string, string, number, number]>(
      'INSERT INTO referrals (referrer, referral, height, ts) VALUES (?, ?, ?, ?)',
      [one.ref, one.id, one.height, (new Date(one.date).getTime() / 1000) | 0],
    );
  }
};
