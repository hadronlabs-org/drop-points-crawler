import { Logger } from 'pino';
import Database from 'bun:sqlite';
import { Comet38Client } from '@cosmjs/tendermint-rpc';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';

export const updateReferralData = async (
  db: Database,
  config: any,
  logger: Logger<never>,
): Promise<void> => {
  logger.info('Updating KYC data');
  const height =
    db
      .query<
        { height: number },
        null
      >(`SELECT COALESCE(MAX(height), 0) height FROM referrals`)
      .get(null)?.height || 0;
  logger.debug('Last Referral data at height %s', height);
  const client = await CosmWasmClient.connect(config.referral.rpc);
  const cometClient = await Comet38Client.connect(config.referral.rpc);
  const query = {
    order_by: 'desc',
    query: `execute._contract_address='${config.referral.core_contract}'`,
  };
  logger.debug('Query %o', query);
  const data = await cometClient.txSearchAll(query);
  logger.debug('Found %d txs', data.totalCount);
  const out: { ref: string; receiver: string; height: number }[] = [];
  for (const tx of data.txs) {
    if (height > tx.height) {
      break;
    }
    const hash = Buffer.from(tx.hash).toString('hex').toLocaleUpperCase();
    logger.debug('Processing tx at %s - %s', tx.height, hash);
    const wasmtx = await client.getTx(hash);
    const wasmEvents = wasmtx?.events.find(
      (e) => e.type === 'wasm-crates.io:drop-staking__drop-core-execute-bond',
    );
    const ref = wasmEvents?.attributes.find((e) => e.key === 'ref')?.value;
    const receiver = wasmEvents?.attributes.find(
      (e) => e.key === 'receiver',
    )?.value;
    if (ref && receiver) {
      out.push({
        ref,
        receiver,
        height: tx.height,
      });
    }
  }
  logger.debug('Adding %d KYC data', out.length);
  for (const one of out) {
    logger.debug('Adding KYC data %o', one);
    const c = db
      .query<
        { count: number },
        [string]
      >('SELECT COUNT(*) count FROM referrals WHERE referral = ?')
      .get(one.receiver);
    if (c && c.count > 0) {
      logger.debug('Referral already exists %o', one.receiver);
      continue;
    }
    db.exec<[string, string, number, number]>(
      'INSERT INTO referrals (referrer, referral, height, ts) VALUES (?, ?, ?, ?)',
      [one.ref, one.receiver, one.height, (new Date().getTime() / 1000) | 0],
    );
  }
};
