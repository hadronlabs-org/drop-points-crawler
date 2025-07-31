import { TRPCError } from '@trpc/server';

import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import {
  tRPCGetAirdropInfoResponse,
  tRPCGetAirdropInfoRequest,
} from '../../../types/tRPC/tRPCGetAirdropInfo';

const getAirdropInfo =
  (db: Database, logger: Logger) =>
    (req: tRPCGetAirdropInfoRequest): tRPCGetAirdropInfoResponse => {
      const {
        input: { address },
      } = req;

      logger.debug('Receiving request to get airdrop info for address %s', address);

      type dbResponse = {
        address: string;
        points: number;
        place: number;
        total_rows: number;
      };

      let rows: dbResponse[] | null;
      try {
        rows = db
          .query<dbResponse, [string]>(
            `WITH Combined AS (
              SELECT address, SUM(points + points_l1 + points_l2) AS total_points
              FROM (
                SELECT address, points, points_l1, points_l2 FROM user_points_public
                UNION ALL
                SELECT address, points, points_l1, points_l2 FROM user_points_public_v1
              )
              GROUP BY address
            ),
            Ranked AS (
              SELECT
                  address,
                  total_points,
                  ROW_NUMBER() OVER (ORDER BY total_points DESC) AS rn,
                  COUNT(*) OVER () AS total_rows
              FROM Combined
            ),
            Target AS (
              SELECT rn, total_rows
              FROM Ranked
              WHERE address = ?
            )
             SELECT r.address, r.total_points, r.total_rows
             FROM Ranked r, Target t
             WHERE
                 (t.rn < 3 AND r.rn BETWEEN 1 AND 5)
                OR (t.rn > t.total_rows - 2 AND r.rn BETWEEN t.total_rows - 4 AND t.total_rows)
                OR (r.rn BETWEEN t.rn - 2 AND t.rn + 2)
             ORDER BY r.rn;
            `,
          )
          .all(address);
      } catch (e) {
        logger.error(
          'Unexpected error occurred while fetching ranking: %s',
          (e as Error).message,
        );

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Unexpected error occurred',
        });
      }
      const out = {
        totalRows: rows.length ? rows[0].total_rows : 0,
        ranking: rows.map((v) => ({
          ...v,
          address: v.address === address ? v.address : null,
        })),
      };
      return out;
    };

export { getAirdropInfo };