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
      total_rows: number;
    };

    type dbBadgeResponse = {
      address: string;
      badge_id: string;
    };

    let rows: dbResponse[] | null;
    let badges: dbBadgeResponse[] = [];
    const badgesIndexed = new Map<string, string[]>();
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
              place,
              SUM(points + points_l1 + points_l2) AS points
            FROM user_points_public_v1
            GROUP BY address)
          ),
          Target AS (
            SELECT rn, total_rows
            FROM OrderedRows
            WHERE address = ?
          )
          SELECT o.address, o.place, o.points, t.total_rows
          FROM OrderedRows o
          JOIN Target t 
            ON (
                -- if target is in the first rows, return rows 1,2,3,4,5
                (t.rn < 3 AND o.rn BETWEEN 1 AND 5)
                -- if target is the last rows, return the last 5 rows
              OR (t.rn > t.total_rows- 2 AND o.rn BETWEEN t.total_rows - 4 AND t.total_rows)
                -- otherwise, return previous, current, and next rows
              OR (t.rn > 1 AND t.rn < t.total_rows AND o.rn BETWEEN t.rn - 2 AND t.rn + 2)
              )
          ORDER BY o.rn;`,
        )
        .all(address);
      if (rows.length) {
        badges = db
          .query<
            dbBadgeResponse,
            null
          >(`SELECT address, badge_id FROM user_badges WHERE address IN ('${rows.map((v) => v.address).join(`','`)}')`)
          .all(null);
        for (const badge of badges) {
          if (badgesIndexed.has(badge.address)) {
            badgesIndexed.get(badge.address)?.push(badge.badge_id);
          } else {
            badgesIndexed.set(badge.address, [badge.badge_id]);
          }
        }
      }
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
    const out = {
      totalRows: rows.length ? rows[0].total_rows : 0,
      items: rows.map((v) => ({
        ...v,
        address: v.address === address ? v.address : null,
        badges: badgesIndexed.get(v.address) || [],
      })),
    };
    return out;
  };

export { getRankTable };
