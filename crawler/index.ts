import 'dotenv/config';
import { Command } from 'commander';
import { Client } from 'pg';
import { connect } from '../db';
import { getLogger } from '../lib/logger';
import sources from '../lib/sources';
import { UserBalance } from '../types/sources/userBalance';
import fs from 'fs';
import toml from 'toml';
import { updateReferralData } from '../lib/referral';
import { toNeutronAddress } from '../lib/neutron-address';
import PriceFeed from '../lib/pricefeed';
import { insertKYCRecord } from '../lib/kyc';
import { neutronAddress } from '../types/tRPC/neutronAddress';
import { executeSetBalances } from '../lib/execute';
import { getSigningCosmWasmClient } from '../lib/stargate';
import {
  validateOnChainContractInfo,
  getValidData,
  validatePostgresInfo,
} from '../lib/validations/config';
import { dropletRuleSchema } from '../types/config/dropletRule';
import { getPseudoRandom, getTrueRandom } from './random';

const program = new Command();
program.option('--config <config>', 'Config file path', 'config.toml');

const config = toml.parse(
  fs.readFileSync(program.getOptionValue('config'), 'utf-8'),
);
if (!config.log_level) {
  throw new Error('LOG_LEVEL environment variable not set');
}

validateOnChainContractInfo(config);
validatePostgresInfo(config);

const logger = getLogger(config);

const getAssetMulsByProtocolAndBatchId = async (
  db: Client,
  protocolId: string,
  batchId: number,
) => {
  const { rows } = await db.query(
    `
    WITH batch_ts AS (
      SELECT ts FROM batches WHERE batch_id = $1
    )
    SELECT 
      s.protocol_id, 
      s.asset_id, 
      s.multiplier
    FROM schedule s
    LEFT JOIN batches bt 
      ON bt.ts > s.start_time AND bt.ts < s.end_time
    WHERE 
      s.protocol_id = $2 AND
      ((s.start_time = 0 AND s.end_time = 0) OR bt.ts IS NOT NULL)
      AND s.enabled = true
    GROUP BY s.protocol_id, s.asset_id, s.multiplier, s.enabled
    ORDER BY s.protocol_id DESC;
    `,
    [batchId, protocolId],
  );

  return rows.reduce((acc, row) => {
    acc[row.asset_id] = row.multiplier;
    return acc;
  }, {});
};

