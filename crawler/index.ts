import 'dotenv/config';
import { Command } from 'commander';
import { connect } from '../db';
import { logger } from '../lib/logger';
import sources from '../lib/sources';
import { UserBalance } from '../types/userBalance';
import fs from 'fs';
import toml from 'toml';

const program = new Command();
program.option('--config <config>', 'Config file path', 'config.toml');

if (!process.env.LOG_LEVEL) {
  throw new Error('LOG_LEVEL environment variable not set');
}

const config = toml.parse(
  fs.readFileSync(program.getOptionValue('config'), 'utf-8'),
);

const db = connect(true, config);

program
  .command('prepare')
  .description('Prepare tasks for processing sources')
  .action(async () => {
    process.exit();
    const enabledSources = process.env.ENABLED_SOURCES?.split(',') || [];
    if (!enabledSources.length) {
      throw new Error('No active sources found, please define ENABLED_SOURCES');
    }
    logger.info('Enabled sources: %s', enabledSources);
    const getHeights = enabledSources.filter(Boolean).map((key) => {
      const source = sources[key as keyof typeof sources];
      if (!source) {
        throw new Error(`Source ${key} not found`);
      }
      return source.getLastBlockHeight();
    });

    const maxBatchId =
      db
        .query<
          { batch_id: number },
          null
        >('SELECT max(batch_id) as batch_id FROM tasks')
        .get(null)?.batch_id || 0;

    const results = await Promise.all(getHeights);
    const heights = enabledSources.reduce(
      (acc, key, idx) => [...acc, { $source: key, $height: results[idx] }],
      [] as { $source: string; $height: number }[],
    );
    logger.info('Heights: %o', heights);
    const heightJitter = parseInt(process.env.HEIGHT_JITTER || '0', 10);
    const ts = Date.now() / 1000;
    const statement = db.prepare(
      'INSERT INTO tasks (source_id, height, status, batch_id, ts) VALUES ($source, $height, $status, $batch_id, $ts)',
    );
    const insert = db.transaction((tasks) => {
      for (const task of heights)
        statement.run({
          $source: task.$source,
          $height: task.$height - Math.floor(heightJitter * Math.random()),
          $status: 'new',
          $batch_id: maxBatchId + 1,
          $ts: ts,
        });
      return tasks.length;
    });
    const res = insert(heights);
    logger.info('Inserted %d tasks', res);
  });

program
  .command('finish')
  .option('-b, --batch_id <batch_id>', 'batch ID  to finish')
  .action((options) => {
    const enabledSources = process.env.ENABLED_SOURCES?.split(',') || [];
    if (!enabledSources.length) {
      throw new Error(
        'No enabled sources found, please define ENABLED_SOURCES',
      );
    }
    const batchId = (() => {
      if (options.batch_id === undefined) {
        const row = db.query<{ batch_id: number }, null>(
          'SELECT batch_id FROM tasks WHERE status = "ready" ORDER BY height ASC LIMIT 1',
        );
        if (!row) {
          logger.info('No tasks found');
        }
        if (!row.get(null)) {
          return;
        }
        const batchId = row.get(null)?.batch_id;
        row.finalize();
        return batchId;
      } else {
        const query = db.query<{ batch_id: number }, [number, string]>(
          'SELECT batch_id FROM tasks WHERE status = "ready" AND height = ? AND source_id IN (?) ORDER BY batch_id ASC LIMIT 1',
        );
        const row = query.get(options.batch_id, enabledSources.join(', '));
        if (!row) {
          logger.info('No tasks found for batch_id %s', options.batch_id);
        }
        query.finalize();
        return row?.batch_id;
      }
    })();
    if (!batchId) {
      return;
    }
    logger.info('Finishing task for batch_id %s', batchId);
    const query = db.query<{ cnt: number }, number>(
      'SELECT count(*) as cnt FROM tasks WHERE batch_id = ? AND status = "ready"',
    );
    const cnt = query.get(batchId)?.cnt;
    if (cnt !== enabledSources.length) {
      logger.info('Not all tasks are ready');
    }
    logger.debug('All tasks are ready');
    // Calculate points for each user based on all sources
    // Update user points locally
    // Update user points in CW20 contract
    db.prepare<null, number>(
      'UPDATE tasks SET status="processed" WHERE batch_id=$batch_id',
    ).run(batchId);
  });

