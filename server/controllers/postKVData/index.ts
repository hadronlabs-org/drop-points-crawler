import { Database } from 'bun:sqlite';
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
  (db: Database, logger: Logger) =>
  (req: tRPCPostKVDataRequest): tRPCPostKVDataResponse => {
    const {
      input: { key, value },
    } = req;

    logger.debug(
      'Receiving request to save data for key %s value: %s',
      key,
      value,
    );

    try {
      db.exec<[string, string, string]>(
        'INSERT INTO kvstore (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = ?;',
        [key, value, value],
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
