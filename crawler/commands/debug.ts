import { Command } from 'commander';
import { getContext } from '../context';
import sources from '../../lib/sources';
import { toNeutronAddress } from '../../lib/neutron-address';
import { UserBalance } from '../../types/sources/userBalance';
import { getAssetMulsByProtocolAndBatchId } from '../../db/utils';

function isBasicSource(
  source: any,
): source is { getUsersBalances: () => Promise<any> } {
  return 'getUsersBalances' in source;
}

export function registerDebugCli(program: Command) {
  const debugCli = program.command('debug').description('Debug commands');

  debugCli
    .command('get_multiplier')
    .argument('<protocol_id>', 'Protocol id')
    .argument('<batch_id>', 'Batch id')
    .action((protocolId, batchId) => {
      const { db, logger } = getContext(program);
      const multipliers = getAssetMulsByProtocolAndBatchId(
        db,
        protocolId,
        batchId,
      );
      logger.info('Multipliers for protocol %s: %o', protocolId, multipliers);
    });

  debugCli
    .command('crawl')
    .description('Get user data on the defined source and batch id')
    .argument('<protocol_id>', 'Protocol id')
    .argument('<batch_id>', 'Batch id')
    .argument('<user_address>', 'User address on any chain')
    .action(async (protocolId, batchId, userAddress) => {
      const { config, logger, db } = getContext(program);

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
      const multipliers = getAssetMulsByProtocolAndBatchId(
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
}