program
  .command('prepare')
  .description('Prepare tasks for processing sources')
  .option('-t --timestamp <timestamp>', 'Timestamp to use')
  .option('-s --simulate', 'Just simulate the task')
  .action(async (options) => {
    const db = await connect(true, config, logger);

    const ts = parseInt(
      options.timestamp || (Date.now() / 1000).toString(),
      10,
    );

    try {
      await db.query('BEGIN');

      const { rows: protocolsInDb } = await db.query<
        { protocol_id: string; asset_id: number; multiplier: number },
        [number, number]
      >(
        `
        SELECT 
          protocol_id, asset_id, multiplier
        FROM (
          SELECT 
            protocol_id, asset_id, multiplier, enabled
          FROM schedule s
          WHERE 
            ((s.start_time = 0 AND s.end_time = 0) OR (s.start < $1 AND s.end > $2))
          ORDER BY protocol_id, schedule_id DESC
        ) AS subquery
        WHERE enabled = true
        GROUP BY protocol_id, asset_id, multiplier, enabled
        `,
      );
      if (!protocolsInDb.length) {
        logger.info('No protocols found in the schedule');
        return;
      }
      if (options.simulate) {
        logger.info('Inserting tasks for protocols %o', protocolsInDb);
        return;
      }

      const insertBatchQuery = await db.query<
        { batch_id: number },
        [number, string]
      >('INSERT INTO batches (ts, status) VALUES ($1, $2) RETURNING batch_id', [
        ts,
        'new',
      ]);
      const batchId = insertBatchQuery.rows[0]?.batch_id;
      if (!batchId) {
        throw new Error('Failed to insert batch');
      }
      logger.info('Inserted batch %d', batchId);

      const assetsToGetPrice = new Set<string>();
      const protocolIds = new Set<string>();
      const timeShift = // same for all protocols bc of IBC and stuff
        config.random && config.random === 'pseudo'
          ? getPseudoRandom(batchId)
          : getTrueRandom();

      for (const protocol of protocolsInDb) {
        if (protocolIds.has(protocol.protocol_id)) {
          continue;
        }
        protocolIds.add(protocol.protocol_id);

        const protocolObj = config.protocols[protocol.protocol_id];

        for (const assetId of Object.keys(protocolObj.assets)) {
          assetsToGetPrice.add(assetId.split('_')[0]);
        }

        const jitter = Math.round(protocolObj.jitter * timeShift) | 0;
        if (!jitter) {
          logger.warn('Jitter is 0 for protocol %s', protocol.protocol_id);
        }

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

        await db.query(
          'INSERT INTO tasks (protocol_id, batch_id, height, status, jitter, ts) VALUES ($1, $2, $3, $4, $5, $6)',
          [protocol.protocol_id, batchId, height - jitter, 'new', jitter, ts],
        );
      }

      const priceFeed = new PriceFeed(
        config.pricefeed.rpc,
        logger,
        config.pricefeed,
      );
      const priceFeedHeight = await priceFeed.getLastHeight();
      logger.debug('Got pricefeed height %d', priceFeedHeight);

      for (const assetId of assetsToGetPrice) {
        logger.debug('Getting price for asset %s', assetId);
        const price = await priceFeed.getPrice(
          assetId,
          (priceFeedHeight - config.pricefeed.jitter * timeShift) | 0,
        );
        await db.query(
          'INSERT INTO prices (asset_id, batch_id, price, ts) VALUES ($1, $2, $3, $4)',
          [assetId, batchId, price, ts],
        );
      }

      await db.query('COMMIT');
      logger.info('Transaction committed successfully');
    } catch (error) {
      await db.query('ROLLBACK');
      logger.error('Transaction rolled back due to error: %s', error);
    } finally {
      logger.info('Operation finished');
      await db.end();
    }
  });

program
  .command('crawl')
  .argument('<protocol_id>', 'protocol to crawl')
  .description('Process the specified protocol')
  .option('-b --batch_id <batch_id>', 'Batch ID to process')
  .action(async (protocolId: string, options) => {
    const db = await connect(false, config, logger);

    // Get the batch ID and height of the task
    const { batchId, height } = await (async () => {
      if (options.batch_id) {
        const batchId = parseInt(options.batch_id, 10);
        if (isNaN(batchId)) {
          logger.error('Invalid batch ID %s', options.batch_id);
          throw new Error('Invalid batch ID');
        }
        const { rows } = await db.query(
          'SELECT height, ts FROM tasks WHERE batch_id = $1 AND protocol_id = $2 AND status = $3 ORDER BY batch_id ASC LIMIT 1',
          [batchId, protocolId, 'new'],
        );
        if (rows.length === 0) {
          logger.info('No tasks found for batch_id %s', options.batch_id);
          throw new Error('No tasks found');
        }
        return { batchId, height: rows[0].height };
      } else {
        const { rows } = await db.query(
          'SELECT height, batch_id, ts FROM tasks WHERE protocol_id = $1 AND status = $2 ORDER BY batch_id ASC LIMIT 1',
          [protocolId, 'new'],
        );
        if (rows.length === 0) {
          logger.info('No tasks found for protocol %s', protocolId);
          throw new Error('No tasks found');
        }
        return {
          batchId: rows[0].batch_id,
          height: rows[0].height,
        };
      }
    })();

    const multipliers = await getAssetMulsByProtocolAndBatchId(
      db,
      protocolId,
      batchId,
    );
    logger.info(
      'Processing task for protocol %s, height %d and batch_id %d multipliers %o',
      protocolId,
      height,
      batchId,
      multipliers,
    );

    // Processing the source
    const sourceObj = new sources[
      config.protocols[protocolId].source as keyof typeof sources
    ](config.protocols[protocolId].rpc, logger, config.protocols[protocolId]);

    await sourceObj.getUsersBalances(
      height,
      multipliers,
      async (balances: UserBalance[]) => {
        const callbackDbClient = await connect(false, config, logger);

        const insertUserDataQuery = `
          INSERT INTO user_data (batch_id, address, protocol_id, height, asset, balance)
          VALUES ($1, $2, $3, $4, $5, $6)
        `;

        await callbackDbClient.query('BEGIN');

        try {
          for (const balance of balances) {
            await callbackDbClient.query(insertUserDataQuery, [
              batchId,
              toNeutronAddress(balance.address),
              protocolId,
              height,
              balance.asset,
              balance.balance,
            ]);
          }

          await callbackDbClient.query('COMMIT');
          logger.info('Inserted %d user balances', balances.length);
        } catch (err) {
          await callbackDbClient.query('ROLLBACK');
          logger.error('Error inserting user balances:', err);
        }

        await callbackDbClient.end();
      },
    );

    // Update the status of the task to "ready"
    await db.query(
      'UPDATE tasks SET status = $1 WHERE protocol_id = $2 AND batch_id = $3',
      ['ready', protocolId, batchId],
    );

    await db.end();
    logger.info('Task has been processed');
  });

