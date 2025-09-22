import { Command } from 'commander';
import { getContext } from '../context';
import sources from '../../lib/sources';
import { toNeutronAddress } from '../../lib/neutron-address';
import { getLinkRecord } from '../../lib/link';
import { UserBalance } from '../../types/sources/userBalance';
import { getAssetMulsByProtocolAndBatchId } from '../../db/utils';
import { Logger } from 'pino';

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

function protocolLogger(protocolId: string, logger: Logger): Logger {
  const prefix = `[${protocolId}]`;

  return {
    info: (...args: any[]) =>
      logger.info(`${prefix} ${args[0]}`, ...args.slice(1)),
    warn: (...args: any[]) =>
      logger.warn(`${prefix} ${args[0]}`, ...args.slice(1)),
    error: (...args: any[]) =>
      logger.error(`${prefix} ${args[0]}`, ...args.slice(1)),
    debug: (...args: any[]) =>
      logger.debug(`${prefix} ${args[0]}`, ...args.slice(1)),
    trace: (...args: any[]) =>
      logger.trace(`${prefix} ${args[0]}`, ...args.slice(1)),
  } as Logger;
}

export function registerCrawlCommand(program: Command) {
  program
    .command('crawl')
    .argument('<protocol_id>', 'protocol to crawl')
    .description('Process the specified protocol')
    .option('-b --batch_id <batch_id>', 'Batch ID to process')
    .action(async (protocolId: string, options) => {
      const { config, logger: baseLogger, db } = getContext(program);

      const logger = protocolLogger(protocolId, baseLogger);

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
      const multipliers = getAssetMulsByProtocolAndBatchId(
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
      ](
        config.protocols[protocolId].rpc,
        logger,
        { ...config.protocols[protocolId], batchId },
        db,
      );

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
}
