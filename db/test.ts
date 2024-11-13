import { Client } from 'pg';

const test = async () => {
  const db = new Client({
    host: 'localhost',
    port: 5432,
    database: 'your_database',
    user: 'your_username',
    password: 'your_password',
  });

  await db.connect();

  try {
    const query = 'SELECT count(1) FROM mytest';
    const res = await db.query(query);
    console.log(res.rows);
  } catch (error) {
    console.error('Error executing query', error);
  } finally {
    await db.end();
  }
};

test();
