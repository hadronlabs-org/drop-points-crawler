import { TRPCError } from '@trpc/server';

import {
  referral,
  tRPCGetReferralsRequest,
  tRPCGetReferralsResponse,
} from '../../../types/tRPC/tRPCGetReferrals';
import { Logger } from 'pino';
import { getDatabasePool } from '../../../db';

const getReferrals =
  (config: any, logger: Logger) =>
  async (req: tRPCGetReferralsRequest): Promise<tRPCGetReferralsResponse> => {
    const pool = await getDatabasePool(true, config, logger);
    const db = await pool.connect();

    const {
      input: { address },
    } = req;

    logger.debug('Receiving request to get referrals for address %s', address);

    type dbResponse = {
      l1Referral: string;
      l2Referral: string;
    };

    let rows: dbResponse[] | null = [];
    try {
      const queryResult = await db.query(
        `SELECT r1.referral as "l1Referral", r2.referral as "l2Referral" 
         FROM referrals r1 
         LEFT JOIN referrals r2 ON r2.referrer = r1.referral 
         WHERE r1.referrer = $1`,
        [address],
      );
      rows = queryResult.rows;
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching referrals: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    } finally {
      db.release();
      await pool.end();
    }

    if (!rows) {
      logger.error(
        'Referrals for %s cannot be fetched from the referrals table',
        address,
      );
      throw new TRPCError({
        code: 'UNPROCESSABLE_CONTENT',
        message: 'Referrals cannot be fetched',
      });
    }

    const { l1_percent: levelOnePercent, l2_percent: levelTwoPercent } = config;
    if (!levelOnePercent || !levelTwoPercent) {
      logger.error(
        'Unexpected error occurred while reading referrals percents from config: config is not valid',
        'Config is not valid: l1_percent or l2_percent are not present',
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }

    logger.debug(
      'Request to get referrals for address %s is finished',
      address,
    );

    const referrals: referral[] = [];
    const l1Cash = new Set();
    for (const row of rows) {
      const { l1Referral, l2Referral } = row;
      if (!l1Cash.has(l1Referral)) {
        referrals.push({
          address: l1Referral,
          level: 1,
          percent: levelOnePercent,
        });
      }
      l1Cash.add(l1Referral);
      if (l2Referral) {
        referrals.push({
          address: l2Referral,
          level: 2,
          percent: levelTwoPercent,
        });
      }
    }

    return { referrals };
  };

export { getReferrals };
