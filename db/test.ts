import { Database } from 'bun:sqlite';

const test = async () => {
  const db = new Database('mydb.sqlite');
  const query = db.query('SELECT count(1) FROM mytest');
  const results = query.all();
  console.log(results);
};

test();
