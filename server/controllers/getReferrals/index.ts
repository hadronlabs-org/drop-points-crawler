import { TRPCError } from '@trpc/server';

import {
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
      referral: string;
    };

    let rows: dbResponse[] | null;
    try {
      rows = db
        .query<
          dbResponse,
          [string]
        >('SELECT referral FROM referrals WHERE referrer = ?')
        .all(address);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching level one referrals: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }

    if (!rows) {
      logger.error(
        'Level one referrals for %s cannot be fetched in the referrals table',
        address,
      );
      throw new TRPCError({
        code: 'UNPROCESSABLE_CONTENT',
        message: 'Level one referrals cannot be fetched',
      });
    }

    const levelOneReferrals = rows.map(({ referral }) => referral);

    const placeholders = new Array(levelOneReferrals.length)
      .fill('?')
      .join(',');
    try {
      rows = db
        .query<
          dbResponse,
          string[]
        >(`SELECT referral FROM referrals WHERE referrer IN (${placeholders})`)
        .all(...levelOneReferrals);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching level two referrals: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }

    const levelTwoReferrals = rows.map(({ referral }) => referral);

    logger.debug(
      'Request to get referrals for address %s is finished',
      address,
    );

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

    return {
      referrals: levelOneReferrals
        .map((levelOneReferral) => ({
          address: levelOneReferral,
          level: 1,
          percent: levelOnePercent,
        }))
        .concat(
          levelTwoReferrals.map((levelTwoReferral) => ({
            address: levelTwoReferral,
            level: 2,
            percent: levelTwoPercent,
          })),
        ),
    };
  };

export { getReferrals };