program
  .command('crawl')
  .argument('<source>', 'source to crawl')
  .description('Process the specified source')
  .option('-b --batch_id <batch_id>', 'Batch ID to process')
  .action(async (source: string, options) => {
    // Get the batch ID and height of the task
    const { batchId, height } = (() => {
      if (options.batch_id) {
        const batchId = parseInt(options.batch_id, 10);
        if (isNaN(batchId)) {
          logger.error('Invalid batch ID %s', options.batch_id);
          throw new Error('Invalid batch ID');
        }
        const row = db
          .query<
            { height: number },
            [number, string]
          >('SELECT height FROM tasks WHERE batch_id = ? AND source_id = ? AND status = "new" ORDER BY height ASC LIMIT 1')
          .get(batchId, source);
        if (!row) {
          logger.info('No tasks found for batch_id %s', options.batch_id);
          throw new Error('No tasks found');
        }
        return { batchId, height: row.height };
      } else {
        const enabledSources = process.env.ENABLED_SOURCES?.split(',') || [];
        if (!enabledSources.length) {
          logger.error(
            'No active sources found, please define ENABLED_SOURCES',
          );
          throw new Error(
            'No enabled sources found, please define ENABLED_SOURCES',
          );
        }
        if (!enabledSources.includes(source)) {
          logger.error('Source %s is not enabled', source);
          throw new Error(`Source ${source} not found`);
        }
        const row = db
          .query<
            { height: number; batch_id: number },
            string
          >('SELECT height, batch_id FROM tasks WHERE source_id = ? AND status = "new" ORDER BY batch_id ASC LIMIT 1')
          .get(source);
        if (!row) {
          logger.info('No tasks found for source %s', source);
          throw new Error('No tasks found');
        }
        return { batchId: row.batch_id, height: row.height };
      }
    })();
    // Processing the source
    const sourceObj = sources[source as keyof typeof sources];
    const price = await sourceObj.getPrice(height);
    await sourceObj.getUsersBalances(height, (balances: UserBalance[]) => {
      const query = db.prepare<
        unknown,
        [string, string, number, number, string]
      >(
        'INSERT INTO user_data (source_id, address, height, batch_id, balance) VALUES (?, ?, ?, ?, ?);',
      );
      const insert = db.transaction((balances) => {
        for (const balance of balances) {
          query.run(source, balance.address, height, batchId, balance.balance);
        }
        return balances.length;
      });
      const res = insert(balances);
      logger.info('Inserted %d user balances', res);
    });
    // Update the status of the task to "ready"
    db.exec<[number, string, number, number]>(
      'UPDATE tasks SET status = "ready", price=? WHERE source_id = ? AND height = ? AND batch_id = ?',
      [price, source, height, batchId],
    );
    // logger.info('Processing source %s', source);
  });

const scheduleCli = program
  .command('schedule')
  .description('Schedule commands');

scheduleCli
  .command('add')
  .description('add a schedule')
  .argument('<protocol_id>', 'Protocol id')
  .argument('<asset_id>', 'dATOM, dTIA, etc')
  .argument('<start>', 'Datetime YYYY-MM-DD HH:MM:SS')
  .argument('<end>', 'Datetime')
  .argument('<multiplier>', 'Decimal number')
  .argument('<enabled>', 'true or false')
  .option('-f --force')
  .action((protocolId, assetId, start, end, multiplier, enabled, options) => {
    if (config.protocols[protocolId] === undefined) {
      logger.error('Protocol %s not found', protocolId);
      throw new Error(`Protocol ${protocolId} not found`);
    }
    if (config.protocols[protocolId].assets[assetId] === undefined) {
      logger.error('Asset %s not found', assetId);
      throw new Error(`Asset ${assetId} not found`);
    }
    const m = parseFloat(multiplier);
    if (isNaN(m)) {
      logger.error('Invalid multiplier %s', multiplier);
      throw new Error('Invalid multiplier');
    }
    const dateStart = (new Date(start).getTime() / 1000) | 0;
    const dateEnd = (new Date(end).getTime() / 1000) | 0;
    if (dateStart >= dateEnd) {
      logger.error('End date must be greater than start date');
      return;
    }
    const enabledBool = enabled === 'true';
    if (!options.force) {
      const query = db.query<
        { count: number },
        [number, number, number, number, boolean]
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
    const statement = db.prepare(
      'INSERT INTO schedule (protocol_id, asset_id, multiplier, start, end, enabled) VALUES (?, ?, ?, ?, ?, ?)',
    );
    statement.run(
      protocolId,
      assetId,
      multiplier,
      dateStart,
      dateEnd,
      enabledBool,
    );
    logger.info('Schedule has been inserted');
  });

scheduleCli
  .command('list')
  .description('Display the schedule')
  .action(() => {
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
    db.prepare<null, number>('DELETE FROM schedule WHERE schedule_id = ?').run(
      id,
    );
    logger.info('Schedule has been deleted');
  });

program.parse(process.argv);