program
  .command('finish')
  .description('Calculate points for users and finish the task')
  .option('-b, --batch_id <batch_id>', 'batch ID  to finish')
  .option('-p --publish', 'Publish the points to the blockchain')
  .action(async (options) => {
    const db = await connect(false, config, logger);

    const batchId = await (async () => {
      if (options.batch_id === undefined) {
        const { rows } = await db.query<{ batch_id: number }>(
          'SELECT batch_id FROM tasks WHERE status = $1 ORDER BY height ASC LIMIT 1',
          ['ready'],
        );
        if (rows.length === 0) {
          logger.info('No tasks found');
          return;
        }
        return rows[0].batch_id;
      } else {
        const { rows } = await db.query<{ batch_id: number }>(
          'SELECT batch_id FROM tasks WHERE status = $1 AND batch_id = $2 ORDER BY batch_id ASC LIMIT 1',
          ['ready', options.batch_id],
        );
        if (rows.length === 0) {
          logger.info('No tasks found for batch_id %s', options.batch_id);
          return;
        }
        return rows[0].batch_id;
      }
    })();

    if (!batchId) {
      logger.info('No tasks for finishing found');
      return;
    }

    logger.info('Finishing task for batch_id %s', batchId);

    const { rows: cntRows } = await db.query<{ cnt: number }>(
      'SELECT count(*)::int as cnt FROM tasks WHERE batch_id = $1 AND status <> $2',
      [batchId, 'ready'],
    );
    const cnt = cntRows[0].cnt;
    if (cnt !== 0) {
      logger.error('Not all tasks are ready');
      await db.end();
      return;
    }

    logger.info('All tasks are ready');

    let tsKf = 0;
    if (batchId > 1) {
      const { rows } = await db.query<{ ts: number }>(
        'SELECT ts FROM batches WHERE batch_id = $1 OR batch_id = $2 - 1 ORDER BY batch_id DESC LIMIT 2',
        [batchId, batchId],
      );
      const [ts1, ts2] = rows.map((row) => row.ts);
      tsKf = (ts1 - ts2) / (24 * 60 * 60);
    } else {
      tsKf = config.default_interval / (24 * 60 * 60);
    }

    logger.debug('tsKf = %d', tsKf);

    try {
      await db.query('BEGIN');

      await db.query(
        `
        INSERT INTO user_points (batch_id, address, asset_id, points)
        SELECT 
          x.batch_id, 
          x.address, 
          x.xasset_id AS asset_id, 
          FLOOR(SUM(p.price * x.balance * $1)) AS points
        FROM (
          SELECT 
            ud.batch_id, 
            ud.address, 
            CASE 
              WHEN POSITION('_' IN ud.asset) > 0 
              THEN SUBSTRING(ud.asset FROM 1 FOR POSITION('_' IN ud.asset) - 1) 
              ELSE ud.asset 
            END AS xasset_id, 
            ud.balance
          FROM user_data ud
        ) x
        LEFT JOIN prices p 
          ON p.asset_id = x.xasset_id AND p.batch_id = x.batch_id
        WHERE x.batch_id = $2
          AND x.address NOT IN (SELECT address FROM blacklist)
        GROUP BY x.batch_id, x.address, x.xasset_id;
        `,
        [tsKf, batchId],
      );

      await db.query('UPDATE tasks SET status = $1 WHERE batch_id = $2', [
        'processed',
        batchId,
      ]);

      if (options.publish) {
        logger.debug('Publishing points to users_points_public');

        const { rows: batchRows } = await db.query<{
          batch_id: number;
          ts: number;
        }>(
          'SELECT batch_id, ts FROM batches WHERE status = $1 ORDER BY batch_id ASC',
          ['new'],
        );
        const batchIds = batchRows.map((row) => row.batch_id);
        const firstTs = batchRows[0].ts;

        await db.query('UPDATE user_points_public SET change = 0');

        await db.query(
          `
          INSERT INTO user_points_public (address, asset_id, points, change, prev_points_l1, prev_points_l2, points_l1, points_l2, place, prev_place)
          SELECT 
            address, asset_id, SUM(points) AS points, SUM(points) AS change, 0, 0, 0, 0, 0, 0
          FROM user_points
          WHERE batch_id = ANY($1::int[])
          GROUP BY address, asset_id
          ON CONFLICT (address, asset_id) 
          DO UPDATE SET 
            change = excluded.change, 
            points = user_points_public.points + excluded.points
          `,
          [batchIds],
        );

        await db.query(
          `
          INSERT INTO user_points_public (address, asset_id, points, change, prev_points_l1, prev_points_l2, points_l1, points_l2, place, prev_place)
          SELECT 
            r.referrer AS address,
            CASE 
              WHEN POSITION('_' IN s.asset_id) > 0 
              THEN SUBSTRING(s.asset_id FROM 1 FOR POSITION('_' IN s.asset_id) - 1) 
              ELSE s.asset_id 
            END AS asset_id,
            0 AS points,
            0 AS change,
            0 AS prev_points_l1,
            0 AS prev_points_l2,
            0 AS points_l1,
            0 AS points_l2,
            0 AS place,
            0 AS prev_place
          FROM referrals r
          LEFT JOIN schedule s ON true
          GROUP BY address, s.asset_id
          ON CONFLICT (address, asset_id) DO NOTHING
          `,
        );

        await db.query(
          `
          UPDATE user_points_public
          SET 
            prev_points_l1 = points_l1,
            prev_points_l2 = points_l2,
            points_l1 = COALESCE(points_l1, 0) + COALESCE((
              SELECT FLOOR(SUM(upp1.change) * $1)
              FROM referrals r
              LEFT JOIN user_points_public upp1 ON upp1.address = r.referral AND r.ts <= $2
              LEFT JOIN user_kyc k ON k.address = r.referrer AND k.ts <= $2
              WHERE r.referrer = user_points_public.address AND k.address IS NOT NULL
            ), 0),
            points_l2 = COALESCE(points_l2, 0) + COALESCE((
              SELECT FLOOR(SUM(upp2.change) * $3)
              FROM referrals r2
              LEFT JOIN referrals r3 ON r3.referrer = r2.referral AND r3.ts <= $2
              LEFT JOIN user_points_public upp2 ON upp2.address = r3.referral AND r3.ts <= $2
              LEFT JOIN user_kyc k2 ON k2.address = r2.referrer AND k2.ts <= $2
              WHERE r2.referrer = user_points_public.address AND k2.address IS NOT NULL
            ), 0)
          `,
          [config.l1_percent / 100, firstTs, config.l2_percent / 100],
        );

        await db.query(
          `
          UPDATE user_points_public
          SET change = change + (points_l1 + points_l2) - (prev_points_l1 + prev_points_l2)
          `,
        );

        await db.query(
          `
          WITH ranked AS (
            SELECT address, ROW_NUMBER() OVER (ORDER BY points + points_l1 + points_l2 DESC) AS place
            FROM user_points_public
          )
          UPDATE user_points_public
          SET prev_place = user_points_public.place,
              place = ranked.place
          FROM ranked
          WHERE ranked.address = user_points_public.address
          `,
        );

        await db.query(
          `UPDATE batches SET status = 'processed' WHERE batch_id = ANY($1::int[])`,
          [batchIds],
        );
      }

      await db.query('COMMIT');
      logger.info('Task has been finished');
    } catch (error) {
      await db.query('ROLLBACK');
      logger.error('Transaction rolled back due to error: %s', error);
    } finally {
      await db.end();
    }
  });

