import { Guid } from 'guid-typescript';
import { Database, constants } from 'bun:sqlite';

const test = async () => {
  const db = new Database(
    'mydb.sqlite',
    constants.SQLITE_OPEN_FULLMUTEX |
      constants.SQLITE_OPEN_READWRITE |
      constants.SQLITE_OPEN_CREATE,
  );
  db.exec('PRAGMA busy_timeout = 1000;');
  const insert = db.prepare(
    'INSERT INTO mytest (id, address, name) VALUES ($id, $address, $name)',
  );
  const insertCats = db.transaction((cats) => {
    for (const cat of cats) insert.run(cat);
    return cats.length;
  });
  let x = 0;

  setInterval(() => {
    const count = insertCats([
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
  }, 1);
  setInterval(() => {
    console.log(x);
  }, 1000);
};

test();
