import 'dotenv/config';
import { Command } from 'commander';
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
import { validateOnChainContractInfo } from '../lib/validations/config';
import { getValidData } from '../types/utils';
import { dropletRuleSchema } from '../types/config/dropletRule';
import { getPseudoRandom, getTrueRandom } from './random';
import { getLinkRecord } from '../lib/link';

const program = new Command();
program.option('--config <config>', 'Config file path', 'config.toml');

const config = toml.parse(
  fs.readFileSync(program.getOptionValue('config'), 'utf-8'),
);

if (!config.log_level) {
  throw new Error('LOG_LEVEL environment variable not set');
}

validateOnChainContractInfo(config);

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
          FROM schedule s
          LEFT JOIN
            batches bt ON (bt.ts > s.start AND bt.ts < s.end)
          WHERE
            protocol_id = ? AND
            ((s.start = 0 AND s.end = 0) OR bt.ts IS NOT NULL)
          ORDER BY protocol_id, schedule_id DESC
        ) a
      GROUP BY a.protocol_id, a.asset_id
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
  .option('-s --simulate', 'Just simulate the task')
  .action(async (options) => {
    const ts = parseInt(
      options.timestamp || (Date.now() / 1000).toString(),
      10,
    );

    const query = db.query<
      { protocol_id: string; asset_id: number; multiplier: number },
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
              FROM schedule s
              WHERE
                ((s.start = 0 AND s.end = 0) OR (s.start < ? AND s.end > ?))
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

    if (options.simulate) {
      logger.info('Inserting tasks for protocols %o', protocolsInDb);
      return;
    }

    let timeShift = getTrueRandom();
    if (config.random && config.random === 'pseudo') {
      try {
        const maxBatchId = db
          .prepare<
            { max_batch: number },
            []
          >('SELECT COALESCE(MAX(batch_id), 0) AS max_batch FROM batches')
          .get()?.max_batch;
        timeShift = getPseudoRandom(maxBatchId ? maxBatchId + 1 : 0);
        logger.info(
          'Got time shift for pseudo random: %d, batch id: %d ',
          timeShift,
          maxBatchId,
        );
      } catch (error) {
        logger.error(
          'Error retrieving time shift for pseudo random: %o',
          error,
        );
        return;
      }
    }

    const tasksData: { protocolId: string; height: number; jitter: number }[] =
      [];
    const assetsToGetPrice = new Set<string>();

    for (const protocol of protocolsInDb) {
      const protocolObj = config.protocols[protocol.protocol_id];

      for (const assetId of Object.keys(protocolObj.assets)) {
        assetsToGetPrice.add(assetId);
      }

      const jitter = Math.round(protocolObj.jitter * timeShift) | 0;
      if (!jitter) {
        logger.warn('Jitter is 0 for protocol %s', protocol.protocol_id);
      }

      if (!sources[protocolObj.source as keyof typeof sources]) {
        logger.error('Source %s not found', protocolObj.source);
        throw new Error('Source not found');
      }

      const SourceClass = sources[protocolObj.source as keyof typeof sources];
      if (!SourceClass) {
        throw new Error(`Invalid source type: ${protocolObj.source}`);
      }

      const source = new SourceClass(protocolObj.rpc, logger, protocolObj);
      const height = await source.getLastBlockHeight();
      logger.debug(
        'Got height %d for protocol %s',
        height,
        protocol.protocol_id,
      );
      tasksData.push({
        protocolId: protocol.protocol_id,
        height: height - jitter,
        jitter,
      });
    }

    const priceFeed = new PriceFeed(
      config.pricefeed.rpc,
      logger,
      config.pricefeed,
    );
    const priceFeedHeight = await priceFeed.getLastHeight();
    logger.debug('Got pricefeed height %d', priceFeedHeight);
    const pricesData: { assetId: string; price: number }[] = [];
    for (const assetId of assetsToGetPrice) {
      logger.debug('Getting price for asset %s', assetId);
      const price = await priceFeed.getPrice(
        assetId,
        (priceFeedHeight - config.pricefeed.jitter * timeShift) | 0,
      );
      pricesData.push({ assetId, price });
    }

    const transaction = db.transaction(() => {
      const queryInsertBatch = db.prepare<
        { batch_id: number },
        [number, string]
      >('INSERT INTO batches (ts, status) VALUES (?, ?) RETURNING batch_id');
      const batchId = queryInsertBatch.get(ts, 'new')?.batch_id;
      if (!batchId) {
        throw new Error('Failed to insert batch');
      }
      queryInsertBatch.finalize();
      logger.info('Inserted batch %d', batchId);

      const tasksTx = db.prepare(
        'INSERT INTO tasks (protocol_id, batch_id, height, status, jitter, ts) VALUES (?, ?, ?, ?, ?, ?)',
      );
      for (const task of tasksData) {
        tasksTx.run(
          task.protocolId,
          batchId,
          task.height,
          'new',
          task.jitter,
          ts,
        );
      }
      tasksTx.finalize();

      const pricesTx = db.prepare(
        'INSERT INTO prices (asset_id, batch_id, price, ts) VALUES (?, ?, ?, ?)',
      );
      for (const priceEntry of pricesData) {
        pricesTx.run(priceEntry.assetId, batchId, priceEntry.price, ts);
      }
      pricesTx.finalize();
    });
    transaction();
  });

