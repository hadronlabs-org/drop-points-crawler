import { Database, constants } from 'bun:sqlite';
import { logger } from '../lib/logger';

export const connect = (createTables = false): Database => {
  const dbPath = process.env.DB_PATH;
  if (!dbPath) {
    throw new Error('DB_PATH environment variable not set');
  }
  logger.debug('Connecting to database at', dbPath);
  const db = new Database(
    dbPath,
    constants.SQLITE_OPEN_FULLMUTEX |
      constants.SQLITE_OPEN_READWRITE |
      constants.SQLITE_OPEN_CREATE,
  );
  db.exec('PRAGMA busy_timeout = 5000;');
  if (createTables) {
    logger.debug('Creating table tasks if not exists');
    db.exec(
      'CREATE TABLE IF NOT EXISTS tasks (source_id TEXT, height INTEGER, status TEXT, created_at INTEGER);',
    );
    db.exec(
      'CREATE INDEX IF NOT EXISTS tasks_source_id_height ON tasks (source_id, height);',
    );
  }
  return db;
};
