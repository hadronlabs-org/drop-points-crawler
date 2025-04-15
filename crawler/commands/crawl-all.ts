import { Command } from 'commander';
import { getContext } from '../context';
import pLimit from 'p-limit';

async function retryWithLimit(
  fn: () => Promise<void>,
  limit: number,
  protocolId: string,
  logger: ReturnType<typeof getContext>['logger'],
): Promise<void> {
  for (let attempt = 1; attempt <= limit; attempt++) {
    try {
      await fn();
      return;
    } catch (err) {
      logger.warn(
        'Retry %d/%d failed for protocol %s: %o',
        attempt,
        limit,
        protocolId,
        err instanceof Error ? err.message : String(err),
      );
      if (attempt === limit) {
        logger.error('Max retries reached for protocol %s', protocolId);
        throw err;
      }
    }
  }
}

export function registerCrawlAllParallelCommand(program: Command) {
  program
    .command('crawl-all')
    .description('Crawl all protocols in parallel and optionally finish')
    .option('--concurrency <number>', 'Number of concurrent crawls', '4')
    .option('--retries <n>', 'Max retries per protocol', '3')
    .action(async (options) => {
      const { config, db, logger } = getContext(program);

      const ts = parseInt(
        options.timestamp || (Date.now() / 1000).toString(),
        10,
      );

      const query = db.query<{ protocol_id: string }, [number, number]>(
        `
        SELECT DISTINCT protocol_id
        FROM schedule
        WHERE enabled = 1
          AND (
            (start = 0 AND end = 0)
            OR (start < ? AND end > ?)
          )
        `,
      );

      const scheduledProtocols = query
        .all(ts, ts)
        .map((row) => row.protocol_id);

      logger.debug('Scheduled protocols are: %s', scheduledProtocols);

      const protocols = scheduledProtocols.filter(
        (id) => id in config.protocols,
      );

      logger.debug(
        'Scheduled protocols listed in the config are: %s',
        protocols,
      );

      if (!protocols.length) {
        logger.warn('No enabled protocols found in both config and schedule');
        return;
      }

      const concurrency = parseInt(options.concurrency, 10) || 4;
      const concurrencyLimit = pLimit(concurrency);

      logger.info(
        'Starting parallel crawl for %d protocols (concurrency: %d)',
        protocols.length,
        concurrency,
      );

      const retryLimit = parseInt(options.retries, 10) || 3;

      await Promise.allSettled(
        protocols.map(
          (protocolId): Promise<void> =>
            concurrencyLimit(() =>
              retryWithLimit(
                async () => {
                  logger.info('Crawling protocol %s', protocolId);
                  await program.parseAsync([
                    'bun',
                    'crawl',
                    'crawl',
                    protocolId,
                  ]);
                  logger.info('Protocol %s finished', protocolId);
                },
                retryLimit,
                protocolId,
                logger,
              ),
            ),
        ),
      );

      logger.info('All protocol crawls completed');
    });
}
