/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable require-await */
import { Logger } from 'pino';
import { NFTSource } from '../../../types/sources/nft';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserTokens } from '../../../types/sources/cbOnUserTokens';

export class NFTBase<A = { multiplier: number }> implements NFTSource {
  logger: Logger<never>;
  contract: string;
  client: Tendermint34Client | undefined;
  rpc: string;
  assets: Record<string, { multiplier: number } & A>;
  sourceName: string;
  type = 'nft';

  constructor(rpc: string, logger: Logger<never>, params: any) {
    if (!params.assets) {
      throw new Error('No assets configured in params');
    }
    if (!params.source) {
      throw new Error('No source name configured in params');
    }
    if (!params.contract) {
      throw new Error('No contract name configured in params');
    }
    this.assets = params.assets;
    this.contract = params.contract;
    this.sourceName = params.source;
    this.rpc = rpc;
    this.logger = logger;
  }

  getClient = async () => {
    if (!this.client) {
      this.client = await Tendermint34Client.connect(this.rpc);
    }
    return this.client;
  };

  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    const status = await client.status();
    return status.syncInfo.latestBlockHeight;
  };

  getAllTokens = async (
    _contract: string,
    _height: number,
  ): Promise<string[]> => {
    throw new Error('Method not implemented.');
  };

  getUsersTokens = async (
    _height: number,
    _multipliers: Record<string, number>,
    _cb: CbOnUserTokens,
  ): Promise<void> => {
    throw new Error('Method not implemented.');
  };
}
