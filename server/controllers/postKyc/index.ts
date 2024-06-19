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

const REFERRAL_CODE_LENGTH = 7;

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

    let idResult = null;
    try {
      idResult = db
        .query<
          { kyc_id: number },
          [string, string]
        >('SELECT kyc_id FROM user_kyc WHERE kyc_id = ? AND kyc_provider = ?')
        .get(kycId, kycProvider);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while checking unique KYC ID: %s',
        (e as Error).message,
      );
      throw UNEXPECTED_TRPC_ERROR;
    }

    if (idResult) {
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
