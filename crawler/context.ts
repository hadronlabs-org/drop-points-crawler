import fs from 'fs';
import toml from 'toml';
import { connect } from '../db';
import { getLogger } from '../lib/logger';
import { validateOnChainContractInfo } from '../lib/validations/config';
import { Command } from 'commander';

let cachedContext: null | {
  config: any;
  logger: ReturnType<typeof getLogger>;
  db: ReturnType<typeof connect>;
} = null;

export function getContext(program: Command) {
  if (cachedContext) return cachedContext;

  const globalOptions = program.opts();

  const config = toml.parse(fs.readFileSync(globalOptions.config, 'utf-8'));

  if (globalOptions.log_level) {
    config.log_level = globalOptions.log_level;
  }

  if (!config.log_level) {
    throw new Error('LOG_LEVEL not set in config or CLI');
  }

  validateOnChainContractInfo(config);

  const logger = getLogger(config);
  const db = connect(true, config, logger);

  cachedContext = { config, logger, db };
  return cachedContext;
}
