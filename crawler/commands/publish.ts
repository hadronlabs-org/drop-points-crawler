import { Command } from 'commander';
import { getContext } from '../context';
import { executeSetBalances } from '../../lib/execute';
import { getSigningCosmWasmClient } from '../../lib/stargate';

export function registerPublishCommand(program: Command) {
  program
    .command('publish_on_chain')
    .description('Publish points to CW20 contract')
    .action(async () => {
      const { config, logger, db } = getContext(program);

      const unfinishedBatchesQuery = db.query<
        {
          count: number;
        },
        null
      >(`SELECT count(*) as count FROM batches WHERE status = 'new'`);
      const unfinishedBatchesCountResult = unfinishedBatchesQuery.get(null);
      if (unfinishedBatchesCountResult?.count) {
        logger.warn(
          'There are unfinished batches, publish on chain is skipped',
        );
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
}
