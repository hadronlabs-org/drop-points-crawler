import { Database } from 'bun:sqlite';

const test = async () => {
  const db = new Database('mydb.sqlite');
  db.exec('CREATE TABLE mytest (id TEXT, address TEXT, name TEXT)');
  db.exec('CREATE INDEX IF NOT EXISTS mytest_id ON mytest (id)');
};

test();
