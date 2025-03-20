import { TRPCError } from '@trpc/server';

import { Database } from 'bun:sqlite';
import { Logger } from 'pino';

import { tRPCGetDoMoreResponse } from '../../../types/tRPC/tRPCGetDoMore';

const getDoMore =
  (db: Database, logger: Logger) => (): tRPCGetDoMoreResponse => {
    logger.debug('Receiving request to get do more data');

    try {
      const rows = db
        .query<
          {
            id: number;
            asset1: string;
            asset2: string | null;
            description: string;
            multiplier: number;
            apr_min: number;
            apr_max: number;
            link: string;
            order: number;
          },
          null
        >('SELECT * FROM do_more_items ORDER BY "order" ASC')
        .all(null)
        .map((row) => ({
          id: row.id,
          asset1: row.asset1,
          asset2: row.asset2,
          description: row.description,
          multiplier: row.multiplier,
          aprMin: row.apr_min,
          aprMax: row.apr_max,
          link: row.link,
          order: row.order,
        }));
      return rows;
    } catch (e) {
      logger.error(
        'Unexpected error occurred while querying DoMore : %s',
        (e as Error).message,
      );
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }
  };

export { getDoMore };
