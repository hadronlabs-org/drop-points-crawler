import { ZodSchema } from 'zod';
import { Logger } from 'pino';

const validateOnChainContractInfo = (config: any) => {
  if (!config.on_chain_storage) throw new Error('on_chain_storage is required');

  if (!config.on_chain_storage.rpc)
    throw new Error('on_chain_storage.rpc is required');

  if (!config.on_chain_storage.contract)
    throw new Error('on_chain_storage.contract is required');

  if (!config.on_chain_storage.contract)
    throw new Error('on_chain_storage.contract is required');

  if (!config.on_chain_storage.sender)
    throw new Error('on_chain_storage.sender is required');

  if (!config.on_chain_storage.mnemonic)
    throw new Error('on_chain_storage.mnemonic is required');

  if (!config.on_chain_storage.gas)
    throw new Error('on_chain_storage.gas is required');
};

const validatePostgresInfo = (config: any) => {
  if (!config.postgres) throw new Error('postgres is required');

  if (!config.postgres.host) throw new Error('postgres.host is required');

  if (!config.postgres.port) throw new Error('postgres.port is required');

  if (!config.postgres.database)
    throw new Error('postgres.database is required');

  if (!config.postgres.user) throw new Error('postgres.user is required');

  if (!config.postgres.password)
    throw new Error('postgres.password is required');
};

const getValidData = (value: object, schema: ZodSchema, logger: Logger) => {
  try {
    return schema.parse(value);
  } catch (e) {
    logger.warn(
      `Value %s is not valid: %s`,
      JSON.stringify(value),
      (e as Error).message,
    );
  }
};

export { validateOnChainContractInfo, validatePostgresInfo, getValidData };
