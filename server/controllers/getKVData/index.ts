import { TRPCError } from '@trpc/server';
import { Client } from 'pg';

import { Logger } from 'pino';
import {
  tRPCGetKVDataRequest,
  tRPCGetKVDataResponse,
} from '../../../types/tRPC/tRPCGetKVData';
import { connect } from '../../../db';

const getKVData =
  (config: any, logger: Logger) =>
  async (req: tRPCGetKVDataRequest): Promise<tRPCGetKVDataResponse> => {
    const db = await connect(true, config, logger);

    const {
      input: { key },
    } = req;

    logger.debug('Receiving request to get KV data for key %s', key);

    let row = null;
    try {
      const result = await db.query(
        'SELECT value FROM kvstore WHERE key = $1',
        [key],
      );
      row = result.rows[0];
    } catch (e) {
      logger.error(
        'Unexpected error occurred while querying kv : %s',
        (e as Error).message,
      );
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    } finally {
      await db.end();
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
