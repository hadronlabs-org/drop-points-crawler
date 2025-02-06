import { TRPCError } from '@trpc/server';

import {
  tRPCGetDropletsRequest,
  tRPCGetDropletsResponse,
} from '../../../types/tRPC/tRPCGetDroplets';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';

const getDroplets =
  (db: Database, logger: Logger) =>
  (req: tRPCGetDropletsRequest): tRPCGetDropletsResponse => {
    const {
      input: { address },
    } = req;

    logger.debug('Receiving request to get droplets for address %s', address);

    let row = null;
    try {
      const tableName = req.input.wave
        ? `user_points_public_v${req.input.wave}`
        : 'user_points_public';
      row = db
        .query<
          { points: number; change: number; place: number },
          [string]
        >(`SELECT sum(points + points_l1 + points_l2) as points, sum(change) as change, place FROM ${tableName} WHERE address = ? GROUP BY address`)
        .get(address);
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

    if (!row) {
      logger.error(
        'Address %s not found in public user points table',
        req.input.address,
      );
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Address not found',
      });
    }

    let countResult;
    try {
      countResult = db
        .query<
          { total: number },
          []
        >('SELECT count(*) as total FROM user_points_public')
        .get();
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching total: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
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
