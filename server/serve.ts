const workers = [
  new Worker('/Users/ratik/b_p/drop-points-crawler/server/worker.ts', {
    smol: true,
  }),
  new Worker('/Users/ratik/b_p/drop-points-crawler/server/worker.ts', {
    smol: true,
  }),
  new Worker('/Users/ratik/b_p/drop-points-crawler/server/worker.ts', {
    smol: true,
  }),
  new Worker('/Users/ratik/b_p/drop-points-crawler/server/worker.ts', {
    smol: true,
  }),
  new Worker('/Users/ratik/b_p/drop-points-crawler/server/worker.ts', {
    smol: true,
  }),
  new Worker('/Users/ratik/b_p/drop-points-crawler/server/worker.ts', {
    smol: true,
  }),
];
const workerLength = workers.length;

for (const worker of workers) {
  worker.onmessage = (event) => {
    console.log(event.data);
  };
}

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const worker = workers[Math.floor(Math.random() * workerLength)];
    worker.postMessage({
      $id: Math.random().toString(),
      $address: '1234567890-12345',
      $name: 'Keanu',
    });
    return new Response('test');
  },
});
