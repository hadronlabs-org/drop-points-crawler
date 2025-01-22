import { TRPCError } from '@trpc/server';

import {
  tRPCGetNFTCollectionsRequest,
  tRPCGetNFTCollectionsResponse,
} from '../../../types/tRPC/tRPCGetNFTCollections';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';

const getNFTCollections =
  (db: Database, logger: Logger) =>
  (req: tRPCGetNFTCollectionsRequest): tRPCGetNFTCollectionsResponse => {
    const {
      input: { address },
    } = req;

    logger.debug(
      'Receiving request to get NFT collections for address %s',
      address,
    );

    let rows = null;
    try {
      rows = db
        .query<
          { collection: string; multiplier: number },
          [string]
        >('SELECT collection, amount multiplier FROM nft_data WHERE address = ? AND batch_id = (SELECT MAX(batch_id) FROM batches) GROUP BY address, collection')
        .all(address);
    } catch (e) {
      logger.error(
        'Unexpected error occurred while fetching NFT collections for address: %s',
        (e as Error).message,
      );

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    }

    logger.debug(
      'Request to get a NFT Collections for %s is finished',
      address,
    );

    return { collections: rows };
  };

export { getNFTCollections };