program
  .command('publish_on_chain')
  .description('Publish points to CW20 contract')
  .action(async () => {
    const db = await connect(false, config, logger);

    const { rows: publicPoints } = await db.query(
      'SELECT address, points + points_l1 + points_l2 as points FROM user_points_public',
    );

    const {
      on_chain_storage: {
        sender,
        contract,
        rpc,
        gas,
        mnemonic,
        batch_size: batchSize = null,
        gas_adjustment: gasAdjustment = null,
      },
    } = config;

    const signingClient = await getSigningCosmWasmClient(rpc, gas, mnemonic);

    while (publicPoints.length) {
      const batch = publicPoints.splice(0, batchSize || 1000);
      await executeSetBalances(
        signingClient,
        sender,
        contract,
        batch,
        gasAdjustment,
        logger,
      );
    }

    await db.end();
    logger.info('Points have been saved to the on chain contract');
  });

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
  .action(
    async (protocolId, assetId, start, end, multiplier, enabled, options) => {
      const db = await connect(false, config, logger);

      const protocolObject = config.protocols[protocolId];
      const assetObject = config.protocols[protocolId].assets[assetId];

      if (protocolObject === undefined) {
        logger.error('Protocol %s not found', protocolId);
        throw new Error(`Protocol ${protocolId} not found`);
      }
      if (assetObject === undefined) {
        logger.error('Asset %s not found', assetId);
        throw new Error(`Asset ${assetId} not found`);
      }

      if (protocolObject.frontend_data === undefined) {
        logger.error('Protocol frontend data %s not found', protocolId);
        throw new Error(`Protocol ${protocolId} frontend data not found`);
      }
      if (assetObject.frontend_data === undefined) {
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
        // Check if a schedule already exists for this timeframe
        const { rows } = await db.query(
          'SELECT COUNT(*) as count FROM schedule WHERE protocol_id = $1 AND asset_id = $2 AND start_time >= $3 AND end_time <= $4 AND enabled = $5',
          [protocolId, assetId, dateStart, dateEnd, enabledBool],
        );
        if (parseInt(rows[0].count) > 0) {
          logger.error('Schedule for this timeframe already exists');
          return;
        }
      }

      try {
        await db.query('BEGIN');

        await db.query(
          'INSERT INTO schedule (protocol_id, asset_id, multiplier, start_time, end_time, enabled) VALUES ($1, $2, $3, $4, $5, $6)',
          [protocolId, assetId, multiplier, dateStart, dateEnd, enabledBool],
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
          logger.error('Cannot build valid rule for the schedule');
          throw e;
        }

        await db.query(
          'INSERT INTO user_points_rules (strategy, description, multiplier, chain, status, link, link_text, type, featured, visible) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
          [
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
          ],
        );
        logger.info('Rule has been inserted');

        await db.query('COMMIT');
      } catch (error) {
        await db.query('ROLLBACK'); // Rollback transaction on error
        logger.error('Error during transaction, rolling back:', error);
      } finally {
        await db.end();
      }
    },
  );

