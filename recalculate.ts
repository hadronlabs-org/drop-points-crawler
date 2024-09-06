import { promises as fsPromises } from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { constants, Database } from 'bun:sqlite';

const OLD_DATABASE = 'recalculate/old_data.db';
const NEW_DATABASE = 'recalculate/new_data.db';
const CHANGES_FILE = 'recalculate/changes.csv';

async function parseCsvToMap(
  filePath: string,
): Promise<Record<number, [{ address: string; points: number }]>> {
  const data = await fsPromises.readFile(filePath, 'utf8');

  const lines = data.trim().split('\n');

  const [headerLine, ...dataLines] = lines;
  const headers = headerLine.split(',');

  if (headers.length !== 3) {
    throw new Error('CSV file does not have correct number of columns');
  }

  const result: Record<number, [{ address: string; points: number }]> = {};

  for (const line of dataLines) {
    const [address, batch_id, points] = line.split(',');
    (result[parseInt(batch_id, 10)] =
      result[parseInt(batch_id, 10)] || []).push({
      address,
      points: parseInt(points, 10),
    });
  }

  return result;
}

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
      execSync(finishCommand);
    } catch (error) {
      console.error(`Error executing finish command: ${error}`);
    }

    const batchChangesQuery = newDb.query<
      {
        address: string;
        batch_id: number;
        points: number;
      },
      [number]
    >('SELECT * FROM changes WHERE batch_id = ?');
    const batchChanges = batchChangesQuery.all(batch.batch_id);
    if (batchChanges) {
      batchChanges.forEach((change) => {
        newDb.exec(`
          INSERT INTO user_points (batch_id, address, asset_id, points)
          VALUES (${batch.batch_id}, '${change.address}', 'dATOM', ${change.points})
          ON CONFLICT (batch_id, address, asset_id) DO UPDATE SET
            points = user_points.points + excluded.points
          `);
      });
      console.log(`${batchChanges.length} addresses were updated manually`);
    }
  }
}

main();
