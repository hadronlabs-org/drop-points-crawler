import { Logger } from 'pino';
import { SourceInterface } from '../../../types/sources/source';
import { Tendermint37Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';

type MyCoin = { denom: string; amount: number };

export default class DemexSource implements SourceInterface {
  rpc: string;
  insightsApi: string;
  logger: Logger<never>;
  assets: Record<string, { denom: string }> = {};
  sourceName: string;
  client: Tendermint37Client | undefined;

  constructor(rpc: string, logger: Logger<never>, params: any) {
    this.logger = logger;

    if (!params.source) {
      throw new Error('No source name configured in params');
    }
    this.sourceName = params.source;

    if (!params.assets) {
      throw new Error('No assets configured in params');
    }
    this.assets = params.assets;
    this.rpc = rpc;
    this.insightsApi = params.insights_api;
    logger.info('Demex source initialized');
  }
  getClient = async () => {
    if (!this.client) {
      this.client = await Tendermint37Client.connect(this.rpc);
    }
    return this.client;
  };
  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    this.logger.info('Getting status for demex');
    try {
      const status = await client.status();
      return status.syncInfo.latestBlockHeight;
    } catch (e) {
      this.logger.error('Error getting status', e);
      throw e;
    }
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    this.logger.info(
      'Getting users balances for demex at height: %s, multipliers: %o',
      height,
      multipliers,
    );
    this.logger.debug(
      'Fetching users balances from: %s',
      `${this.insightsApi}/cdp/snapshot?blockHeight=${height}&limit=9999999`,
    );
    const res = await fetch(
      `${this.insightsApi}/cdp/snapshot?blockHeight=${height}&limit=9999999`,
    );
    if (!res.ok) {
      this.logger.error('Error fetching users balances', res);
      throw new Error('Error fetching users balances');
    }
    const data = (await res.json()) as {
      result: {
        entries: {
          address: string;
          borrowed: MyCoin[];
          supplied: MyCoin[];
          collateral: MyCoin[];
        }[];
      };
    };
    const out = [];
    for (const entry of data.result.entries) {
      const { address } = entry;
      if (address === 'swth1hdga6p84cpc6gulk9ruxy5w0vpfx9dv8wgkzk6') {
        this.logger.debug('DATA: %o', entry);
      }
      for (const [asset, multiplier] of Object.entries(multipliers)) {
        const assetParams = this.assets[asset];
        const supplied = entry.supplied.find(
          (c) => c.denom === assetParams.denom,
        );
        if (!supplied) {
          continue;
        }
        const balance =
          supplied.amount *
          (entry.borrowed.filter((o) => o.amount > 0).length > 0
            ? multiplier
            : 1) *
          1_000_000;
        if (balance > 0) {
          out.push({
            address,
            asset,
            balance: balance.toString(),
          });
        }
      }
    }
    this.logger.debug('Received users: %d', out.length);
    this.logger.trace('Users balances for demex: %o', out);
    cb(out);
  };
}
