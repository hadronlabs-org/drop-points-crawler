import { Client } from 'pg';
import { Guid } from 'guid-typescript';

// Database connection setup
const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'crawler',
  user: 'admin',
  password: 'password',
});

const test = async () => {
  // Connect to PostgreSQL
  await client.connect();

  // Create table if it doesn't exist
  await client.query(`
    CREATE TABLE IF NOT EXISTS mytest (
      id UUID PRIMARY KEY,
      address TEXT NOT NULL,
      name TEXT NOT NULL
    );
  `);

  // Batch insert function
  const insertCats = async (
    cats: { $id: string; $address: string; $name: string }[],
  ) => {
    const query = `
      INSERT INTO mytest (id, address, name)
      VALUES ($1, $2, $3), ($4, $5, $6), ($7, $8, $9), ($10, $11, $12), 
             ($13, $14, $15), ($16, $17, $18), ($19, $20, $21), ($22, $23, $24), 
             ($25, $26, $27)
    `;
    const values = cats.flatMap((cat) => [cat.$id, cat.$address, cat.$name]);

    await client.query(query, values);
    return cats.length;
  };

  let x = 0;

  // Run batch insert every 10ms
  setInterval(async () => {
    const count = await insertCats([
      {
        $id: Guid.create().toString(),
        $address: '1234567890-12345',
        $name: 'Keanu',
      },
      {
        $id: Guid.create().toString(),
        $address: '1234567890-12345',
        $name: 'Salem',
      },
      {
        $id: Guid.create().toString(),
        $address: '1234567890-12345',
        $name: 'Crookshanks',
      },
      {
        $id: Guid.create().toString(),
        $address: '1234567890-12345',
        $name: 'Keanu',
      },
      {
        $id: Guid.create().toString(),
        $address: '1234567890-12345',
        $name: 'Salem',
      },
      {
        $id: Guid.create().toString(),
        $address: '1234567890-12345',
        $name: 'Crookshanks',
      },
      {
        $id: Guid.create().toString(),
        $address: '1234567890-12345',
        $name: 'Keanu',
      },
      {
        $id: Guid.create().toString(),
        $address: '1234567890-12345',
        $name: 'Salem',
      },
      {
        $id: Guid.create().toString(),
        $address: '1234567890-12345',
        $name: 'Crookshanks',
      },
    ]);
    x += count;
  }, 10); // Adjust the interval for appropriate batch size and performance

  setInterval(() => {
    console.log(x);
  }, 1000);
};

// Run the test function
test().catch(console.error);
