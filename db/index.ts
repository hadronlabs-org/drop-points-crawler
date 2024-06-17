import { Database, constants } from 'bun:sqlite';
import { Logger } from 'pino';

export const connect = (
  createTables = false,
  config: any,
  logger: Logger<never>,
): Database => {
  const dbPath = config.db_path;
  if (!dbPath) {
    throw new Error('DB_PATH environment variable not set');
  }
  logger.debug('Connecting to database at %s', dbPath);
  const db = new Database(
    dbPath,
    constants.SQLITE_OPEN_FULLMUTEX |
      constants.SQLITE_OPEN_READWRITE |
      constants.SQLITE_OPEN_CREATE,
  );
  db.exec('PRAGMA busy_timeout = 5000;');
  db.exec('PRAGMA journal_mode = WAL;');
  if (createTables) {
    logger.debug('Creating table tasks if not exists');
    db.exec(
      'CREATE TABLE IF NOT EXISTS batches (batch_id INTEGER PRIMARY KEY AUTOINCREMENT, status TEXT, ts INTEGER);',
    );
    db.exec(
      'CREATE TABLE IF NOT EXISTS prices (asset_id TEXT, batch_id INTEGER, price NUMERIC, ts INTEGER, PRIMARY KEY(batch_id DESC, asset_id));',
    );
    db.exec(
      'CREATE TABLE IF NOT EXISTS tasks (protocol_id TEXT, batch_id INTEGER, height INTEGER, status TEXT, jitter NUMERIC, ts INTEGER, PRIMARY KEY(batch_id DESC, protocol_id));',
    );
    db.exec(
      'CREATE TABLE IF NOT EXISTS user_data (batch_id INTEGER, address TEXT, protocol_id TEXT, height INTEGER, asset TEXT, balance NUMERIC, PRIMARY KEY(batch_id DESC, address, protocol_id));',
    );
    db.exec(
      'CREATE TABLE IF NOT EXISTS user_kyc (address TEXT PRIMARY KEY, referral_code TEXT NOT NULL UNIQUE, kyc_id TEXT NOT NULL, kyc_provider TEXT NOT NULL, ts INTEGER);',
    );
    db.exec(
      'CREATE TABLE IF NOT EXISTS referrals (id INTEGER PRIMARY KEY AUTOINCREMENT, referrer TEXT, referral TEXT, height NUMERIC, ts INTEGER);',
    );
    db.exec(
      'CREATE TABLE IF NOT EXISTS user_points (batch_id INTEGER, address TEXT, asset_id TEXT, points NUMERIC, PRIMARY KEY(batch_id DESC, address, asset_id));',
    );
    db.exec(
      `CREATE TABLE IF NOT EXISTS user_points_public 
        (
          address TEXT, 
          asset_id TEXT, 
          points NUMERIC NOT NULL, 
          change NUMERIC NOT NULL, 
          prev_points_l1 NUMERIC NOT NULL, 
          prev_points_l2 NUMERIC NOT NULL, 
          points_l1 NUMERIC NOT NULL, 
          points_l2 NUMERIC NOT NULL, 
          place INTEGER NOT NULL, 
          PRIMARY KEY(address, asset_id)
        );`,
    );
    db.exec(
      'CREATE TABLE IF NOT EXISTS schedule (schedule_id INTEGER PRIMARY KEY AUTOINCREMENT, protocol_id INTEGER, asset_id TEXT, multiplier REAL, start INTEGER, end INTEGER, enabled BOOLEAN);',
    );
    db.exec(
      'CREATE INDEX IF NOT EXISTS schedule_protocol_id_asset_id ON schedule (protocol_id, asset_id);',
    );
    db.exec('CREATE INDEX IF NOT EXISTS batches_status ON batches (status);');
    db.exec(
      'CREATE INDEX IF NOT EXISTS referral_referral ON referrals (referral);',
    );
    db.exec(
      'CREATE INDEX IF NOT EXISTS referral_height ON referrals (height);',
    );
    db.exec(
      'CREATE UNIQUE INDEX IF NOT EXISTS referral_referrer_referal ON referrals (referrer, referral);',
    );
    db.exec(
      'CREATE UNIQUE INDEX IF NOT EXISTS kyc_provider_id ON user_kyc (kyc_id, kyc_provider);',
    );

    const row = db
      .query<{ count: number }, null>('SELECT COUNT(*) as count FROM schedule')
      .get(null);
    if (row?.count === 0) {
      for (const [protocol_id, protocol] of Object.entries(config.protocols)) {
        for (const [asset_id, asset] of Object.entries(
          (protocol as any).assets,
        )) {
          db.exec(
            'INSERT INTO schedule (protocol_id, asset_id, multiplier, start, end, enabled) VALUES (?, ?, ?, ?, ?, ?)',
            [protocol_id, asset_id, (asset as any).multiplier, 0, 0, true],
          );
        }
      }
    }
  }
  return db;
};
