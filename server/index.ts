import { createExpressMiddleware } from '@trpc/server/adapters/express';
import toml from 'toml';
import fs from 'fs';
import express from 'express';
import { publicProcedure, router } from './trpc';

import { getDroplets } from './controllers/getDroplets';
import { postKyc } from './controllers/postKyc';
import { getLogger } from '../lib/logger';
import {
  tRPCGetDropletsRequestSchema,
  tRPCGetDropletsResponseSchema,
} from '../types/tRPC/tRPCGetDroplets';
import {
  tRPCPostKycRequestSchema,
  tRPCPostKycResponseSchema,
} from '../types/tRPC/tRPCPostKyc';
import { connect } from '../db';
import { Command } from 'commander';

const expressApp = express();

const program = new Command();
program.option('--config <config>', 'Config file path', 'config.toml');

const config = toml.parse(
  fs.readFileSync(program.getOptionValue('config'), 'utf-8'),
);
if (!config.log_level) {
  throw new Error('LOG_LEVEL environment variable not set');
}
const logger = getLogger(config);
const db = connect(false, config, logger);

const appRouter = router({
  getDroplets: publicProcedure
    .input(tRPCGetDropletsRequestSchema)
    .output(tRPCGetDropletsResponseSchema)
    .query(getDroplets(db, logger)),
  postKyc: publicProcedure
    .input(tRPCPostKycRequestSchema)
    .output(tRPCPostKycResponseSchema)
    .mutation(postKyc(db, logger)),
});

export type AppRouter = typeof appRouter;

expressApp.use(
  '/server',
  createExpressMiddleware({
    router: appRouter,
  }),
);

expressApp.get('/uptime', (_req, res) => {
  res.send((process.uptime() * 1000).toString());
});

const port = process.env.PORT || 3000;

expressApp.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
