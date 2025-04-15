import { Command } from 'commander';
import { getContext } from '../context';
import pLimit from 'p-limit';

export function registerCrawlAllParallelCommand(program: Command) {
  program
    .command('crawl-all')
    .description('Crawl all protocols in parallel and optionally finish')
    .option('--concurrency <number>', 'Number of concurrent crawls', '4')
    .action(async (options) => {
      const { config, db, logger } = getContext(program);

      const query = db.query<{ protocol_id: string }, null>(
        'SELECT DISTINCT protocol_id FROM schedule WHERE enabled = 1',
      );

      const scheduledProtocols = query.all(null).map((row) => row.protocol_id);

      console.log(scheduledProtocols);

      const protocols = scheduledProtocols.filter(
        (id) => id in config.protocols,
      );

      console.log(protocols);

      if (!protocols.length) {
        logger.warn('No enabled protocols found in both config and schedule');
        return;
      }

      const concurrency = parseInt(options.concurrency, 10) || 4;
      const limit = pLimit(concurrency);

      logger.info(
        'Starting parallel crawl for %d protocols (concurrency: %d)',
        protocols.length,
        concurrency,
      );

      await Promise.allSettled(
        protocols.map(
          (protocolId): Promise<void> =>
            limit(async (): Promise<void> => {
              const t0 = Date.now();
              logger.info('Crawling protocol %s', protocolId);
              try {
                await program.parseAsync(['bun', 'crawl', 'crawl', protocolId]);
                const duration = ((Date.now() - t0) / 1000).toFixed(2);
                logger.info(
                  'Protocol %s finished in %ss',
                  protocolId,
                  duration,
                );
              } catch (err) {
                logger.error('Protocol %s failed: %o', protocolId, err);
              }
            }),
        ),
      );

      logger.info('All protocol crawls completed');
    });
}
