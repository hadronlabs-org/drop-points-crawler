import { promises as fsPromises } from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { constants, Database } from 'bun:sqlite';

const OLD_DATABASE = 'recalculate/36-data.db';
const NEW_DATABASE = 'recalculate/new_data.db';
const CHANGES_FILE = 'recalculate/changes.csv';

async function parseCsv(filePath: string): Promise<string[]> {
  const data = await fsPromises.readFile(filePath, 'utf8');

  const lines = data.trim().split('\n');

  const [headerLine, ...dataLines] = lines;
  const headers = headerLine.split(',');

  if (headers.length !== 5) {
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
    `CREATE TABLE IF NOT EXISTS changes (address TEXT, batch_id TEXT, points INTEGER, points_l1 INTEGER, points_l2 INTEGER, PRIMARY KEY(address, batch_id DESC));`,
  );

  const changesLines = await parseCsv(CHANGES_FILE);
  changesLines.forEach((line) => {
    const [address, batchId, points, points_l1, points_l2] = line.split(',');
    newDb.exec(`
          INSERT INTO changes (address, batch_id, points, points_l1, points_l2)
          VALUES ('${address}', '${batchId}', ${points}, ${points_l1}, ${points_l2})
          ON CONFLICT (address, batch_id) DO UPDATE SET
            points = changes.points + excluded.points,
            points_l1 = changes.points_l1 + excluded.points_l1,
            points_l2 = changes.points_l2 + excluded.points_l2
          `);
  });

  newDb.exec(
    `CREATE TABLE IF NOT EXISTS batch_heights (batch_id INTEGER, height INTEGER, ts INTEGER);`,
  );

  const thirdBatchTsQuery = oldDb.query<{ batch_3_ts: number }, null>(
    `SELECT ts AS batch_3_ts FROM batches WHERE batch_id = 3`,
  );
  const thirdBatchTs = thirdBatchTsQuery.all(null)[0].batch_3_ts;

  const thirdBatchHeightQuery = oldDb.query<{ height: number }, null>(
    `SELECT height FROM tasks WHERE batch_id = 3 LIMIT 1`,
  );
  const thirdBatchHeight = thirdBatchHeightQuery.all(null)[0].height;

  const checkLevelOneQueryText = `       
        WITH batch_heights AS (
            SELECT DISTINCT
                t.batch_id AS batch_id,
                t.height AS height,
                b.ts AS ts
            FROM
                tasks t
            JOIN
                batches b
            ON
                t.batch_id = b.batch_id
        ),
      
      ReferrerPoints AS (
          SELECT
              r.referrer AS address,
              SUM(CASE
                  WHEN up.batch_id IN (1, 2) AND r.height <= ${thirdBatchHeight} THEN up.points
                  ELSE 0
              END) AS points_from_earlier_batches,
              SUM(CASE
                  WHEN k.ts <= bh.ts AND r.height <= bh.height THEN up.points
                  ELSE 0
              END) AS total_points
          FROM
              referrals r
          JOIN
              user_points up
          ON
              r.referral = up.address
          JOIN
              batch_heights bh
          ON
              up.batch_id = bh.batch_id
          LEFT JOIN user_kyc k 
            ON k.address = r.referrer
          GROUP BY
              r.referrer
      ),
      
      AdjustedPoints AS (
          SELECT
              rp.address,
              CASE
                  WHEN kyc.ts < ${thirdBatchTs} THEN rp.points_from_earlier_batches + rp.total_points
                  ELSE rp.total_points
              END AS adjusted_points
          FROM
              ReferrerPoints rp
          LEFT JOIN
              user_kyc kyc
          ON
              rp.address = kyc.address
      ),
      
      ReferralPointsPublic AS (
          SELECT
              upp.address AS public_address,
              upp.points_l1
          FROM
              user_points_public upp
      ),
      
      Results AS (
          SELECT
              ap.address,
              (ap.adjusted_points * 0.25) / 1000000 AS referral_points_25_percent,
              CAST(rpp.points_l1 AS REAL) / 1000000 AS points_l1,
              ABS(((ap.adjusted_points * 0.25) / 1000000) - (CAST(rpp.points_l1 AS REAL) / 1000000)) AS diff
          FROM
              AdjustedPoints ap
          LEFT JOIN
              ReferralPointsPublic rpp
          ON
              ap.address = rpp.public_address
      )
      
      SELECT
          count(*) as row_count
      FROM
          Results
      WHERE
          diff >= 1;
    `;

  const checkLevelTwoQueryText = `
      WITH batch_heights AS (
          SELECT DISTINCT
              t.batch_id AS batch_id,
              t.height AS height,
              b.ts AS ts
          FROM
              tasks t
          JOIN
              batches b
          ON
              t.batch_id = b.batch_id
      ),
    
      LevelTwoReferrals AS (
          SELECT
              r1.referrer AS referrer,
              r2.referral AS l2_referral,
              r2.height AS height
          FROM
              referrals r1
          JOIN
              referrals r2
          ON
              r1.referral = r2.referrer
      ),
    
      LevelTwoReferrerPoints AS (
          SELECT
              l2r.referrer AS referrer,
              SUM(CASE
                  WHEN up.batch_id IN (1, 2) AND l2r.height <= ${thirdBatchHeight} THEN up.points
                  ELSE 0
              END) AS points_from_earlier_batches,
              SUM(CASE
                  WHEN k.ts <= bh.ts AND l2r.height <= bh.height THEN up.points
                  ELSE 0
              END) AS total_points
          FROM
              LevelTwoReferrals l2r
          JOIN
              user_points up
          ON
              l2r.l2_referral = up.address
          JOIN
              batch_heights bh
          ON
              up.batch_id = bh.batch_id
          LEFT JOIN
              user_kyc k
          ON
              k.address = l2r.referrer
          GROUP BY
              l2r.referrer
      ),
    
      AdjustedPointsLevelTwo AS (
          SELECT
              rp.referrer as address,
              CASE
                  WHEN kyc.ts < ${thirdBatchTs} THEN rp.points_from_earlier_batches + rp.total_points
                  ELSE rp.total_points
              END AS adjusted_points
          FROM
              LevelTwoReferrerPoints rp
          LEFT JOIN
              user_kyc kyc
          ON
              rp.referrer = kyc.address
      ),
    
      ReferralPointsPublic AS (
          SELECT
              upp.address AS public_address,
              upp.points_l2
          FROM
              user_points_public upp
      ),
    
      Results AS (
          SELECT
              ap.address,
              (ap.adjusted_points * 0.125) / 1000000 AS referral_points_12_5_percent,
              CAST(rpp.points_l2 AS REAL) / 1000000 AS points_l2,
              ABS(((ap.adjusted_points * 0.125) / 1000000) - (CAST(rpp.points_l2 AS REAL) / 1000000)) AS diff
          FROM
              AdjustedPointsLevelTwo ap
          LEFT JOIN
              ReferralPointsPublic rpp
          ON
              ap.address = rpp.public_address
      )
    
      SELECT
          count(*) as row_count
      FROM
          Results
      WHERE
          diff >= 1;
    `;

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

    const checkLevelOneQuery = newDb.query<{ row_count: number }, [null]>(
      checkLevelOneQueryText,
    );
    const checkLevelOne = checkLevelOneQuery.get(null);
    if (checkLevelOne) {
      console.log(`${checkLevelOne.row_count} addresses are broken with l1`);
    }

    const checkLevelTwoQuery = newDb.query<{ row_count: number }, [null]>(
      checkLevelTwoQueryText,
    );
    const checkLevelTwo = checkLevelTwoQuery.get(null);
    if (checkLevelTwo) {
      console.log(`${checkLevelTwo.row_count} addresses are broken with l2`);
    }

    // if (batch.batch_id == 4) break;
  }

  console.log(checkLevelOneQueryText);
  console.log(checkLevelTwoQueryText);
}

main();
