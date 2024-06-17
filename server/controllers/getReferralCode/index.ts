import { TRPCError } from '@trpc/server';

import {
  tRPCGetReferralCodeRequest,
  tRPCGetReferralCodeResponse,
} from '../../../types/tRPC/tRPCGetReferralCode';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';

const getReferralCode =
  (db: Database, logger: Logger) =>
  (req: tRPCGetReferralCodeRequest): tRPCGetReferralCodeResponse => {
    const {
      input: { address },
    } = req;

    logger.debug(
      'Receiving request to get a referral code for address %s',
      address,
    );

    let row = null;
    try {
      row = db
        .query<
          { referral_code: string },
          [string]
        >('SELECT referral_code FROM user_kyc WHERE address = ? LIMIT 1')
        .get(address);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching a referral code: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }

    if (!row) {
      logger.error('Referral code for %s not found in user KYC table', address);
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'KYC is not completed',
      });
    }

    logger.debug(
      'Request to get a referral code for address %s is finished',
      address,
    );

    return { referralCode: row.referral_code };
  };

export { getReferralCode };
