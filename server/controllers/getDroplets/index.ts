import { TRPCError } from '@trpc/server';

import {
  tRPCGetDropletsRequest,
  tRPCGetDropletsResponse,
} from '../../../types/tRPCGetDroplets';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';

const getDroplets =
  (db: Database, logger: Logger) =>
  (req: tRPCGetDropletsRequest): tRPCGetDropletsResponse => {
    const {
      input: { address },
    } = req;

    logger.debug('Receiving request to get droplets for address %s', address);

    const row = db
      .query<
        { points: number; place: number },
        [string]
      >('SELECT points, place FROM user_points_public WHERE address = ? LIMIT 1')
      .get(req.input.address);

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

    logger.debug(
      'Request to get droplets for address %s successfully finished',
      address,
    );

    return row;
  };

export { getDroplets };
