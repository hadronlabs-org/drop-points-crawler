import 'dotenv/config';
import { Command } from 'commander';
import { connect } from '../db';
import { logger } from '../lib/logger';
import sources from '../lib/sources';

const program = new Command();
const db = connect(true);

if (!process.env.LOG_LEVEL) {
  throw new Error('LOG_LEVEL environment variable not set');
}

program
  .command('prepare_tasks')
  .description('Prepare tasks for processing sources')
  .action(async () => {
    const enabledSources = process.env.ENABLED_SOURCES?.split(',') || [];
    const currentTs = Math.floor(Date.now() / 1000);
    if (!enabledSources.length) {
      throw new Error('No active sources found, please define ENABLED_SOURCES');
    }
    logger.info('Enabled sources: %s', enabledSources);
    const getHeights = enabledSources.filter(Boolean).map((key) => {
      const source = sources[key as keyof typeof sources];
      if (!source) {
        throw new Error(`Source ${key} not found`);
      }
      return source.getLastBlockHeight();
    });
    const results = await Promise.all(getHeights);
    const heights = enabledSources.reduce(
      (acc, key, idx) => [...acc, { $source: key, $height: results[idx] }],
      [] as { $source: string; $height: number }[],
    );
    logger.info('Heights: %o', heights);
    const statement = db.prepare(
      'INSERT INTO tasks (source_id, height, status, created_at) VALUES ($source, $height, $status, $created_at)',
    );
    const insert = db.transaction((tasks) => {
      for (const task of heights)
        statement.run({ ...task, $status: 'new', $created_at: currentTs });
      return tasks.length;
    });
    const res = insert(heights);
    logger.info('Inserted %d tasks', res);
  });

program
  .command('finish')
  .option('-c, --created_at <created_at>', 'Created_at timestamp to finish')
  .action(async (options) => {
    const enabledSources = process.env.ENABLED_SOURCES?.split(',') || [];
    if (!enabledSources.length) {
      throw new Error(
        'No enabled sources found, please define ENABLED_SOURCES',
      );
    }
    const createdAt = (() => {
      if (options.created_at === undefined) {
        const row = db.query<{ created_at: number }, null>(
          'SELECT created_at FROM tasks WHERE status = "done" ORDER BY height ASC LIMIT 1',
        );
        if (!row) {
          logger.info('No tasks found');
        }
        if (!row.get(null)) {
          return;
        }
        const createdAt = row.get(null)?.created_at;
        row.finalize();
        return createdAt;
      } else {
        const query = db.query<{ created_at: number }, [number, string]>(
          'SELECT created_at FROM tasks WHERE status = "done" AND height = ? AND source_id IN (?) ORDER BY created_at ASC LIMIT 1',
        );
        const row = query.get(options.created_at, enabledSources.join(', '));
        if (!row) {
          logger.info('No tasks found for created_at %s', options.created_at);
        }
        query.finalize();
        return row?.created_at;
      }
    })();
    if (!createdAt) {
      return;
    }
    logger.info('Finishing task for created_at %s', createdAt);
    const query = db.query<{ cnt: number }, number>(
      'SELECT count(*) as cnt FROM tasks WHERE created_at = ? AND status = "done"',
    );
    const cnt = query.get(createdAt)?.cnt;
    if (cnt !== enabledSources.length) {
      logger.info('Not all tasks are done');
    }
    logger.debug('All tasks are done');
    // Calculate points for each user based on all sources
    // Update user points locally
    // Update user points in CW20 contract
  });

program
  .command('process <source>')
  .description('Process the specified source')
  .action((source) => {
    // Logic for processing the source
    console.log(`Processing source: ${source}`);
  });

program.parse(process.argv);
