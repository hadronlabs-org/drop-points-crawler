import { TRPCError } from '@trpc/server';

import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import { tRPCGetLeaderboardInfoResponse } from '../../types/tRPC/tRPCGetLeaderboardInfo';

const getLeaderboardInfo =
  (db: Database, logger: Logger) => (): tRPCGetLeaderboardInfoResponse => {
    logger.debug('Receiving request to get leaderboard info');

    type dbResponse = {
      address: string;
      points: number;
      place: number;
    };

    let rows: dbResponse[] | null;
    try {
      rows = db
        .query<dbResponse, []>(
          `SELECT
               address,
               SUM(points) AS points,
               ROW_NUMBER() OVER (ORDER BY SUM(points) DESC) AS place
             FROM user_points_public
             GROUP BY address
             ORDER BY points DESC;`,
        )
        .all();
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching leaderboard: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }

    return rows || [];
  };

export { getLeaderboardInfo };
