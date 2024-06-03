import {
  tRPCPostKycRequest,
  tRPCPostKycResponse,
} from '../../../types/tRPCPostKyc';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import { TRPCError } from '@trpc/server';

const postKyc =
  (db: Database, logger: Logger) =>
  (req: tRPCPostKycRequest): tRPCPostKycResponse => {
    const {
      input: { address },
    } = req;
    const ts = parseInt((Date.now() / 1000).toString(), 10);

    logger.debug('Receiving request to post KYC for address %s', address);

    try {
      const pricesTx = db.prepare(
        'INSERT INTO user_kyc (address, ts) VALUES (?, ?)',
      );
      pricesTx.run(address, ts);
      pricesTx.finalize();
    } catch (e) {
      logger.error('Unexpected error occurred: %s', (e as Error).message);

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }

    logger.debug(
      'Request to post KYC for address %s successfully finished',
      address,
    );

    return { success: true };
  };

export { postKyc };
