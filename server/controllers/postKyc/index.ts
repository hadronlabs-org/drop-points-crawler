import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import { TRPCError } from '@trpc/server';
import { customAlphabet } from 'nanoid';

import {
  tRPCPostKycRequest,
  tRPCPostKycResponse,
} from '../../../types/tRPC/tRPCPostKyc';

const UNEXPECTED_TRPC_ERROR = new TRPCError({
  code: 'INTERNAL_SERVER_ERROR',
  message: 'Unexpected error occurred',
});

const MAX_REFERRAL_CODE_ATTEMPTS = 100;

const REFERRAL_CODE_LENGTH = 8;

const CUSTOM_ALPHABET =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const postKyc =
  (db: Database, logger: Logger) =>
  (req: tRPCPostKycRequest): tRPCPostKycResponse => {
    const {
      input: { address, kycId, kycProvider },
    } = req;
    const ts = parseInt((Date.now() / 1000).toString(), 10);

    logger.debug('Receiving request to post KYC for address %s', address);

    let row = null;
    try {
      row = db
        .query<
          { blacklisted: number; kycIdExisted: number },
          [string, string, string]
        >(
          `SELECT IIF(IFNULL(b.address, "ok") == "ok", 0, 1) blacklisted, 
                           IIF(IFNULL(uk.kyc_id, "ok") == "ok", 0, 1) kycIdExisted 
                           FROM (select ? address, ? kyc_id, ? kyc_provider) f 
                           LEFT JOIN blacklist b ON (b.address = f.address) 
                           LEFT JOIN user_kyc uk ON (uk.kyc_id = f.kyc_id AND uk.kyc_provider = f.kyc_provider)
                           LIMIT 1`,
        )
        .get(address, kycId, kycProvider);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while checking unique KYC ID: %s',
        (e as Error).message,
      );
      throw UNEXPECTED_TRPC_ERROR;
    }

    if (!row) {
      logger.error(
        'Data cannot be fetched for %s from user KYC table and blacklist table',
        address,
      );
      throw new TRPCError({
        code: 'UNPROCESSABLE_CONTENT',
        message: 'Failed to fetch data',
      });
    }

    const { blacklisted, kycIdExisted } = row;

    if (blacklisted) {
      logger.error('The address %s is blacklisted', address);
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'The address is blacklisted',
      });
    }

    if (kycIdExisted) {
      logger.error(
        'The KYC ID %s already exists for the KYC provider %s',
        kycId,
        kycProvider,
      );
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'This KYC ID already exists for the given KYC provider',
      });
    }

    const generateReferralCode = customAlphabet(
      CUSTOM_ALPHABET,
      REFERRAL_CODE_LENGTH,
    );

    let referralCode = null;
    let attemptsNumber = 0;
    while (true) {
      attemptsNumber += 1;

      referralCode = generateReferralCode();

      let codeFromDatabaseResult = null;
      try {
        codeFromDatabaseResult = db
          .query<
            { referralCode: string },
            [string]
          >('SELECT referral_code FROM user_kyc WHERE referral_code = ?')
          .get(referralCode);
      } catch (e) {
        logger.error(
          'Unexpected error occurred while checking unique referral code: %s',
          (e as Error).message,
        );
        throw UNEXPECTED_TRPC_ERROR;
      }

      if (!codeFromDatabaseResult) break;

      if (attemptsNumber > MAX_REFERRAL_CODE_ATTEMPTS) {
        logger.error('Too many attempts to generate a referral code');
        throw UNEXPECTED_TRPC_ERROR;
      }
    }

    try {
      const userKycTx = db.prepare(
        'INSERT INTO user_kyc (address, kyc_id, kyc_provider, referral_code, ts) VALUES (?, ?, ?, ?, ?)',
      );
      userKycTx.run(address, kycId, kycProvider, referralCode, ts);
      userKycTx.finalize();
    } catch (e) {
      logger.error('Unexpected error occurred: %s', (e as Error).message);
      throw UNEXPECTED_TRPC_ERROR;
    }

    logger.debug('Request to post KYC for address %s is finished', address);

    return { referralCode };
  };

export { postKyc };
