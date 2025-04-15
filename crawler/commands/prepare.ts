import { Command } from 'commander';
import { getContext } from '../context';
import { getTrueRandom, getPseudoRandom } from '../random';
import sources from '../../lib/sources';
import PriceFeed from '../../lib/pricefeed';
import { getNextBatchId } from "../../db/utils";

export function registerPrepareCommand(program: Command) {
  program
    .command('prepare')
    .description('Prepare tasks for processing sources')
    .option('-t --timestamp <timestamp>', 'Timestamp to use')
    .option('-s --simulate', 'Just simulate the task')
    .action(async (options) => {
      const { config, logger, db } = getContext(program);

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
          const nextBatchId = getNextBatchId(db);
          timeShift = getPseudoRandom(nextBatchId);
          logger.info(
            'Got time shift for pseudo random: %d, batch id: %d ',
            timeShift,
            nextBatchId,
          );
        } catch (error) {
          logger.error(
            'Error retrieving time shift for pseudo random: %o',
            error,
          );
          return;
        }
      }

      const tasksData: {
        protocolId: string;
        height: number;
        jitter: number;
      }[] = [];
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
}
