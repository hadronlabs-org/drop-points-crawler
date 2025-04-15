import { Command } from 'commander';
import { getContext } from '../context';

export function registerFinishCommand(program: Command) {
  program
    .command('finish')
    .description('Calculate points for users and finish the task')
    .option('-b, --batch_id <batch_id>', 'batch ID  to finish')
    .option('-p --publish', 'Publish the points to the blockchain')
    .action((options) => {
      const { config, logger, db } = getContext(program);

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
}
