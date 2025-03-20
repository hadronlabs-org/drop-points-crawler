import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import { TRPCError } from '@trpc/server';

import {
  tRPCPostDoMoreRequest,
  tRPCPostDoMoreResponse,
} from '../../../types/tRPC/tRPCPostDoMore';

const UNEXPECTED_TRPC_ERROR = new TRPCError({
  code: 'INTERNAL_SERVER_ERROR',
  message: 'Unexpected error occurred',
});

const postDoMore =
  (db: Database, logger: Logger) =>
  (req: tRPCPostDoMoreRequest): tRPCPostDoMoreResponse => {
    const {
      input: {
        asset1,
        asset2,
        aprMax,
        aprMin,
        multiplier,
        link,
        order,
        description,
      },
    } = req;

    logger.debug('Receiving request to save data for do more: %o', req.input);

    try {
      const stmt = db.query<
        { id: number },
        [string, string | null, string, number, number, number, string, number]
      >(
        'INSERT INTO do_more_items (asset1, asset2, description, multiplier, apr_min, apr_max, link, "order") VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING id',
      );
      const row = stmt.get(
        asset1,
        asset2 || null,
        description,
        multiplier,
        aprMin,
        aprMax,
        link,
        order,
      );

      if (!row) {
        logger.error('Failed to save data: %o', req.input);
        throw UNEXPECTED_TRPC_ERROR;
      }
      return row;
    } catch (e) {
      logger.error(
        'Unexpected error occurred while saving data %s',
        (e as Error).message,
      );
      throw UNEXPECTED_TRPC_ERROR;
    }
  };

export { postDoMore };
