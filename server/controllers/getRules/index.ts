import { Logger } from 'pino';
import { tRPCGetRulesResponse } from '../../../types/tRPC/tRPCGetRules';
import { TRPCError } from '@trpc/server';
import { connect } from '../../../db';

const getRules =
  (config: any, logger: Logger) => async (): Promise<tRPCGetRulesResponse> => {
    logger.debug('Receiving request to get Droplet rules');

    const db = await connect(true, config, logger);

    type dbResponse = {
      strategy: string;
      description: string;
      dropRate: number;
      chain: string;
      status: boolean;
      link: string;
      linkText: string;
      type: string;
      featured: boolean;
      visible: boolean;
    };
    let rows: dbResponse[] | null;
    try {
      const queryResult = await db.query(
        `SELECT 
         strategy, 
         description, 
         multiplier AS "dropRate", 
         chain, 
         status, 
         link, 
         link_text AS "linkText", 
         type, 
         featured 
       FROM user_points_rules 
       WHERE visible = true`,
      );
      rows = queryResult.rows;
    } catch (e) {
      logger.error('Unexpected error occurred while fetching Droplet rules');

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected error occurred',
      });
    } finally {
      await db.end();
    }

    if (rows.length === 0) {
      logger.error('Droplet rules are not found');
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Droplet rules not found',
      });
    }

    logger.debug('Request to get Droplet rules is finished');

    return {
      rules: rows.map((row) => ({
        ...row,
        status: Boolean(row.status),
        featured: Boolean(row.featured),
      })),
    };
  };

export { getRules };
