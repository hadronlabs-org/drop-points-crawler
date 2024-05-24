import pino from 'pino';
export const logger = pino({
  level: process.env.LOG_LEVEL,
  ...(process.env.LOG_FORMAT === 'json'
    ? {}
    : {
        transport: {
          target: process.env.LOG_FORMAT || 'pino-pretty',
        },
      }),
});
