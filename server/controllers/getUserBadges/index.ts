import { TRPCError } from '@trpc/server';

import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import {
  tRPCGetUserBadgesRequest,
  tRPCGetUserBadgesResponse,
} from '../../../types/tRPC/tRPCGetUserBadges';

const getUserBadges =
  (db: Database, logger: Logger) =>
  (req: tRPCGetUserBadgesRequest): tRPCGetUserBadgesResponse => {
    const {
      input: { address },
    } = req;

    logger.debug('Receiving request to get droplets for address %s', address);

    let rows: string[] = [];
    try {
      const ts = Math.round(Date.now() / 1000);
      rows = db
        .query<{ badge_id: string }, [string, number, number]>(
          `SELECT badge_id FROM user_badges WHERE address = ? and start <= ? and end >= ?`,
        )
        .all(address, ts, ts)
        .map((row) => row.badge_id);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching points: %s',
        (e as Error).message,
      );
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }

    return rows;
  };

export { getUserBadges };
