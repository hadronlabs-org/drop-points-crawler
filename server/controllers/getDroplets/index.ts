import { TRPCError } from '@trpc/server';

import {
  tRPCGetDropletsRequest,
  tRPCGetDropletsResponse,
} from '../../../types/tRPC/tRPCGetDroplets';
import { Logger } from 'pino';
import { connect } from '../../../db';

const getDroplets =
  (config: any, logger: Logger) =>
  async (req: tRPCGetDropletsRequest): Promise<tRPCGetDropletsResponse> => {
    const db = await connect(true, config, logger);

    const {
      input: { address },
    } = req;

    logger.debug('Receiving request to get droplets for address %s', address);

    let row = null;
    try {
      const result = await db.query<{
        points: number;
        change: number;
        place: number;
      }>(
        'SELECT (points + points_l1 + points_l2)::bigint as points, change::bigint as change, place::int as place FROM user_points_public WHERE address = $1 LIMIT 1',
        [address],
      );
      row = result.rows[0];
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching points: %s',
        (e as Error).message,
      );

      await db.end();

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }

    if (!row) {
      logger.error(
        'Address %s not found in public user points table',
        req.input.address,
      );

      await db.end();

      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Address not found',
      });
    }

    let countResult;
    try {
      const countRes = await db.query(
        'SELECT count(*)::int as total FROM user_points_public',
      );
      countResult = countRes.rows[0];
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching total: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    } finally {
      await db.end();
    }

    if (!countResult) {
      logger.error(
        'Total could not be counted in public user points table',
        address,
      );
      throw new TRPCError({
        code: 'UNPROCESSABLE_CONTENT',
        message: 'Total is not accessible',
      });
    }

    logger.debug('Request to get droplets for address %s is finished', address);

    return { ...row, totalPlaces: countResult.total };
  };

export { getDroplets };
