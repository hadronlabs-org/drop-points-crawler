import { Command } from 'commander';
import { getContext } from '../context';

export function registerRecalcCli(program: Command) {
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
        const { logger, db } = getContext(program);

        const tx = db.transaction(() => {
          if (options.createIfNotExists) {
            const row = db
              .query<
                { address: string },
                [string, string]
              >('SELECT address FROM user_points_public WHERE address = ? AND asset_id = ?')
              .get(address, assetId);
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
      const { logger, db } = getContext(program);

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
}
