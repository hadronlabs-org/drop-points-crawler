import { TRPCError } from '@trpc/server';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import {
  tRPCGetLinksRequest,
  tRPCGetLinksResponse,
} from '../../../types/tRPC/tRPCGetLinks';

const getLinks =
  (db: Database, logger: Logger) =>
  (req: tRPCGetLinksRequest): tRPCGetLinksResponse => {
    const {
      input: { address },
    } = req;

    logger.debug('Receiving request to get links for address %s', address);

    let rows = null;
    try {
      rows = db
        .query<
          { network: string; address: string },
          [string]
        >('SELECT network, remote_address as address FROM user_network_link WHERE local_address = ?')
        .all(address);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching links: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }

    logger.debug('Request to get links for address %s is finished', address);

    return rows;
  };

export { getLinks };
