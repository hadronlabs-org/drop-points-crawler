import type Database from 'bun:sqlite';
import * as client from 'prom-client';

export const getRegistry = (
  config: any,
  db: Database,
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
          collect() {
            const data = db
              .query<
                {
                  points: string;
                  address: string;
                },
                null
              >(
                `SELECT ${field} points, address FROM user_points_public WHERE address IN ('${config.watched_addresses.map((v: any) => v.address).join("','")}')`,
              )
              .all(null);
            data.forEach((row) => {
              const label = config.watched_addresses.find(
                (v: any) => v.address === row.address,
              )?.label;
              this.set({ address: row.address, label }, parseFloat(row.points));
            });
          },
        }),
    );
    for (const gauge of gauges) {
      register.registerMetric(gauge);
    }
  }
  return register;
};
