import { Command } from 'commander';
import { getContext } from '../context';
import { getValidData } from '../../types/utils';
import { dropletRuleSchema } from '../../types/config/dropletRule';

export function registerScheduleCli(program: Command) {
  const scheduleCli = program
    .command('schedule')
    .description('Schedule commands');

  scheduleCli
    .command('add')
    .description('add a schedule')
    .argument('<protocol_id>', 'Protocol id')
    .argument('<asset_id>', 'dATOM, dTIA, etc')
    .argument('<start>', 'Datetime YYYY-MM-DDTHH:MM:SS.MSZ"')
    .argument('<end>', 'Datetime YYYY-MM-DDTHH:MM:SS.MSZ')
    .argument('<multiplier>', 'Decimal number')
    .argument('<enabled>', 'true or false')
    .option('-f --force')
    .action((protocolId, assetId, start, end, multiplier, enabled, options) => {
      const { config, logger, db } = getContext(program);

      const protocolObject = config.protocols[protocolId];
      const assetObject = config.protocols[protocolId].assets[assetId];

      if (!protocolObject) {
        logger.error('Protocol %s not found', protocolId);
        throw new Error(`Protocol ${protocolId} not found`);
      }
      if (!assetObject) {
        logger.error('Asset %s not found', assetId);
        throw new Error(`Asset ${assetId} not found`);
      }

      if (!protocolObject.frontend_data) {
        logger.error('Protocol frontend data %s not found', protocolId);
        throw new Error(`Protocol ${protocolId} frontend data not found`);
      }
      if (!assetObject.frontend_data) {
        logger.error('Asset frontend data %s not found', assetId);
        throw new Error(`Asset ${assetId} frontend data not found`);
      }

      const m = parseFloat(multiplier);
      if (isNaN(m)) {
        logger.error('Invalid multiplier %s', multiplier);
        throw new Error('Invalid multiplier');
      }
      const dateStart = (new Date(start).getTime() / 1000) | 0;
      const dateEnd = (new Date(end).getTime() / 1000) | 0;
      if (isNaN(dateStart)) {
        logger.error('Invalid start date %s', start);
        return;
      }
      if (isNaN(dateEnd) || dateEnd < Date.now() / 1000) {
        logger.error('Invalid end date %s', end);
        return;
      }
      if (dateStart >= dateEnd) {
        logger.error('End date must be greater than start date');
        return;
      }

      const enabledBool = enabled === 'true';

      if (!options.force) {
        const query = db.query<
          { count: number },
          [string, string, number, number, boolean]
        >(
          'SELECT COUNT(*) as count FROM schedule WHERE protocol_id = ? AND asset_id = ? AND start >= ? AND end <= ? AND enabled = ?',
        );
        if (
          query.get(protocolId, assetId, dateStart, dateEnd, enabledBool)?.count
        ) {
          logger.error('Schedule for this timeframe already exists');
          return;
        }
      }

      const tx = db.transaction(() => {
        const scheduleStatement = db.prepare(
          'INSERT INTO schedule (protocol_id, asset_id, multiplier, start, end, enabled) VALUES (?, ?, ?, ?, ?, ?)',
        );
        scheduleStatement.run(
          protocolId,
          assetId,
          multiplier,
          dateStart,
          dateEnd,
          enabledBool,
        );
        logger.info('Schedule has been inserted');

        let dropletRule;
        try {
          dropletRule = getValidData(
            {
              strategy: assetObject.frontend_data.strategy,
              description: assetObject.frontend_data.description,
              multiplier: assetObject.frontend_data.multiplier,
              chain: protocolObject.frontend_data.chain_name,
              status: assetObject.frontend_data.status,
              link: protocolObject.frontend_data.link,
              link_text: protocolObject.frontend_data.link_text,
              type: assetObject.frontend_data.type,
              featured: assetObject.frontend_data.featured,
              visible: assetObject.frontend_data.visible,
            },
            dropletRuleSchema,
            logger,
          );
        } catch (e) {
          logger.error('Cannot build valid rule for the schedule: %s', e);
          return;
        }

        const ruleStatement = db.prepare(
          'INSERT INTO user_points_rules (strategy, description, multiplier, chain, status, link, link_text, type, featured, visible) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        );
        ruleStatement.run(
          dropletRule.strategy,
          dropletRule.description,
          dropletRule.multiplier,
          dropletRule.chain,
          dropletRule.status,
          dropletRule.link,
          dropletRule.link_text,
          dropletRule.type,
          dropletRule.featured,
          dropletRule.visible,
        );
        logger.info('Rule has been inserted');
      });
      tx();
    });

  scheduleCli
    .command('list')
    .description('Display the schedule')
    .action(() => {
      const { logger, db } = getContext(program);

      logger.info('Schedule list');
      const query = db.query<
        {
          schedule_id: number;
          protocol_id: string;
          asset_id: string;
          multiplier: number;
          start: number;
          end: number;
          enabled: boolean;
        },
        null
      >('SELECT * FROM schedule ORDER BY protocol_id, asset_id, start, end');
      for (const row of query.all(null)) {
        logger.info(
          'ID: %s\t Protocol: %s \t Asset: %s\t Mul: %s\tStart: %s End: %s %s',
          row.schedule_id.toString().padEnd(0),
          row.protocol_id.padEnd(20 - row.protocol_id.length),
          row.asset_id,
          row.multiplier.toString().padEnd(4),
          row.start.toString().padEnd(11 - row.start.toString().length),
          row.end.toString().padEnd(11 - row.end.toString().length),
          row.enabled ? 'enabled' : 'disabled',
        );
      }
    });

  scheduleCli
    .command('delete')
    .description('Delete a schedule')
    .argument('<schedule_id>', 'Schedule ID')
    .action((scheduleId: string) => {
      const { logger, db } = getContext(program);

      logger.info('Deleting schedule');
      const id = parseInt(scheduleId, 10);
      if (isNaN(id)) {
        logger.error('Invalid schedule ID %s', scheduleId);
        return;
      }
      const query = db.query<{ count: number }, number>(
        'SELECT COUNT(*) as count FROM schedule WHERE schedule_id = ?',
      );
      if (!query.get(id)?.count) {
        logger.error('Schedule not found');
        return;
      }
      db.prepare<null, number>(
        'DELETE FROM schedule WHERE schedule_id = ?',
      ).run(id);
      logger.info('Schedule has been deleted');
    });
}
