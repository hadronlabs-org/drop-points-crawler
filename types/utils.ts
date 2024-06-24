import { Logger } from 'pino';
import { ZodSchema } from 'zod';

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

export { getValidData };
