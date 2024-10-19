import BankModuleSource from '../bank-module';

import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { getContractStateKeys, queryContractOnHeight } from '../../query';

type AssetsRecord = { cap: string; vault: string; hub: string };
export default class AmuletSource extends BankModuleSource<AssetsRecord> {
  async getUserPosition(
    hub: string,
    vault: string,
    address: string,
    height: number,
  ): Promise<string | null> {
    this.logger.debug(
      'AmuletSource getUserDebt %s %s %s',
      vault,
      address,
      height,
    );
    const res = await queryContractOnHeight<{
      collateral: string;
      debt: string;
      credit: string;
      sum_payment_ratio: string;
      vault_loss_detected: boolean;
    }>(await this.getClient(), hub, height, {
      position: {
        account: address,
        vault,
      },
    });
    this.logger.debug('AmuletSource getUserDebt %o', JSON.stringify(res));
    return parseInt(res.debt) > 0 ? res.collateral : null;
  }

  getAccounts = async (
    capContract: string,
    vaultContract: string,
    height: number,
  ): Promise<string[]> => {
    let nextKey: Uint8Array | undefined = undefined;
    const users: string[] = [];
    while (true) {
      const out = await getContractStateKeys(
        await this.getClient(),
        height,
        capContract,
        nextKey,
      );
      nextKey = out.pagination?.nextKey;
      this.logger.debug('Next key: %s', nextKey);
      const accounts = out.models
        .map((x) => Buffer.from(x.key).toString())
        .filter((x) =>
          x.startsWith(
            'deposit_cap::individual_deposit_amount' + vaultContract,
          ),
        )
        .map((x) => x.replace(/.*(neutron[0-9a-z]+):$/gi, '$1'));

      users.push(...accounts);
      this.logger.info('Found %d accounts', accounts.length);
      if (!nextKey?.length) {
        this.logger.info('No more keys, breaking');
        break;
      }
    }
    return users;
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    this.logger.debug('AmuletSource getUsersBalances %d', height);
    for (const [assetId, asset] of Object.entries(this.assets)) {
      this.logger.debug('AmuletSource getUsersBalances asset %s', assetId);
      const users = await this.getAccounts(asset.cap, asset.vault, height);
      this.logger.trace('AmuletSource getUsersBalances users %o', users);
      const toInsert = [];
      for (const address of users) {
        const balance = await this.getUserPosition(
          asset.hub,
          asset.vault,
          address,
          height,
        );
        if (balance) {
          toInsert.push({
            address,
            asset: assetId,
            balance: (
              (BigInt(balance) *
                BigInt(Math.round(multipliers[assetId] * 10000))) /
              BigInt(10000)
            ).toString(),
          });
        }
      }
      cb(toInsert);
    }
  };
}
