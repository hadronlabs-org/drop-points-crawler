import { TRPCError } from '@trpc/server';

import {
  tRPCGetReferrerRequest,
  tRPCGetReferrerResponse,
} from '../../../types/tRPC/tRPCGetReferrer';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';

const getReferrer =
  (db: Database, logger: Logger) =>
  (req: tRPCGetReferrerRequest): tRPCGetReferrerResponse => {
    const {
      input: { referralCode },
    } = req;

    logger.debug(
      'Receiving request to get a referrer address for the referral code %s',
      referralCode,
    );

    let row = null;
    try {
      row = db
        .query<
          { address: string },
          [string]
        >('SELECT address FROM user_kyc WHERE referral_code = ? LIMIT 1')
        .get(referralCode);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching a referrer address: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }

    if (!row) {
      logger.error(
        'Referrer address for code %s not found in user KYC table',
        referralCode,
      );
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Referrer not found',
      });
    }

    logger.debug(
      'Request to get a referrer address for the referral code %s is finished',
      referralCode,
    );

    return row;
  };

export { getReferrer };
