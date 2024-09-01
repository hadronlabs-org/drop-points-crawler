import Database from 'bun:sqlite';
import { customAlphabet } from 'nanoid';
import { Logger } from 'pino';

const MAX_REFERRAL_CODE_ATTEMPTS = 100;

const REFERRAL_CODE_LENGTH = 8;

const CUSTOM_ALPHABET =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const insertKYCRecord = (
  db: Database,
  logger: Logger,
  address: string,
  kycId: string,
  kycProvider: string,
  code?: string,
): string => {
  const ts = (Date.now() / 1000) | 0;
  logger.debug('Insert KYC for address %s', address);

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
    throw new Error('Unexpected error occurred', {
      cause: 'INTERNAL_SERVER_ERROR',
    });
  }

  if (!row) {
    logger.error(
      'Data cannot be fetched for %s from user KYC table and blacklist table',
      address,
    );
    throw new Error('Failed to fetch data', { cause: 'UNPROCESSABLE_CONTENT' });
  }

  const { blacklisted, kycIdExisted } = row;

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
    const userKycTx = db.prepare(
      'INSERT INTO user_kyc (address, kyc_id, kyc_provider, referral_code, ts) VALUES (?, ?, ?, ?, ?)',
    );
    userKycTx.run(address, kycId, kycProvider, referralCode, ts);
    userKycTx.finalize();
  } catch (e) {
    logger.error('Unexpected error occurred: %s', (e as Error).message);
    throw new Error('Unexpected error occurred', {
      cause: 'INTERNAL_SERVER_ERROR',
    });
  }

  logger.debug('Inserting KYC for address %s is finished', address);

  return referralCode;
};
