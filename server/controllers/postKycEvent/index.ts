import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import { TRPCError } from '@trpc/server';
import {
  tRPCPostKycEventRequest,
  tRPCPostKycEventResponse,
} from '../../../types/tRPC/tRPCPostKycEvent';

const UNEXPECTED_TRPC_ERROR = new TRPCError({
  code: 'INTERNAL_SERVER_ERROR',
  message: 'Unexpected error occurred',
});

const postKycEvent =
  (db: Database, logger: Logger) =>
  (req: tRPCPostKycEventRequest): tRPCPostKycEventResponse => {
    const {
      input: { address, eventType, additionalData },
    } = req;

    logger.debug('Receiving KYC event: %o', req.input);

    try {
      const stmt = db.query<
        { id: number },
        [string, string, number, string | null]
      >(
        'INSERT INTO kyc_events (address, event_type, ts, data) VALUES (?, ?, ?, ?) RETURNING id',
      );

      const now = Date.now();
      const row = stmt.get(
        address,
        eventType,
        now,
        additionalData !== undefined ? JSON.stringify(additionalData) : null,
      );

      if (!row) {
        logger.error('Failed to insert KYC event for address %s', address);
        throw UNEXPECTED_TRPC_ERROR;
      }

      return row;
    } catch (e) {
      logger.error(
        'Unexpected error occurred while saving KYC event: %s',
        (e as Error).message,
      );
      throw UNEXPECTED_TRPC_ERROR;
    }
  };

export { postKycEvent };
