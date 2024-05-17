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
  .command('process <source>')
  .description('Process the specified source')
  .action((source) => {
    // Logic for processing the source
    console.log(`Processing source: ${source}`);
  });

program.parse(process.argv);
