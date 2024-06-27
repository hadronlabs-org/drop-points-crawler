import { TRPCError } from '@trpc/server';

import {
  referral,
  tRPCGetReferralsRequest,
  tRPCGetReferralsResponse,
} from '../../../types/tRPC/tRPCGetReferrals';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';

const getReferrals =
  (db: Database, config: any, logger: Logger) =>
  (req: tRPCGetReferralsRequest): tRPCGetReferralsResponse => {
    const {
      input: { address },
    } = req;

    logger.debug('Receiving request to get referrals for address %s', address);

    type dbResponse = {
      l1Referral: string;
      l2Referral: string;
    };

    let rows: dbResponse[] | null;
    try {
      rows = db
        .query<dbResponse, [string]>(
          `SELECT r1.referral as l1Referral, r2.referral as l2Referral 
                    FROM referrals r1 LEFT JOIN referrals r2 ON (r2.referrer = r1.referral) 
                    WHERE r1.referrer = ?`,
        )
        .all(address);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching referrals: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
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
    rows.forEach((row) => {
      const { l1Referral, l2Referral } = row;

      const referralExists = referrals.find(
        (referral) =>
          referral.address === l1Referral || referral.address === l2Referral,
      );
      if (referralExists) return;

      if (l1Referral) {
        referrals.push({
          address: l1Referral,
          level: 1,
          percent: levelOnePercent,
        });
      }

      if (l2Referral) {
        referrals.push({
          address: l2Referral,
          level: 2,
          percent: levelTwoPercent,
        });
      }
    });

    return { referrals };
  };

export { getReferrals };