scheduleCli
  .command('list')
  .description('Display the schedule')
  .action(async () => {
    const db = await connect(false, config, logger);

    logger.info('Schedule list');

    const { rows } = await db.query(
      'SELECT schedule_id, protocol_id, asset_id, multiplier, start_time, end_time, enabled FROM schedule ORDER BY protocol_id, asset_id, start_time, end_time',
    );

    rows.forEach((row) => {
      logger.info(
        'ID: %s\t Protocol: %s \t Asset: %s\t Mul: %s\t Start: %s End: %s %s',
        row.schedule_id.toString().padEnd(0),
        row.protocol_id.padEnd(20 - row.protocol_id.length),
        row.asset_id,
        row.multiplier.toString().padEnd(4),
        new Date(row.start * 1000).toISOString().padEnd(20), // Convert timestamp to ISO date
        new Date(row.end * 1000).toISOString().padEnd(20), // Convert timestamp to ISO date
        row.enabled ? 'enabled' : 'disabled',
      );
    });

    await db.end();
  });

scheduleCli
  .command('delete')
  .description('Delete a schedule')
  .argument('<schedule_id>', 'Schedule ID')
  .action(async (scheduleId: string) => {
    const db = await connect(false, config, logger);

    logger.info('Deleting schedule');
    const id = parseInt(scheduleId, 10);
    if (isNaN(id)) {
      logger.error('Invalid schedule ID %s', scheduleId);
      return;
    }

    const { rows } = await db.query<{ count: number }>(
      'SELECT COUNT(*) as count FROM schedule WHERE schedule_id = $1',
      [id],
    );
    if (rows[0].count === 0) {
      logger.error('Schedule not found');
      return;
    }

    await db.query('DELETE FROM schedule WHERE schedule_id = $1', [id]);

    await db.end();
    logger.info('Schedule has been deleted');
  });

