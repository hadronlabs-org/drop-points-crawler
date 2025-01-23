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
    db.exec('DELETE FROM user_network_link WHERE local_address = ?', [
      localAddress,
    ]);
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