program
  .command('crawl')
  .argument('<protocol_id>', 'protocol to crawl')
  .description('Process the specified protocol')
  .option('-b --batch_id <batch_id>', 'Batch ID to process')
  .action(async (protocolId: string, options) => {
    // Get the batch ID and height of the task
    const { batchId, height, ts } = (() => {
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
        return { batchId, height: row.height, ts: row.ts };
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
          ts: row.ts,
        };
      }
    })();
    const multipliers = getAssetMulsByProtocolAndBatchId(protocolId, batchId);
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

    if (isBasicSource(sourceObj)) {
      await sourceObj.getUsersBalances(
        height,
        multipliers,
        (balances: UserBalance[]) => {
          const tx = db.prepare<
            unknown,
            [number, string, string, number, string, string]
          >(
            'INSERT INTO user_data (batch_id, address, protocol_id, height, asset, balance) VALUES (?, ?, ?, ?, ?, ?);',
          );
          const insert = db.transaction((balances: UserBalance[]) => {
            let insertedCount = 0;
            for (const balance of balances) {
              if (config.protocols[protocolId].linked_address_network) {
                const localAddress = getLinkRecord(
                  config,
                  db,
                  logger,
                  protocolId,
                  balance.address,
                  ts,
                );
                logger.trace('Got linked address %o', localAddress);
                if (localAddress) {
                  logger.trace('Inserting linked address %s', localAddress);
                  insertedCount += 1;
                  tx.run(
                    batchId,
                    toNeutronAddress(localAddress),
                    protocolId,
                    height,
                    balance.asset,
                    balance.balance,
                  );
                }
              } else {
                insertedCount = balances.length;
                tx.run(
                  batchId,
                  toNeutronAddress(balance.address),
                  protocolId,
                  height,
                  balance.asset,
                  balance.balance,
                );
              }
            }
            return insertedCount;
          });
          const res = insert(balances);
          logger.info('Inserted %d user balances', res);
        },
      );
    }

    if (isNFTSource(sourceObj)) {
      const collectionName =
        config.protocols[protocolId].collection || protocolId;
      await sourceObj.getUsersTokens(height, multipliers, (all) => {
        const transaction = db.transaction(() => {
          const tx = db.prepare(
            'INSERT OR IGNORE INTO nft_data (batch_id, address, asset_id, collection, multiplier) VALUES (?, ?, ?, ?, ?)',
          );
          for (const { address, asset_id, amount } of all) {
            if (config.protocols[protocolId].linked_address_network) {
              const localAddress = getLinkRecord(
                config,
                db,
                logger,
                protocolId,
                address,
                ts,
              );

              logger.trace('Got linked address %o', localAddress);
              if (localAddress) {
                logger.trace('Inserting linked address %s', localAddress);
                tx.run(
                  batchId,
                  toNeutronAddress(localAddress),
                  asset_id,
                  collectionName,
                  amount,
                );
              }
            } else {
              tx.run(
                batchId,
                toNeutronAddress(address),
                asset_id,
                collectionName,
                amount,
              );
            }
          }
        });
        transaction();
      });
    }

    // Update the status of the task to "ready"
    db.exec<[string, number]>(
      'UPDATE tasks SET status = "ready" WHERE protocol_id = ? AND batch_id = ?',
      [protocolId, batchId],
    );
    logger.info('Task has been processed');
  });