const referralCli = program
  .command('referral')
  .description('Referral commands');

referralCli
  .command('add')
  .argument('<referrer>', 'Address')
  .argument('<referral>', 'Address of the referral')
  .description('Add a referral')
  .action(async (referrer, referral) => {
    const db = await connect(false, config, logger);

    logger.info('Adding referral %s -> %s', referrer, referral);

    await db.query(
      'INSERT INTO referrals (referrer, referral, ts) VALUES ($1, $2, 0)',
      [referrer, referral],
    );

    await db.end();
    logger.info('Referral has been added');
  });

referralCli
  .command('list')
  .argument('<address>', 'Address')
  .description('List referrals')
  .action(async (address) => {
    const db = await connect(false, config, logger);

    logger.info('Referral list');

    const { rows } = await db.query(
      'SELECT address, referral FROM referrals WHERE referrer = $1',
      [address],
    );

    if (rows.length === 0) {
      logger.info('No referrals found for address: %s', address);
    } else {
      for (const row of rows) {
        logger.info('Referrer: %s\t Referral: %s', row.address, row.referral);
      }
    }

    await db.end();
  });

referralCli
  .command('sync')
  .description('retrieve last Referral data')
  .action(async () => {
    const db = await connect(false, config, logger);

    await updateReferralData(db, config, logger);

    await db.end();
  });

const blacklistCli = program
  .command('blacklist')
  .description('Edit address blacklist');

