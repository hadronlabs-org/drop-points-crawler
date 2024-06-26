import { TRPCError } from '@trpc/server';

import {
  tRPCGetReferralCodeRequest,
  tRPCGetReferralCodeResponse,
} from '../../../types/tRPC/tRPCGetReferralCode';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';

const UNEXPECTED_TRPC_ERROR = new TRPCError({
  code: 'INTERNAL_SERVER_ERROR',
  message: 'Unexpected error occurred',
});

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
          { referralCode: string; blacklisted: boolean; kycPassed: boolean },
          [string]
        >(
          `SELECT uk.referral_code as referralCode, 
                           IIF(IFNULL(b.address, "ok") == "ok", 0, 1) blacklisted, 
                           IIF(IFNULL(uk.address, "ok") == "ok", 0, 1) kycPassed 
                           FROM (select ? address) f 
                           LEFT JOIN blacklist b ON (b.address = f.address) 
                           LEFT JOIN user_kyc uk ON (uk.address = f.address)
                           LIMIT 1`,
        )
        .get(address);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching a referral code: %s',
        (e as Error).message,
      );

      throw UNEXPECTED_TRPC_ERROR;
    }

    if (!row) {
      logger.error(
        'Referral code cannot be fetched for %s from user KYC table',
        address,
      );
      throw new TRPCError({
        code: 'UNPROCESSABLE_CONTENT',
        message: 'Failed to fetch data',
      });
    }

    const { referralCode, blacklisted, kycPassed } = row;

    if (blacklisted) {
      logger.error('The address %s is blacklisted', address);
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'This address is blacklisted',
      });
    }

    if (!kycPassed) {
      logger.error('KYC is not passed for %s', address);
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'KYC is not passed',
      });
    }

    if (!referralCode) {
      logger.error(
        'KYC passed for %s but referral code not found in user KYC table',
        address,
      );
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'Referral code not found',
      });
    }

    logger.debug(
      'Request to get a referral code for address %s is finished',
      address,
    );

    return { referralCode };
  };

export { getReferralCode };