program
  .command('finish')
  .description('Calculate points for users and finish the task')
  .option('-b, --batch_id <batch_id>', 'batch ID  to finish')
  .option('-p --publish', 'Publish the points to the blockchain')
  .action((options) => {
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
        const query = db.query<{ batch_id: number }, [number]>(
          'SELECT batch_id FROM tasks WHERE status = "ready" AND batch_id = ? ORDER BY batch_id ASC LIMIT 1',
        );
        const row = query.get(options.batch_id);
        if (!row) {
          logger.info('No tasks found for batch_id %s', options.batch_id);
        }
        query.finalize();
        return row?.batch_id;
      }
    })();
    if (!batchId) {
      logger.info('No tasks for finishing found');
      return;
    }
    logger.info('Finishing task for batch_id %s', batchId);
    const query = db.query<{ cnt: number }, number>(
      'SELECT count(*) as cnt FROM tasks WHERE batch_id = ? AND status <> "ready"',
    );
    const cnt = query.get(batchId)?.cnt;
    if (cnt !== 0) {
      logger.error('Not all tasks are ready');
      return;
    }
    logger.info('All tasks are ready');
    let tsKf = 0;
    if (batchId > 1) {
      const query = db.query<{ ts: number }, [number, number]>(
        'SELECT ts FROM batches WHERE batch_id = ? OR batch_id = ? - 1 ORDER BY batch_id DESC LIMIT 2',
      );
      const [ts1, ts2] = query.all(batchId, batchId).map((row) => row.ts);
      tsKf = (ts1 - ts2) / (24 * 60 * 60);

      if (
        config.stage2_start &&
        batchId > config.stage2_start &&
        batchId < config.newcomers_stake_start
      ) {
        logger.debug('Stage 2: adding newcomers');
        const badge = db
          .query<
            { params: string },
            null
          >(`SELECT params FROM badges WHERE id = 'newcomer'`)
          .get(null);
        if (!badge) {
          logger.error('Badge newcomer not found');
          process.exit(1);
        }
        const badgeParams = JSON.parse(badge.params);
        db.exec(
          `INSERT INTO user_badges (address, badge_id, "start", "end")
            SELECT 
              DISTINCT address,
              'newcomer',
              (SELECT ts - 1 FROM batches WHERE batch_id = ${batchId}),
              (SELECT ts + ${badgeParams.days} * 24*60*60 FROM batches WHERE batch_id = ${batchId})
              FROM user_data 
              WHERE 
                user_data.batch_id = ${batchId} AND
                address NOT IN (SELECT distinct address FROM user_badges ub  WHERE ub.badge_id ='general' OR ub.badge_id ='newcomer') AND
                address NOT IN (SELECT distinct address FROM user_points_public)
                `,
        );
      }
    } else {
      tsKf = config.default_interval / (24 * 60 * 60);
    }
    logger.debug('tsKf = %d', tsKf);
    const tx = db.transaction(() => {
      // Calculate points for each user based on all sources
      db.exec<[number]>(
        `
      INSERT
        INTO user_points (batch_id, address, asset_id, points, nft_mul)
        SELECT
          batch_id, address, xasset_id asset_id, points,
          	(1 + COALESCE (
              (SELECT 
                MIN(SUM(multiplier - 1),0.2)
          	  FROM nft_data nn
              WHERE
                nn.address = x.address AND
                nn.batch_id = x.batch_id AND
                nn.asset_id = xasset_id
              GROUP BY address
            ), 0) + COALESCE(
             (SELECT 
                SUM(ba.mul - 1)
          	  FROM user_badges ub
              LEFT JOIN badges ba ON (ba.id = ub.badge_id)
              LEFT JOIN batches bt ON (bt.batch_id = x.batch_id)
              WHERE
                ub.address = x.address AND
                ub.start <= bt.ts AND
                ub.end >= bt.ts
              GROUP BY address)
            , 0))
           nft_mul
        FROM
          (
            SELECT
              ud.batch_id,
              ud.address,
              CASE
                WHEN INSTR(ud.asset, '_') > 0
                THEN SUBSTR(ud.asset, 1, INSTR(ud.asset, '_') - 1)
                ELSE ud.asset
				      END AS xasset_id,
              FLOOR(SUM(p.price * ud.balance * ${tsKf})) points
            FROM
              user_data ud
            LEFT JOIN
              prices p ON (p.asset_id = xasset_id AND p.batch_id = ud.batch_id)
            WHERE
              ud.batch_id = ?
            AND
              address NOT IN (select address from blacklist)
            GROUP BY
              ud.batch_id, ud.address, xasset_id
          ) x
      `,
        [batchId],
      );

      db.exec<[number]>(
        'UPDATE tasks SET status = "processed" WHERE batch_id = ?',
        [batchId],
      );

      if (options.publish) {
        logger.debug('Publishing points to users_points_public');

        const query = db.query<{ batch_id: number; ts: number }, string>(
          `SELECT batch_id, ts FROM batches WHERE status = ? ORDER BY batch_id ASC`,
        );
        const all = query.all('new');
        const batchIds = all.map((row) => row.batch_id);
        logger.debug('Batch IDs: %s', batchIds.join(','));
        const firstTs = all[0].ts;

        db.exec(`UPDATE user_points_public SET change = 0`);

        db.exec(
          `
          INSERT INTO user_points_public (address, asset_id, points, change, prev_points_l1, prev_points_l2, points_l1, points_l2, place, prev_place)
          SELECT
            address, asset_id, FLOOR(SUM(points * nft_mul)) points, FLOOR(SUM(points * nft_mul)) change, 0, 0, 0, 0, 0, 0
          FROM
            user_points
          WHERE
            batch_id IN (${batchIds.join(',')})
          GROUP BY
            address, asset_id
          ON CONFLICT (address, asset_id) DO UPDATE SET
            change = excluded.change,
            points = user_points_public.points + excluded.points
          `,
        );

        // select all referrers who are not in user_points_public and insert them into user_points_public for all assets
        // bc we need to calculate L1, L2 points for users who have no points
        db.exec(
          `
            INSERT OR IGNORE INTO user_points_public
                (address, asset_id, points, "change", prev_points_l1, prev_points_l2, points_l1, points_l2, place, prev_place)
            SELECT
              r.referrer address,
               CASE
                WHEN INSTR(s.asset_id, '_') > 0
                THEN SUBSTR(s.asset_id, 1, INSTR(s.asset_id, '_') - 1)
                ELSE s.asset_id END AS asset_id,
              0 points,
              0 change,
              0 prev_points_l1,
                0 prev_points_l2,
                0 points_l1,
                0 points_l2,
                0 place,
                0 prev_place
            FROM referrals r
            LEFT JOIN schedule s
            GROUP BY address, asset_id;
            `,
        );

        // calc L1, L2 points
        const stmt = db.prepare<null, { $ts: number }>(
          `
          UPDATE
            user_points_public
          SET
            prev_points_l1 = points_l1,
            prev_points_l2 = points_l2,
            points_l1 = COALESCE(points_l1,0) + COALESCE((
              SELECT
                FLOOR(SUM(upp1.change) * ${config.l1_percent / 100})
              FROM
                referrals r
              LEFT JOIN user_points_public upp1 ON (upp1.address = r.referral AND r.ts <= $ts)
              LEFT JOIN user_kyc k ON (k.address = r.referrer AND k.ts <= $ts)
              WHERE
                r.referrer = user_points_public.address AND
                upp1.asset_id = user_points_public.asset_id AND
                k.address IS NOT NULL
            ),0),
            points_l2 = COALESCE(points_l2,0) + COALESCE((
              SELECT
                FLOOR(SUM(upp2.change) * ${config.l2_percent / 100})
              FROM
                referrals r2
              LEFT JOIN referrals r3 ON (r3.referrer = r2.referral AND r3.ts <= $ts)
              LEFT JOIN user_points_public upp2 ON (upp2.address = r3.referral AND r3.ts <= $ts)
              LEFT JOIN user_kyc k2 ON (k2.address = r2.referrer AND k2.ts <= $ts)
              WHERE
                r2.referrer = user_points_public.address AND
                upp2.asset_id = user_points_public.asset_id AND
                k2.address IS NOT NULL
            ),0)
          `,
        );
        stmt.run({ $ts: firstTs });

        db.exec(
          `
            UPDATE
              user_points_public
            SET
              change = change + (points_l1 + points_l2) - (prev_points_l1 + prev_points_l2)
          `,
        );

        db.exec(
          `WITH ranked as (
            SELECT address, ROW_NUMBER() OVER (order by points DESC) place, points FROM 
            (SELECT address, SUM(points + points_l1 + points_l2) points FROM user_points_public GROUP BY address ORDER BY points DESC) xx
            ORDER BY place ASC
        )
        UPDATE user_points_public
        SET
          prev_place = place,
          place = (SELECT place FROM ranked WHERE address = user_points_public.address)`,
        );

        db.exec(
          `UPDATE batches SET status="processed" WHERE batch_id IN (${batchIds.join(',')})`,
        );
      }
    });

    tx();
    logger.info('Task has been finished');
  });

