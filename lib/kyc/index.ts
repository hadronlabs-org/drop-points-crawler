import { Client } from 'pg';
import { customAlphabet } from 'nanoid';
import { Logger } from 'pino';

const MAX_REFERRAL_CODE_ATTEMPTS = 100;

const REFERRAL_CODE_LENGTH = 8;

const CUSTOM_ALPHABET =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const insertKYCRecord = async (
  db: Client,
  logger: Logger,
  address: string,
  kycId: string,
  kycProvider: string,
  code?: string,
): Promise<string> => {
  const ts = (Date.now() / 1000) | 0;
  logger.debug('Insert KYC for address %s', address);

  try {
    const { rows } = await db.query(
      `SELECT 
         CASE WHEN b.address IS NULL THEN 0 ELSE 1 END AS blacklisted,
         CASE WHEN uk.kyc_id IS NULL THEN 0 ELSE 1 END AS kycIdExisted
       FROM 
         (SELECT $1 AS address, $2 AS kyc_id, $3 AS kyc_provider) f
       LEFT JOIN blacklist b ON b.address = f.address
       LEFT JOIN user_kyc uk ON uk.kyc_id = f.kyc_id AND uk.kyc_provider = f.kyc_provider
       LIMIT 1`,
      [address, kycId, kycProvider],
    );

    if (rows.length === 0) {
      logger.error(
        'Data cannot be fetched for %s from user KYC table and blacklist table',
        address,
      );
      throw new Error('Failed to fetch data', {
        cause: 'UNPROCESSABLE_CONTENT',
      });
    }

    const { blacklisted, kycIdExisted } = rows[0];

    if (blacklisted) {
      logger.error('The address %s is blacklisted', address);
      throw new Error('The address is blacklisted', { cause: 'FORBIDDEN' });
    }

    if (kycIdExisted) {
      logger.error(
        'The KYC ID %s already exists for the KYC provider %s',
        kycId,
        kycProvider,
      );
      throw new Error('This KYC ID already exists for the given KYC provider', {
        cause: 'CONFLICT',
      });
    }
  } catch (e) {
    logger.error(
      'Unexpected error occurred while checking KYC and blacklist: %s',
      (e as Error).message,
    );
    throw new Error('Unexpected error occurred', {
      cause: 'INTERNAL_SERVER_ERROR',
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
    referralCode = code || generateReferralCode();
    let codeFromDatabaseResult = null;
    try {
      const { rows } = await db.query(
        'SELECT referral_code FROM user_kyc WHERE referral_code = $1',
        [referralCode],
      );
      codeFromDatabaseResult = rows[0]; // Get the first row if it exists
    } catch (e) {
      logger.error(
        'Unexpected error occurred while checking unique referral code: %s',
        (e as Error).message,
      );
      throw new Error('Unexpected error occurred', {
        cause: 'INTERNAL_SERVER_ERROR',
      });
    }

    if (!codeFromDatabaseResult) break;

    if (attemptsNumber > MAX_REFERRAL_CODE_ATTEMPTS) {
      logger.error('Too many attempts to generate a referral code');
      throw new Error('Unexpected error occurred', {
        cause: 'INTERNAL_SERVER_ERROR',
      });
    }
  }

  try {
    await db.query(
      'INSERT INTO user_kyc (address, kyc_id, kyc_provider, referral_code, ts) VALUES ($1, $2, $3, $4, $5)',
      [address, kycId, kycProvider, referralCode, ts],
    );
  } catch (e) {
    logger.error(
      'Unexpected error occurred during KYC insertion: %s',
      (e as Error).message,
    );
    throw new Error('Unexpected error occurred', {
      cause: 'INTERNAL_SERVER_ERROR',
    });
  }

  logger.debug('Inserting KYC for address %s is finished', address);

  return referralCode;
};
