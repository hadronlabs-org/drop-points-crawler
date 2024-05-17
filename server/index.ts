import { publicProcedure, router } from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const appRouter = router({
  getKeys: publicProcedure.mutation(async () => {}),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});
const port = process.env.PORT || 3000;

server.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
});
