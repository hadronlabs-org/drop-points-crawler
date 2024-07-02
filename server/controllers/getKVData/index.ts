import { TRPCError } from '@trpc/server';

import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import {
  tRPCGetKVDataRequest,
  tRPCGetKVDataResponse,
} from '../../../types/tRPC/tRPCGetKVData';

const getKVData =
  (db: Database, logger: Logger) =>
  (req: tRPCGetKVDataRequest): tRPCGetKVDataResponse => {
    const {
      input: { key },
    } = req;

    logger.debug('Receiving request to get KV data for key %s', key);

    let row = null;
    try {
      row = db
        .query<
          { value: string },
          [string]
        >('SELECT value FROM kvstore WHERE key = ?')
        .get(key);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while querying kv : %s',
        (e as Error).message,
      );
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }

    if (!row) {
      logger.error('Key %s not found in kvstore table', key);
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Key not found',
      });
    }

    return { ...row };
  };

export { getKVData };
