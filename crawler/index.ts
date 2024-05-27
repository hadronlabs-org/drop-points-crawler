import 'dotenv/config';
import { Command } from 'commander';
import { connect } from '../db';
import { getLogger } from '../lib/logger';
import sources from '../lib/sources';
import { UserBalance } from '../types/userBalance';
import fs from 'fs';
import toml from 'toml';

const program = new Command();
program.option('--config <config>', 'Config file path', 'config.toml');

const config = toml.parse(
  fs.readFileSync(program.getOptionValue('config'), 'utf-8'),
);
if (!config.log_level) {
  throw new Error('LOG_LEVEL environment variable not set');
}
const logger = getLogger(config);
const db = connect(true, config, logger);

const getAssetMulsByProtocolAndBatchId = (
  protocolId: string,
  batchId: number,
) => {
  const query = db.query<
    { protocol_id: string; asset_id: string; multiplier: number },
    [number, string]
  >(
    `
    WITH batch_ts AS (
      SELECT ts FROM batches WHERE batch_id = ?
    )
    SELECT 
      protocol_id, asset_id, multiplier
    FROM
    (
      SELECT * FROM 
        (
          SELECT 
            * 
          FROM schedule 
          WHERE 
            protocol_id = ? AND
            (start < (SELECT ts FROM batch_ts) AND (SELECT ts FROM batch_ts) < end) OR 
            (start = 0 AND end = 0)
          ORDER BY protocol_id, schedule_id DESC
        ) a 
      GROUP BY a.protocol_id
    ) b
    WHERE b.enabled = 1;
    `,
  );
  return query
    .all(batchId, protocolId)
    .reduce((acc, row) => ({ ...acc, [row.asset_id]: row.multiplier }), {});
};

program
  .command('prepare')
  .description('Prepare tasks for processing sources')
  .option('-t --timestamp <timestamp>', 'Timestamp to use')
  .action(async (options) => {
    const ts = parseInt(
      options.timestamp || (Date.now() / 1000).toString(),
      10,
    );
    const query = db.query<
      { protocol_id: number; asset_id: number; multiplier: number },
      [number, number]
    >(
      `
      SELECT 
        protocol_id, asset_id, multiplier
      FROM
      (
        SELECT * FROM 
          (
              SELECT 
                * 
              FROM schedule 
              WHERE 
                (start<? AND ? < end) OR (start = 0 AND end = 0)
              ORDER BY protocol_id, schedule_id DESC
        ) a GROUP BY a.protocol_id
      ) b
      WHERE b.enabled = 1`,
    );
    const protocolsInDb = query.all(ts, ts);
    if (!protocolsInDb.length) {
      logger.info('No protocols found in the schedule');
      return;
    }
    const queryInsertBatch = db.prepare<{ batch_id: number }, number>(
      'INSERT INTO batches (ts) VALUES (?) RETURNING batch_id',
    );
    const batchId = queryInsertBatch.get(ts)?.batch_id;
    if (!batchId) {
      throw new Error('Failed to insert batch');
    }
    logger.info('Inserted batch %d', batchId);
    // TODO: get prices
    // insert prices
    const timeShift = Math.random(); //same for all protocols bc of IBC and stuff
    const pricesTx = db.prepare(
      'INSERT INTO prices (asset_id, batch_id, price, ts) VALUES (?, ?, ?, ?)',
    );
    const tasksTx = db.prepare(
      'INSERT INTO tasks (protocol_id, batch_id, height, status, jitter, ts) VALUES (?, ?, ?, ?, ?, ?)',
    );
    for (const protocol of protocolsInDb) {
      const protocolObj = config.protocols[protocol.protocol_id];
      for (const assetId of Object.keys(protocolObj.assets)) {
        const price = 10; // TODO: get price!
        pricesTx.run(assetId, batchId, price, ts);
      }
      const jitter = (protocolObj.jitter * timeShift) | 0;
      const source = new sources[protocolObj.source as keyof typeof sources](
        protocolObj.rpc,
        logger,
        protocolObj,
      );
      const height = await source.getLastBlockHeight();
      logger.debug(
        'Got height %d for protocol %s',
        height,
        protocol.protocol_id,
      );
      tasksTx.run(
        protocol.protocol_id,
        batchId,
        height - jitter,
        'new',
        jitter,
        ts,
      );
    }
    pricesTx.finalize();
    tasksTx.finalize();
  });

program
  .command('crawl')
  .argument('<protocol_id>', 'protocol to crawl')
  .description('Process the specified protocol')
  .option('-b --batch_id <batch_id>', 'Batch ID to process')
  .action(async (protocolId: string, options) => {
    // // Get the batch ID and height of the task
    const { batchId, height } = (() => {
      if (options.batch_id) {
        const batchId = parseInt(options.batch_id, 10);
        if (isNaN(batchId)) {
          logger.error('Invalid batch ID %s', options.batch_id);
          throw new Error('Invalid batch ID');
        }
        const row = db
          .query<
            { height: number; ts: number },
            [number, string]
          >('SELECT height, ts FROM tasks WHERE batch_id = ? AND protocol_id = ? AND status = "new" ORDER BY batch_id ASC LIMIT 1')
          .get(batchId, protocolId);
        if (!row) {
          logger.info('No tasks found for batch_id %s', options.batch_id);
          throw new Error('No tasks found');
        }
        return { batchId, height: row.height };
      } else {
        const row = db
          .query<
            { height: number; batch_id: number; ts: number },
            string
          >('SELECT height, batch_id, ts FROM tasks WHERE protocol_id = ? AND status = "new" ORDER BY batch_id ASC LIMIT 1')
          .get(protocolId);
        if (!row) {
          logger.info('No tasks found for protocol %s', protocolId);
          throw new Error('No tasks found');
        }
        return {
          batchId: row.batch_id,
          height: row.height,
        };
      }
    })();
    const multipliers = getAssetMulsByProtocolAndBatchId(protocolId, batchId);
    logger.info(
      'Processing task for protocol %s, height %d and batch_id %d',
      protocolId,
      height,
      batchId,
    );
    // Processing the source
    const sourceObj = new sources[
      config.protocols[protocolId].source as keyof typeof sources
    ](config.protocols[protocolId].rpc, logger, config.protocols[protocolId]);
    await sourceObj.getUsersBalances(
      height,
      multipliers,
      (balances: UserBalance[]) => {
        const query = db.prepare<
          unknown,
          [number, string, string, number, string, string]
        >(
          'INSERT INTO user_data (batch_id, address, protocol_id, height, asset, balance) VALUES (?, ?, ?, ?, ?, ?);',
        );
        const insert = db.transaction((balances) => {
          for (const balance of balances) {
            query.run(
              batchId,
              balance.address,
              protocolId,
              height,
              balance.asset,
              balance.balance,
            );
          }
          return balances.length;
        });
        const res = insert(balances);
        logger.info('Inserted %d user balances', res);
      },
    );
    // Update the status of the task to "ready"
    db.exec<[string, number]>(
      'UPDATE tasks SET status = "ready" WHERE protocol_id = ? AND batch_id = ?',
      [protocolId, batchId],
    );
    logger.info('Task has been processed');
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
