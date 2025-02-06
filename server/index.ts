import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import toml from 'toml';
import fs from 'fs';

import { connect } from '../db';
import { Command } from 'commander';

import { publicProcedure, router } from './trpc';
import { getRegistry } from './prometeus';

import { getDroplets } from './controllers/getDroplets';
import { getReferralCode } from './controllers/getReferralCode';
import { getReferrer } from './controllers/getReferrer';
import { getReferrals } from './controllers/getReferrals';
import { getRules } from './controllers/getRules';
import { getStakerStatus } from './controllers/getStakerStatus';
import { getLogger } from '../lib/logger';
import { getKVData } from './controllers/getKVData';

import { postKVData } from './controllers/postKVData';
import { postLink } from './controllers/postLink';
import { postKyc } from './controllers/postKyc';

import {
  tRPCGetDropletsRequestSchema,
  tRPCGetDropletsResponseSchema,
} from '../types/tRPC/tRPCGetDroplets';
import {
  tRPCPostKycRequestSchema,
  tRPCPostKycResponseSchema,
} from '../types/tRPC/tRPCPostKyc';
import {
  tRPCGetReferralCodeRequestSchema,
  tRPCGetReferralCodeResponseSchema,
} from '../types/tRPC/tRPCGetReferralCode';
import {
  tRPCGetReferrerRequestSchema,
  tRPCGetReferrerResponseSchema,
} from '../types/tRPC/tRPCGetReferrer';
import {
  tRPCGetReferralsRequestSchema,
  tRPCGetReferralsResponseSchema,
} from '../types/tRPC/tRPCGetReferrals';
import { tRPCGetRulesResponseSchema } from '../types/tRPC/tRPCGetRules';
import {
  tRPCPostKVDataRequestSchema,
  tRPCPostKVDataResponseSchema,
} from '../types/tRPC/tRPCPostKVData';
import {
  tRPCGetKVDataRequestSchema,
  tRPCGetKVDataResponseSchema,
} from '../types/tRPC/tRPCGetKVData';
import {
  tRPCGetStakerStatusRequestSchema,
  tRPCGetStakerStatusResponseSchema,
} from '../types/tRPC/tRPCGetStakerStatus';
import {
  tRPCPostLinkRequestSchema,
  tRPCPostLinkResponseSchema,
} from '../types/tRPC/tRPCPostLink';
import {
  tRPCGetNFTCollectionResponseSchema,
  tRPCGetNFTCollectionsRequestSchema,
} from '../types/tRPC/tRPCGetNFTCollections';
import { getNFTCollections } from './controllers/getNFTCollections';
import {
  tRPCGetLinksRequestSchema,
  tRPCGetLinksResponseSchema,
} from '../types/tRPC/tRPCGetLinks';
import { getLinks } from './controllers/getLinks';
import { getRankTable } from './controllers/getRankTable';
import {
  tRPCGetRankTableRequestSchema,
  tRPCGetRankTableResponseSchema,
} from '../types/tRPC/tRPCGetRankTable';

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
const db = connect(true, config, logger);

const appRouter = router({
  getDroplets: publicProcedure
    .input(tRPCGetDropletsRequestSchema)
    .output(tRPCGetDropletsResponseSchema)
    .query(getDroplets(db, logger)),
  postKyc: publicProcedure
    .input(tRPCPostKycRequestSchema)
    .output(tRPCPostKycResponseSchema)
    .mutation(postKyc(db, logger)),
  postKVData: publicProcedure
    .input(tRPCPostKVDataRequestSchema)
    .output(tRPCPostKVDataResponseSchema)
    .mutation(postKVData(db, logger)),
  postLink: publicProcedure
    .input(tRPCPostLinkRequestSchema)
    .output(tRPCPostLinkResponseSchema)
    .mutation(postLink(db, logger)),
  getKVData: publicProcedure
    .input(tRPCGetKVDataRequestSchema)
    .output(tRPCGetKVDataResponseSchema)
    .query(getKVData(db, logger)),
  getReferralCode: publicProcedure
    .input(tRPCGetReferralCodeRequestSchema)
    .output(tRPCGetReferralCodeResponseSchema)
    .query(getReferralCode(db, logger)),
  getReferrer: publicProcedure
    .input(tRPCGetReferrerRequestSchema)
    .output(tRPCGetReferrerResponseSchema)
    .query(getReferrer(db, logger)),
  getStakerStatus: publicProcedure
    .input(tRPCGetStakerStatusRequestSchema)
    .output(tRPCGetStakerStatusResponseSchema)
    .query(getStakerStatus(config, logger)),
  getReferrals: publicProcedure
    .input(tRPCGetReferralsRequestSchema)
    .output(tRPCGetReferralsResponseSchema)
    .query(getReferrals(db, config, logger)),
  getRules: publicProcedure
    .output(tRPCGetRulesResponseSchema)
    .query(getRules(db, logger)),
  getNFTCollections: publicProcedure
    .input(tRPCGetNFTCollectionsRequestSchema)
    .output(tRPCGetNFTCollectionResponseSchema)
    .query(getNFTCollections(db, logger)),
  getLinks: publicProcedure
    .input(tRPCGetLinksRequestSchema)
    .output(tRPCGetLinksResponseSchema)
    .query(getLinks(db, logger)),
  getRankTable: publicProcedure
    .input(tRPCGetRankTableRequestSchema)
    .output(tRPCGetRankTableResponseSchema)
    .query(getRankTable(db, logger)),
});

const port = Number(process.env.PORT) || 3000;

const register = getRegistry(config, db);

expressApp.get('/metrics', async (req, res, next) => {
  res.setHeader('Content-type', register.contentType);
  res.send(await register.metrics());
  next();
});

expressApp.use((req, res, next) => {
  if (req.url !== '/metrics') {
    if (config.api_key) {
      if (req.headers['authorization'] !== config.api_key) {
        res.status(401).send('Unauthorized');
      }
    } else if (req.headers['authorization']) {
      logger.info(
        'Authorization header is not configured but set: %s',
        req.headers['authorization'],
      );
    }
    next();
  }
});

expressApp.use(
  '/',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  }),
);

expressApp.listen(port, () => {
  logger.debug(`Server is running on http://localhost:${port}`);
});
