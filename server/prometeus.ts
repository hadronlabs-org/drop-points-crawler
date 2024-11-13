import type { Client } from 'pg';
import { Logger } from 'pino';
import * as client from 'prom-client';

export const getRegistry = (
  config: any,
  db: Client,
  logger: Logger,
): client.Registry<'text/plain; version=0.0.4; charset=utf-8'> => {
  const register = new client.Registry();

  client.collectDefaultMetrics({
    register: register,
  });

  if (Array.isArray(config.watched_addresses)) {
    const gauges = ['points', 'points_l1', 'points_l2'].map(
      (field) =>
        new client.Gauge({
          name: field,
          help: `${field} value for an address`,
          labelNames: ['address', 'label'],
          async collect() {
            try {
              const watchedAddresses = config.watched_addresses.map(
                (v: any) => v.address,
              );
              const placeholders = watchedAddresses
                .map((_: any, index: number) => `$${index + 1}`)
                .join(', ');

              const { rows } = await db.query(
                `SELECT ${field} as points, address 
                 FROM user_points_public 
                 WHERE address IN (${placeholders})`,
                watchedAddresses,
              );

              rows.forEach((row: { address: any; points: string }) => {
                const label = config.watched_addresses.find(
                  (v: any) => v.address === row.address,
                )?.label;
                this.set(
                  { address: row.address, label },
                  parseFloat(row.points),
                );
              });
            } catch (e) {
              logger.error('Error fetching points data:', e);
            }
          },
        }),
    );

    for (const gauge of gauges) {
      register.registerMetric(gauge);
    }
  }
  return register;
};
