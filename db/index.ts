import { Client } from 'pg';
import { Logger } from 'pino';

import { dropletRuleSchema } from '../types/config/dropletRule';
import { getValidData } from '../types/utils';

export const connect = async (
  createTables = false,
  config: any,
  logger: Logger<never>,
): Promise<Client> => {
  const dbPath = config.db_path;
  if (!dbPath) {
    throw new Error('DB_PATH environment variable not set');
  }

  logger.debug('Connecting to database at %s', dbPath);
  const db = new Client({
    host: 'localhost',
    port: 5432,
    database: 'your_database',
    user: 'your_username',
    password: 'your_password',
  });
  await db.connect();
  await db.query(`SET lock_timeout = '5s'`);

  if (createTables) {
    logger.debug('Creating table tasks if not exists');

    await db.query(`
      CREATE TABLE IF NOT EXISTS batches (
        batch_id SERIAL PRIMARY KEY,
        status TEXT,
        ts INTEGER
      );

      CREATE TABLE IF NOT EXISTS prices (
        asset_id TEXT,
        batch_id INTEGER REFERENCES batches(batch_id),
        price NUMERIC,
        ts INTEGER,
        PRIMARY KEY (batch_id DESC, asset_id)
      );

      CREATE TABLE IF NOT EXISTS tasks (
        protocol_id TEXT,
        batch_id INTEGER REFERENCES batches(batch_id),
        height INTEGER,
        status TEXT,
        jitter NUMERIC,
        ts INTEGER,
        PRIMARY KEY (batch_id DESC, protocol_id)
      );

      CREATE TABLE IF NOT EXISTS user_data (
        batch_id INTEGER REFERENCES batches(batch_id),
        address TEXT,
        protocol_id TEXT,
        height INTEGER,
        asset TEXT,
        balance NUMERIC,
        PRIMARY KEY (batch_id DESC, address, protocol_id, asset)
      );

      CREATE TABLE IF NOT EXISTS user_kyc (
        address TEXT PRIMARY KEY,
        referral_code TEXT NOT NULL UNIQUE,
        kyc_id TEXT NOT NULL,
        kyc_provider TEXT NOT NULL,
        ts INTEGER
      );

      CREATE TABLE IF NOT EXISTS referrals (
        id SERIAL PRIMARY KEY,
        referrer TEXT,
        referral TEXT,
        height NUMERIC,
        ts INTEGER
      );

      CREATE TABLE IF NOT EXISTS user_points (
        batch_id INTEGER REFERENCES batches(batch_id),
        address TEXT,
        asset_id TEXT,
        points NUMERIC,
        PRIMARY KEY (batch_id DESC, address, asset_id)
      );

      CREATE TABLE IF NOT EXISTS user_points_public (
        address TEXT,
        asset_id TEXT,
        points NUMERIC NOT NULL,
        change NUMERIC NOT NULL,
        prev_points_l1 NUMERIC NOT NULL,
        prev_points_l2 NUMERIC NOT NULL,
        points_l1 NUMERIC NOT NULL,
        points_l2 NUMERIC NOT NULL,
        place INTEGER NOT NULL,
        prev_place INTEGER NOT NULL,
        PRIMARY KEY (address, asset_id)
      );

      CREATE TABLE IF NOT EXISTS schedule (
        schedule_id SERIAL PRIMARY KEY,
        protocol_id TEXT,
        asset_id TEXT,
        multiplier REAL,
        start INTEGER,
        end INTEGER,
        enabled BOOLEAN
      );

      CREATE TABLE IF NOT EXISTS user_points_rules (
        strategy TEXT,
        description TEXT,
        multiplier REAL,
        chain TEXT,
        status BOOLEAN,
        link TEXT,
        link_text TEXT,
        type TEXT,
        featured BOOLEAN,
        visible BOOLEAN
      );

      CREATE TABLE IF NOT EXISTS blacklist (
        address TEXT UNIQUE
      );

      CREATE TABLE IF NOT EXISTS kvstore (
        key TEXT PRIMARY KEY,
        value TEXT
      );

      CREATE INDEX IF NOT EXISTS schedule_protocol_id_asset_id ON schedule (protocol_id, asset_id);
      CREATE INDEX IF NOT EXISTS batches_status ON batches (status);
      CREATE INDEX IF NOT EXISTS referral_referral ON referrals (referral);
      CREATE INDEX IF NOT EXISTS referral_height ON referrals (height);
      CREATE UNIQUE INDEX IF NOT EXISTS referral_referrer_referral ON referrals (referrer, referral);
      CREATE UNIQUE INDEX IF NOT EXISTS kyc_provider_id ON user_kyc (kyc_id, kyc_provider);
    `);

    const { rows: scheduleCountRows } = await db.query(
      'SELECT COUNT(*) as count FROM schedule',
    );
    if (parseInt(scheduleCountRows[0].count) === 0) {
      for (const [protocol_id, protocol] of Object.entries(config.protocols)) {
        logger.debug('Inserting schedule for %s', protocol_id);
        for (const [asset_id, asset] of Object.entries(
          (protocol as any).assets,
        )) {
          const protocolObject = protocol as any;
          const assetObject = asset as any;

          await db.query(
            `INSERT INTO schedule (protocol_id, asset_id, multiplier, start, end, enabled)
            VALUES ($1, $2, $3, $4, $5, $6)`,
            [protocol_id, asset_id, assetObject.multiplier, 0, 0, true],
          );

          let dropletRule;
          try {
            dropletRule = getValidData(
              {
                strategy: assetObject.frontend_data.strategy,
                description: assetObject.frontend_data.description,
                multiplier: assetObject.frontend_data.multiplier,
                chain: protocolObject.frontend_data.chain_name,
                status: assetObject.frontend_data.status,
                link: protocolObject.frontend_data.link,
                link_text: protocolObject.frontend_data.link_text,
                type: assetObject.frontend_data.type,
                featured: assetObject.frontend_data.featured,
                visible: assetObject.frontend_data.visible,
              },
              dropletRuleSchema,
              logger,
            );
          } catch (e) {
            continue;
          }

          await db.query(
            `INSERT INTO user_points_rules (strategy, description, multiplier, chain, status, link, link_text, type, featured, visible)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            [
              dropletRule.strategy,
              dropletRule.description,
              dropletRule.multiplier,
              dropletRule.chain,
              dropletRule.status,
              dropletRule.link,
              dropletRule.link_text,
              dropletRule.type,
              dropletRule.featured,
              dropletRule.visible,
            ],
          );
        }
      }
    }

    const { rows: blacklistCountRows } = await db.query(
      'SELECT COUNT(*) as count FROM blacklist',
    );
    if (parseInt(blacklistCountRows[0].count) === 0) {
      for (const address of config.blacklist) {
        await db.query('INSERT INTO blacklist (address) VALUES ($1)', [
          address,
        ]);
      }
    }
  }
  return db;
};
