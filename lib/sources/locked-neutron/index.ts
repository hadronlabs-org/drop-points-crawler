import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { queryContractOnHeight } from '../../query';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { SourceInterface } from '../../../types/sources/source';
import { Logger } from 'pino';

export default class LockedNeutronSource implements SourceInterface {
  rpc: string;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { contract: string }> = {};
  sourceName: string;
  client: Tendermint34Client | undefined;

  getClient = async () => {
    if (!this.client) {
      this.client = await Tendermint34Client.connect(this.rpc);
    }
    return this.client;
  };

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
    this.paginationLimit = parseInt(params.pagination_limit || '10', 10);
  }

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [assetId, asset] of Object.entries(this.assets)) {
      const out: Record<string, number> = {};
      const client = await this.getClient();
      const blockTs =
        ((await client.block(height)).block.header.time.getTime() / 1000) | 0;
      let startAfter = undefined;
      while (true) {
        const query: any = {
          extension: {
            msg: {
              all_tokens_with_info: {
                start_after: startAfter,
                limit: this.paginationLimit,
              },
            },
          },
        };
        const tokens = await queryContractOnHeight<
          [
            string,
            {
              owner: string;
              extension: {
                dntrn: { dntrn_locked: string; unlock_date: string };
              };
            },
          ][]
        >(await this.getClient(), asset.contract, height, query);
        if (tokens.length === 0) {
          break;
        }
        startAfter = tokens[tokens.length - 1][0];
        for (const [, info] of tokens) {
          if (!info.extension.dntrn) {
            continue;
          }
          const amount = parseInt(info.extension.dntrn.dntrn_locked, 10);
          if (
            amount > 0 &&
            Number(info.extension.dntrn.unlock_date) > blockTs
          ) {
            const multiplier = multipliers[assetId] || 1;
            const adjustedAmount = Math.floor(amount * multiplier);
            out[info.owner] = (out[info.owner] || 0) + adjustedAmount;
          }
        }
        cb(
          Object.entries(out).map(([address, balance]) => ({
            address,
            balance: balance.toString(),
            asset: assetId,
          })),
        );
      }
    }
    this.logger.debug(
      'Finished fetching all balances for %s source',
      this.sourceName,
    );
  };

  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    const status = await client.status();
    return status.syncInfo.latestBlockHeight;
  };
}
