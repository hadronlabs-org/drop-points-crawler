import Database from 'bun:sqlite';
import { Logger } from 'pino';

export const insertLinkRecord = (
  db: Database,
  logger: Logger,
  localAddress: string,
  remoteAddress: string,
  network: string,
): boolean => {
  const ts = (Date.now() / 1000) | 0;

  logger.debug(
    'Insert Link for local address %s remote address [%s] %s',
    localAddress,
    network,
    remoteAddress,
  );

  try {
    db.exec(
      'DELETE FROM user_network_link WHERE remote_address = ? AND network = ?',
      [remoteAddress, network],
    );
    const userKycTx = db.prepare(
      'INSERT INTO user_network_link (network, local_address, remote_address, ts) VALUES (?, ?, ?, ?)',
    );
    userKycTx.run(network, localAddress, remoteAddress, ts);
    userKycTx.finalize();
  } catch (e) {
    logger.error('Unexpected error occurred: %s', (e as Error).message);
    throw new Error('Unexpected error occurred', {
      cause: 'INTERNAL_SERVER_ERROR',
    });
  }

  logger.debug(
    'Inserting link for address %s [%s] %s is finished',
    remoteAddress,
    network,
    localAddress,
  );

  return true;
};

export const getLinkRecord = (
  config: any,
  db: Database,
  logger: Logger,
  protocolId: string,
  remoteAddress: string,
  ts: number,
) => {
  logger.trace(
    'Checking linked address for %s [%s] - %s',
    remoteAddress,
    config.protocols[protocolId].linked_address_network,
    ts,
  );
  const row = db
    .query<
      { local_address: string },
      [string, string, number]
    >('SELECT local_address FROM user_network_link WHERE upper(remote_address) = upper(?) AND network = ? AND ts <= ? LIMIT 1')
    .get(
      remoteAddress,
      config.protocols[protocolId].linked_address_network,
      ts,
    );
  logger.trace('Got linked address %o', row);
  if (row) {
    logger.trace('Using linked address %s', row.local_address);
    return row.local_address;
  }
  return null;
};
