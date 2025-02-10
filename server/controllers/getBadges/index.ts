import { TRPCError } from '@trpc/server';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import { tRPCGetBadgesResponse } from '../../../types/tRPC/tRPCGetBadges';

const getBadges =
  (db: Database, logger: Logger) => (): tRPCGetBadgesResponse => {
    logger.debug('Receiving request to get badges');
    type dbResponse = {
      id: string;
      name: string;
      description?: string;
      mul: number;
      params?: string;
    };
    let rows: dbResponse[] = [];
    try {
      rows = db.query<dbResponse, null>('SELECT * FROM badges').all(null);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching badges: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }
    const out = {
      badges: rows.map((v) => ({
        ...v,
        params: v.params ? (JSON.parse(v.params) as any) : null,
      })),
    };
    console.log(out);
    return out;
  };

export { getBadges };
