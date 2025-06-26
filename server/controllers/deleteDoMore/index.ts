import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import { TRPCError } from '@trpc/server';
import {
  tRPCDeleteDoMoreRequest,
  tRPCDeleteDoMoreResponse,
} from '../../../types/tRPC/tRPCDeleteDoMore';

const UNEXPECTED_TRPC_ERROR = new TRPCError({
  code: 'INTERNAL_SERVER_ERROR',
  message: 'Unexpected error occurred',
});

const deleteDoMore =
  (db: Database, logger: Logger) =>
  (req: tRPCDeleteDoMoreRequest): tRPCDeleteDoMoreResponse => {
    const {
      input: { id },
    } = req;

    logger.debug(
      'Receiving request to delete data from do more: %o',
      req.input,
    );

    try {
      const res = db.exec<[number]>('DELETE FROM do_more_items WHERE id = ?', [
        id,
      ]);

      return { ok: (res as unknown as { changes: number }).changes > 0 };
    } catch (e) {
      logger.error(
        'Unexpected error occurred while saving data %s',
        (e as Error).message,
      );
      throw UNEXPECTED_TRPC_ERROR;
    }
  };

export { deleteDoMore };
