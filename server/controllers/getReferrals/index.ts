import { TRPCError } from '@trpc/server';

import {
  tRPCGetReferralsRequest,
  tRPCGetReferralsResponse,
} from '../../../types/tRPC/tRPCGetReferrals';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';

const getReferrals =
  (db: Database, logger: Logger) =>
  (req: tRPCGetReferralsRequest): tRPCGetReferralsResponse => {
    const {
      input: { address },
    } = req;

    logger.debug('Receiving request to get referrals for address %s', address);

    let rows = null;
    try {
      rows = db
        .query<
          { referral: string },
          [string]
        >('SELECT referral FROM referrals WHERE referrer = ?')
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
        'Referrals for %s are not found in the referrals table',
        address,
      );
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Referrals are not found',
      });
    }

    logger.debug(
      'Request to get referrals for address %s is finished',
      address,
    );

    return { referrals: rows.map(({ referral }) => referral) };
  };

export { getReferrals };
