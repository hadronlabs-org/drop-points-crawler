import { TRPCError } from '@trpc/server';

import {
  tRPCGetReferrerRequest,
  tRPCGetReferrerResponse,
} from '../../../types/tRPC/tRPCGetReferrer';
import { Logger } from 'pino';
import { getDatabasePool } from '../../../db';

const getReferrer =
  (config: any, logger: Logger) =>
  async (req: tRPCGetReferrerRequest): Promise<tRPCGetReferrerResponse> => {
    const pool = await getDatabasePool(true, config, logger);
    const db = await pool.connect();

    const {
      input: { referralCode },
    } = req;

    logger.debug(
      'Receiving request to get a referrer address for the referral code %s',
      referralCode,
    );

    let row = null;
    try {
      const { rows } = await db.query(
        'SELECT address FROM user_kyc WHERE referral_code = $1 LIMIT 1',
        [referralCode],
      );
      row = rows[0];
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching a referrer address: %s',
        (e as Error).message,
      );

      db.release();
      await pool.end();

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    } finally {
      db.release();
      await pool.end();
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

    return { address: row.address };
  };

export { getReferrer };
