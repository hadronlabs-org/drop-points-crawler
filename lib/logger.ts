import pino, { Logger } from 'pino';
export const getLogger = (config: any): Logger<never> =>
  pino({
    level: config.log_level || 'info',
    ...(process.env.LOG_FORMAT === 'json'
      ? {}
      : {
          transport: {
            target: process.env.LOG_FORMAT || 'pino-pretty',
          },
        }),
  });
