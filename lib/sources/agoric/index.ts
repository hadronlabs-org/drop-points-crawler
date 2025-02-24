import { SourceInterface } from '../../../types/sources/source';
import {
  QueryChildrenRequest,
  QueryChildrenResponse,
  QueryDataRequest,
  QueryDataResponse,
} from '@agoric/cosmic-proto/agoric/vstorage/query.js';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { Logger } from 'pino';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { AgoricWalletInfo } from '../../../types/sources/agoricWalletInfo';
import { UserBalance } from '../../../types/sources/userBalance';
import pLimit from 'p-limit';

export default class AgoricSource implements SourceInterface {
  client: Tendermint34Client | undefined;
  rpc: string;
  logger: Logger<never>;
  concurrencyLimit: number;

  constructor(rpc: string, logger: Logger<never>, params: any) {
    this.logger = logger;
    this.rpc = rpc;
    this.concurrencyLimit = parseInt(params.concurrency_limit || '3', 10);
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

  getWallets = async (height: number) => {
    const path = '/agoric.vstorage.Query/Children';
    const request = {
      path: 'published.wallet',
    };
    const data = QueryChildrenRequest.encode(request).finish();

    const client = await this.getClient();
    const response = await client.abciQuery({ path, data, height });
    if (response.code !== 0) {
      throw new Error(
        `Tendermint query error while fetching agoric wallets: ${response.log} Code: ${response.code}`,
      );
    }

    return QueryChildrenResponse.decode(response.value).children;
  };

  getWalletInfo = async (wallet: string, height: number) => {
    const path = '/agoric.vstorage.Query/Data';
    const request = {
      path: `published.wallet.${wallet}.current`,
    };
    const data = QueryDataRequest.encode(request).finish();

    const client = await this.getClient();
    const response = await client.abciQuery({ path, data, height });
    if (response.code !== 0) {
      throw new Error(
        `Tendermint query error while fetching agoric wallet ${wallet} info: ${response.log} Code: ${response.code}`,
      );
    }

    const walletInfo = JSON.parse(
      QueryDataResponse.decode(response.value).value,
    );
    walletInfo.values = walletInfo.values
      .map((v: any) => JSON.parse(v))
      .map((v: any) => JSON.parse(v.body.replace(/^#/, '')));

    return walletInfo;
  };

  findAssetVault = (walletInfo: AgoricWalletInfo, assetId: string) => {
    if (!walletInfo || !walletInfo.values || walletInfo?.values?.length === 0) {
      return null;
    }

    const vaults = new Map<string, number>();
    for (const one of walletInfo.values) {
      if (one.liveOffers && one.liveOffers.length > 0) {
        for (const offer of one.liveOffers) {
          const item = offer[1];
          if (
            'callPipe' in item.invitationSpec &&
            item.invitationSpec.callPipe[0][1][0] ===
              `$0.Alleged: ${assetId} brand`
          ) {
            vaults.set(
              item.id,
              parseInt(item.proposal.give.Collateral.value, 10),
            );
          }
        }
      }
    }
    return Array.from(vaults.values()).reduce((a, b) => a + b, 0);
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    const withConcurrencyLimit = pLimit(4);
    const userBalanceArrays = await Promise.all(
      Object.entries(multipliers).map(([assetId, multiplier]) =>
        withConcurrencyLimit(async () => {
          const result: UserBalance[] = [];
          const wallets = await this.getWallets(height);
          for (const wallet of wallets) {
            const walletInfo = await this.getWalletInfo(wallet, height);
            const assetVault = this.findAssetVault(walletInfo, assetId);
            if (assetVault) {
              result.push({
                address: wallet,
                balance: String(assetVault * multiplier),
                asset: assetId,
              });
            }
          }
          return result;
        }),
      ),
    );

    cb(userBalanceArrays.flat());
  };
}
