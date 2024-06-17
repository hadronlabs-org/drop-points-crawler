import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import { tRPCGetRulesResponse } from '../../../types/tRPC/tRPCGetRules';
import { TRPCError } from '@trpc/server';

const getRules = (db: Database, logger: Logger) => (): tRPCGetRulesResponse => {
  logger.debug('Receiving request to get Droplet rules');

  let rows = null;
  try {
    rows = db
      .query<
        {
          strategy: string;
          description: string;
          dropRate: number;
          chain: string;
          status: boolean;
          link: string;
          linkText: string;
          type: string;
        },
        []
      >(
        'SELECT strategy, description, multiplier as dropRate, chain, status, link, link_text as linkText, type FROM user_points_rules',
      )
      .all();
  } catch (e) {
    logger.error('Unexpected error occurred while fetching Droplet rules');

    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Unexpected error occurred',
    });
  }

  if (!rows) {
    logger.error('Droplet rules are not found');
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'Referrer not found',
    });
  }

  logger.debug('Request to get Droplet rules is finished');

  return {
    rules: rows.map((row) => ({ ...row, status: Boolean(row.status) })),
  };
};

export { getRules };
