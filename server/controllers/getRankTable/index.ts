import { TRPCError } from '@trpc/server';

import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import {
  tRPCGetRankItemsResponse,
  tRPCGetRankTableRequest,
} from '../../../types/tRPC/tRPCGetRankTable';

const getRankTable =
  (db: Database, logger: Logger) =>
  (req: tRPCGetRankTableRequest): tRPCGetRankItemsResponse => {
    const {
      input: { address },
    } = req;

    logger.debug('Receiving request to get rank table for address %s', address);

    type dbResponse = {
      address: string;
      points: number;
      place: number;
    };

    let rows: dbResponse[] | null;
    try {
      rows = db
        .query<dbResponse, [string]>(
          `WITH OrderedRows AS (
            SELECT 
              address,
              place,
              points,
              ROW_NUMBER() OVER (ORDER BY place) AS rn,
              COUNT(*) OVER () AS total_rows
            FROM
            (SELECT
              address,
              (points + points_l1 + points_l2) as points,
              place
            FROM user_points_public_v1
            GROUP BY address)
          ),
          Target AS (
            SELECT rn, total_rows
            FROM OrderedRows
            WHERE address = ?
          )
          SELECT o.address, o.points, o.place
          FROM OrderedRows o
          JOIN Target t 
            ON (
                -- if target is the first row, return rows 1,2,3
                (t.rn = 1 AND o.rn BETWEEN 1 AND 3)
                -- if target is the last row, return the last three rows
              OR (t.rn = t.total_rows AND o.rn BETWEEN t.total_rows - 2 AND t.total_rows)
                -- otherwise, return previous, current, and next rows
              OR (t.rn > 1 AND t.rn < t.total_rows AND o.rn BETWEEN t.rn - 1 AND t.rn + 1)
              )
          ORDER BY o.rn`,
        )
        .all(address);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching referrals: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }
    return {
      items: rows.map((v) => ({ ...v, badgeType: 'gold' })),
    };
  };

export { getRankTable };