blacklistCli
  .command('add')
  .argument('<address>', 'Address')
  .description('Insert address into blacklist')
  .action(async (address) => {
    const db = await connect(false, config, logger);

    await db.query('INSERT INTO blacklist (address) VALUES ($1)', [address]);

    await db.end();
    logger.info('Inserted %s into blacklist', address);
  });

blacklistCli
  .command('remove')
  .argument('<address>', 'Address')
  .description('Remove address from blacklist')
  .action(async (address) => {
    const db = await connect(false, config, logger);

    await db.query('DELETE FROM blacklist WHERE address = $1', [address]);

    await db.end();
    logger.info('Removed %s from blacklist', address);
  });

const kycCli = program.command('kyc').description('KYC commands');

kycCli
  .command('add')
  .argument('<address>', 'Address')
  .option('-p --provider <provider>', 'KYC provider')
  .option('-i --id <kyc_id>', 'KYC id')
  .option('-c --code <code>', 'Referral code')
  .action(async (address, options) => {
    const db = await connect(false, config, logger);

    address = neutronAddress.parse(address).toString();
    const kycId = options.id || `local_${address}`;
    const kycProvider = options.provider || 'local';
    const userCode = options.code as string | undefined;
    logger.info(
      'Adding KYC for address %s, kyc id: %s, kyc provider: %s',
      address,
      kycId,
      kycProvider,
    );
    const code = insertKYCRecord(
      db,
      logger,
      address,
      kycId,
      kycProvider,
      userCode,
    );

    await db.end();
    logger.info('Referral code: %s', code);
  });

kycCli
  .command('get')
  .argument('<address>', 'Address')
  .action(async (address) => {
    const db = await connect(false, config, logger);

    address = neutronAddress.parse(address).toString();

    const { rows } = await db.query(
      'SELECT kyc_id, kyc_provider, ts FROM user_kyc WHERE address = $1',
      [address],
    );

    if (rows.length === 0) {
      logger.info('No KYC found for address %s', address);
    } else {
      const row = rows[0]; // There should be only one row, as the address is unique
      logger.info(
        'KYC id: %s, provider: %s, ts: %s',
        row.kyc_id,
        row.kyc_provider,
        new Date(row.ts * 1000).toISOString(), // Convert timestamp to ISO string
      );
    }

    await db.end();
  });

const debugCli = program.command('debug').description('Debug commands');
debugCli
  .command('crawl')
  .description('Get user data on the defined source and batch id')
  .argument('<protocol_id>', 'Protocol id')
  .argument('<batch_id>', 'Batch id')
  .argument('<user_address>', 'User address on any chain')
  .action(async (protocolId, batchId, userAddress) => {
    const db = await connect(false, config, logger);

    // Get the batch ID and height of the task
    logger.level = 'info';

    const { rows } = await db.query(
      'SELECT height, ts FROM tasks WHERE batch_id = $1 AND protocol_id = $2 ORDER BY batch_id ASC LIMIT 1',
      [batchId, protocolId],
    );

    if (rows.length === 0) {
      logger.info('No tasks found for batch_id %s', batchId);
      throw new Error('No tasks found');
    }

    const height = rows[0].height;
    const multipliers = await getAssetMulsByProtocolAndBatchId(
      db,
      protocolId,
      batchId,
    );

    logger.info(
      'Getting data for protocol %s, height %d and batch_id %d multipliers %o and user %s',
      protocolId,
      height,
      batchId,
      multipliers,
      userAddress,
    );

    // Processing the source
    const sourceObj = new sources[
      config.protocols[protocolId].source as keyof typeof sources
    ](config.protocols[protocolId].rpc, logger, config.protocols[protocolId]);
    const matchAddress = toNeutronAddress(userAddress);

    await sourceObj.getUsersBalances(
      height,
      multipliers,
      (balances: UserBalance[]) => {
        for (const balance of balances) {
          if (toNeutronAddress(balance.address) === matchAddress) {
            logger.info('User balance: %o', balance);
          }
        }
      },
    );

    await db.end();
  });

program.parse(process.argv);