program
  .command('publish_on_chain')
  .description('Publish points to CW20 contract')
  .action(async () => {
    const unfinishedBatchesQuery = db.query<
      {
        count: number;
      },
      null
    >(`SELECT count(*) as count FROM batches WHERE status = 'new'`);
    const unfinishedBatchesCountResult = unfinishedBatchesQuery.get(null);
    if (unfinishedBatchesCountResult?.count) {
      logger.warn('There are unfinished batches, publish on chain is skipped');
      return;
    }

    const publicPointsQuery = db.query<
      {
        address: string;
        points: number;
      },
      null
    >(
      'SELECT address, sum(points + points_l1 + points_l2) as points FROM user_points_public group by address',
    );
    const publicPoints = publicPointsQuery.all(null);

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
      await executeSetBalances(
        signingClient,
        sender,
        contract,
        publicPoints.splice(0, batchSize || 1000),
        gasAdjustment,
        logger,
      );
    }

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
  .action((protocolId, assetId, start, end, multiplier, enabled, options) => {
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
        logger.error('Cannot build valid rule for the schedule');
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

const referralCli = program
  .command('referral')
  .description('Referral commands');

referralCli
  .command('add')
  .argument('<referrer>', 'Address')
  .argument('<referral>', 'Address of the referral')
  .description('Add a referral')
  .action((referrer, referral) => {
    logger.info('Adding referral %s -> %s', referrer, referral);
    db.prepare<null, [string, string]>(
      'INSERT INTO referrals (referrer, referral, ts) VALUES (?, ?, 0)',
    ).run(referrer, referral);
  });

referralCli
  .command('list')
  .argument('<address>', 'Address')
  .description('List referrals')
  .action((address) => {
    logger.info('Referral list');
    const query = db.query<{ address: string; referral: string }, string>(
      'SELECT * FROM referrals WHERE address = ?',
    );
    for (const row of query.all(address)) {
      logger.info('Address: %s\t Referral: %s', row.address, row.referral);
    }
  });

referralCli
  .command('sync')
  .description('retrieve last Referral data')
  .action(async () => {
    await updateReferralData(db, config, logger);
  });

const blacklistCli = program
  .command('blacklist')
  .description('Edit address blacklist');

blacklistCli
  .command('add')
  .argument('<address>', 'Address')
  .description('Insert address into blacklist')
  .action((address) => {
    db.prepare('INSERT INTO blacklist (address) VALUES (?)').run(address);
    logger.info('Inserted %s into blacklist', address);
  });

blacklistCli
  .command('remove')
  .argument('<address>', 'Address')
  .description('Remove address from blacklist')
  .action((address) => {
    db.prepare('DELETE FROM blacklist WHERE address = ?').run(address);
    logger.info('Removed %s from blacklist', address);
  });

const kycCli = program.command('kyc').description('KYC commands');

kycCli
  .command('add')
  .argument('<address>', 'Address')
  .option('-p --provider <provider>', 'KYC provider')
  .option('-i --id <kyc_id>', 'KYC id')
  .option('-c --code <code>', 'Referral code')
  .action((address, options) => {
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
    logger.info('Referral code: %s', code);
  });

kycCli
  .command('get')
  .argument('<address>', 'Address')
  .action((address) => {
    address = neutronAddress.parse(address).toString();
    const query = db.query<
      { kyc_id: string; kyc_provider: string; ts: number },
      string
    >('SELECT kyc_id, kyc_provider, ts FROM user_kyc WHERE address = ?');
    const row = query.get(address);
    if (!row) {
      logger.info('No KYC found for address %s', address);
    } else {
      logger.info(
        'KYC id: %s, provider: %s, ts: %s',
        row.kyc_id,
        row.kyc_provider,
        new Date(row.ts * 1000).toISOString(),
      );
    }
  });

const recalcCli = program.command('recalc').description('Recalc commands');

recalcCli
  .command('add_points')
  .argument('<address>', 'Address')
  .argument('<batch_id>', 'Batch ID')
  .argument('<reason>', 'Reason')
  .argument('<points>', 'Points')
  .argument('<points_l1>', 'Points L1')
  .argument('<points_l2>', 'Points L2')
  .argument('<asset_id>', 'Asset ID')
  .option('-c --createIfNotExists', 'Create user if not exists')
  .action(
    (
      address,
      batchId,
      reason,
      points,
      pointsL1,
      pointsL2,
      assetId,
      options,
    ) => {
      const tx = db.transaction(() => {
        if (options.createIfNotExists) {
          const row = db
            .query<
              { address: string },
              string
            >('SELECT address FROM user_points_public WHERE address = ?')
            .get(address);
          if (!row) {
            logger.info('Creating user %s', address);
            db.prepare(
              'INSERT INTO user_points_public (address, asset_id, points, points_l1, points_l2, change, prev_points_l1, prev_points_l2, place, prev_place) VALUES (?, ?, 0, 0, 0, 0, 0, 0, 0, 0)',
            ).run(address, assetId);
          }
        }
        db.prepare(
          'UPDATE user_points_public SET points = points + ?, points_l1 = points_l1 + ?, points_l2 = points_l2 + ? WHERE address = ? AND asset_id = ?',
        ).run(points, pointsL1, pointsL2, address, assetId);
        db.prepare(
          'INSERT INTO changes (address, batch_id, reason, points, points_l1, points_l2, asset_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        ).run(address, batchId, reason, points, pointsL1, pointsL2, assetId);
      });
      tx();
      logger.info('Added points for address %s', address);
    },
  );

recalcCli
  .command('remove_points')
  .argument('<address>', 'Address')
  .argument('<batch_id>', 'Batch ID')
  .argument('<reason>', 'Reason')
  .argument('<points>', 'Points')
  .argument('<points_l1>', 'Points L1')
  .argument('<points_l2>', 'Points L2')
  .argument('<asset_id>', 'Asset ID')
  .action((address, batchId, reason, points, pointsL1, pointsL2, assetId) => {
    const tx = db.transaction(() => {
      db.prepare(
        'UPDATE user_points_public SET points = points - ?, points_l1 = points_l1 - ?, points_l2 = points_l2 - ? WHERE address = ? AND asset_id = ?',
      ).run(points, pointsL1, pointsL2, address, assetId);
      db.prepare(
        'INSERT INTO changes (address, batch_id, reason, points, points_l1, points_l2, asset_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      ).run(address, batchId, reason, -points, -pointsL1, -pointsL2, assetId);
    });
    tx();
    logger.info('Removed points for address %s', address);
  });

const debugCli = program.command('debug').description('Debug commands');

debugCli
  .command('get_multiplier')
  .argument('<protocol_id>', 'Protocol id')
  .argument('<batch_id>', 'Batch id')
  .action((protocolId, batchId) => {
    const multipliers = getAssetMulsByProtocolAndBatchId(protocolId, batchId);
    logger.info('Multipliers for protocol %s: %o', protocolId, multipliers);
  });

debugCli
  .command('crawl')
  .description('Get user data on the defined source and batch id')
  .argument('<protocol_id>', 'Protocol id')
  .argument('<batch_id>', 'Batch id')
  .argument('<user_address>', 'User address on any chain')
  .action(async (protocolId, batchId, userAddress) => {
    // Get the batch ID and height of the task
    logger.level = 'info';
    const row = db
      .query<
        { height: number; ts: number },
        [number, string]
      >('SELECT height, ts FROM tasks WHERE batch_id = ? AND protocol_id = ? ORDER BY batch_id ASC LIMIT 1')
      .get(batchId, protocolId);
    if (!row) {
      logger.info('No tasks found for batch_id %s', batchId);
      throw new Error('No tasks found');
    }
    const height = row.height;
    const multipliers = getAssetMulsByProtocolAndBatchId(protocolId, batchId);
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
    if (!isBasicSource(sourceObj)) {
      throw new Error('Source is not basic');
    }
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
  });

program.parse(process.argv);

function isBasicSource(
  source: any,
): source is { getUsersBalances: () => Promise<any> } {
  return 'getUsersBalances' in source;
}

function isNFTSource(
  source: any,
): source is { getUsersTokens: () => Promise<any> } {
  return 'getUsersTokens' in source;
}
