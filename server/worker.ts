import { Database, constants } from 'bun:sqlite';
declare let self: Worker;

const db = new Database(
  'mydb.sqlite',
  constants.SQLITE_OPEN_FULLMUTEX |
    constants.SQLITE_OPEN_READWRITE |
    constants.SQLITE_OPEN_CREATE,
);
db.exec('PRAGMA busy_timeout = 4000;');

const insert = db.prepare(
  'INSERT INTO mytest (id, address, name) VALUES ($id, $address, $name)',
);

self.onmessage = (event: MessageEvent) => {
  try {
    insert.run(event.data);
  } catch (e) {
    postMessage({ error: e });
  }
};
