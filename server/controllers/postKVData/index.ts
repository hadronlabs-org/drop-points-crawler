import { Client } from 'pg';
import { Logger } from 'pino';
import { TRPCError } from '@trpc/server';
import {
  tRPCPostKVDataRequest,
  tRPCPostKVDataResponse,
} from '../../../types/tRPC/tRPCPostKVData';

const UNEXPECTED_TRPC_ERROR = new TRPCError({
  code: 'INTERNAL_SERVER_ERROR',
  message: 'Unexpected error occurred',
});

const postKVData =
  (db: Client, logger: Logger) =>
  async (req: tRPCPostKVDataRequest): Promise<tRPCPostKVDataResponse> => {
    const {
      input: { key, value },
    } = req;

    logger.debug(
      'Receiving request to save data for key %s value: %s',
      key,
      value,
    );

    try {
      await db.query(
        `INSERT INTO kvstore (key, value) 
         VALUES ($1, $2) 
         ON CONFLICT (key) 
         DO UPDATE SET value = $2;`,
        [key, value],
      );
      return true;
    } catch (e) {
      logger.error(
        'Unexpected error occurred while saving data: key: %s, value: %s, error: %s ',
        key,
        value,
        (e as Error).message,
      );
      throw UNEXPECTED_TRPC_ERROR;
    }
  };

export { postKVData };
