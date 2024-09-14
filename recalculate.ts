import { promises as fsPromises } from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { constants, Database } from 'bun:sqlite';

const OLD_DATABASE = 'recalculate/old_data.db';
const NEW_DATABASE = 'recalculate/new_data.db';
const CHANGES_FILE = 'recalculate/changes.csv';

async function parseCsv(filePath: string): Promise<string[]> {
  const data = await fsPromises.readFile(filePath, 'utf8');

  const lines = data.trim().split('\n');

  const [headerLine, ...dataLines] = lines;
  const headers = headerLine.split(',');

  if (headers.length !== 3) {
    throw new Error('CSV file does not have correct number of columns');
  }

  return dataLines;
}

async function main() {
  const currentDbFile = path.join(__dirname, OLD_DATABASE);
  const recalculatedDbFile = path.join(__dirname, NEW_DATABASE);

  try {
    await fsPromises.copyFile(currentDbFile, recalculatedDbFile);
  } catch (error) {
    console.error(`Error copying database file: ${error}`);
  }
  console.log('Database file copied successfully');

  const oldDb = new Database(
    currentDbFile,
    constants.SQLITE_OPEN_FULLMUTEX |
      constants.SQLITE_OPEN_READWRITE |
      constants.SQLITE_OPEN_CREATE,
  );

  const newDb = new Database(
    recalculatedDbFile,
    constants.SQLITE_OPEN_FULLMUTEX |
      constants.SQLITE_OPEN_READWRITE |
      constants.SQLITE_OPEN_CREATE,
  );

  newDb.exec(`DELETE FROM batches`);
  newDb.exec(`DELETE FROM tasks`);
  newDb.exec(`DELETE FROM user_data`);
  newDb.exec(`DELETE FROM user_points`);
  newDb.exec(`DELETE FROM user_points_public`);

  const batchesQuery = oldDb.query<
    { batch_id: number; status: string; ts: number },
    null
  >('SELECT * FROM batches');
  const batches = batchesQuery.all(null);

  newDb.exec(
    `CREATE TABLE IF NOT EXISTS changes (address TEXT, batch_id TEXT, points INTEGER, PRIMARY KEY(address, batch_id DESC));`,
  );

  const changesLines = await parseCsv(CHANGES_FILE);
  changesLines.forEach((line) => {
    const [address, batchId, points] = line.split(',');
    newDb.exec(`
          INSERT INTO changes (address, batch_id, points)
          VALUES ('${address}', '${batchId}', ${points})
          ON CONFLICT (address, batch_id) DO UPDATE SET
            points = changes.points + excluded.points
          `);
  });

  for (const batch of batches) {
    console.log(`Processing batch ${batch.batch_id}...`);

    newDb.exec('INSERT INTO batches (batch_id, status, ts) VALUES (?, ?, ?);', [
      batch.batch_id,
      'new',
      batch.ts,
    ]);

    console.log(`Batch ${batch.batch_id} inserted to the new database`);

    const tasksQuery = oldDb.query<
      {
        protocol_id: string;
        batch_id: number;
        height: number;
        status: string;
        jitter: number;
        ts: number;
      },
      [number]
    >('SELECT * FROM tasks WHERE batch_id = ?');
    const tasks = tasksQuery.all(batch.batch_id);
    console.log(
      `Got all tasks for batch ${batch.batch_id} from the old database`,
    );

    tasks.forEach((task) => {
      newDb.exec(
        'INSERT INTO tasks (protocol_id, batch_id, height, status, jitter, ts) VALUES (?, ?, ?, ?, ?, ?);',
        [
          task.protocol_id,
          task.batch_id,
          task.height,
          'new',
          task.jitter,
          task.ts,
        ],
      );
    });
    console.log(
      `All tasks for batch ${batch.batch_id} are inserted to the new database`,
    );

    const batchProtocols = tasks.map((task) => task.protocol_id);
    console.log(`Enabled protocols are ${batchProtocols}`);

    for (const batchProtocol of batchProtocols) {
      const crawlCommand = `bun crawl crawl ${batchProtocol} --recalculate`;
      console.log(`Running ${crawlCommand}`);
      try {
        execSync(crawlCommand);
      } catch (error) {
        console.error(`Error executing crawl command: ${error}`);
      }
    }

    let finishCommand;

    if (batch.batch_id === 1 || batch.status === 'new') {
      finishCommand = `bun crawl finish --recalculate`;
    } else {
      finishCommand = `bun crawl finish --publish --recalculate`;
    }

    console.log(`Running ${finishCommand}`);
    try {
      const buf = execSync(finishCommand);
      console.log(Buffer.from(buf).toString());
    } catch (error) {
      console.error(`Error executing finish command: ${error}`);
    }

    const checkLevelOneQuery = newDb.query<
      {
        row_count: number;
      },
      [null]
    >(`
          WITH batch_3_ts AS (
              SELECT ts 
              FROM batches 
              WHERE batch_id = 3
          ),
          level_one_referral_points AS (
              SELECT
                  r.referrer AS referrer,
                  SUM(
                      CASE
                          WHEN up.batch_id IN (1, 2) AND kyc.ts < (SELECT ts FROM batch_3_ts) THEN up.points
                          ELSE up.points
                      END
                  ) * 0.25 AS referral_points_total
              FROM
                  referrals r
              LEFT JOIN
                  user_points up ON r.referral = up.address
              LEFT JOIN
                  batches b ON up.batch_id = b.batch_id
              LEFT JOIN
                  user_kyc kyc ON r.referrer = kyc.address
              WHERE
                  (b.ts >= kyc.ts AND up.batch_id NOT IN (1, 2))
                  OR
                  (up.batch_id IN (1, 2) AND kyc.ts < (SELECT ts FROM batch_3_ts))
              GROUP BY
                  r.referrer
          )
          SELECT
              COUNT(*) AS row_count
          FROM
              level_one_referral_points l1rp
          LEFT JOIN
              user_points_public upp ON l1rp.referrer = upp.address
          WHERE
              ABS((l1rp.referral_points_total / 1000000.0) - (COALESCE(upp.points_l1, 0) / 1000000.0)) >= 1;
    `);
    const checkLevelOne = checkLevelOneQuery.get(null);
    if (checkLevelOne) {
      console.log(`${checkLevelOne.row_count} addresses are broken with l1`);
    }

    const checkLevelTwoQuery = newDb.query<
      {
        row_count: number;
      },
      [null]
    >(`
          WITH batch_3_ts AS (
              SELECT ts 
              FROM batches 
              WHERE batch_id = 3
          ),
          level_two_referral_points AS (
              SELECT
                  r1.referrer AS level_two_referrer,
                  SUM(
                      CASE
                          WHEN up.batch_id IN (1, 2) AND kyc.ts < (SELECT ts FROM batch_3_ts) THEN up.points
                          ELSE up.points
                      END
                  ) * 0.125 AS referral_points_total_l2
              FROM
                  referrals r1
              JOIN
                  referrals r2 ON r1.referral = r2.referrer  -- Join to get the referrals of referrals (level two)
              LEFT JOIN
                  user_points up ON r2.referral = up.address
              LEFT JOIN
                  batches b ON up.batch_id = b.batch_id
              LEFT JOIN
                  user_kyc kyc ON r1.referrer = kyc.address
              WHERE
                  (b.ts >= kyc.ts AND up.batch_id NOT IN (1, 2))
                  OR
                  (up.batch_id IN (1, 2) AND kyc.ts < (SELECT ts FROM batch_3_ts))
              GROUP BY
                  r1.referrer
          )
          SELECT
              COUNT(*) AS row_count
          FROM
              level_two_referral_points l2rp
          LEFT JOIN
              user_points_public upp ON l2rp.level_two_referrer = upp.address
          WHERE
              ABS((l2rp.referral_points_total_l2 / 1000000.0) - (COALESCE(upp.points_l2, 0) / 1000000.0)) >= 1;
    `);
    const checkLevelTwo = checkLevelTwoQuery.get(null);
    if (checkLevelTwo) {
      console.log(`${checkLevelTwo.row_count} addresses are broken with l2`);
    }

    // if (batch.batch_id === 3) break;
  }
}

main();
