import BankModuleSource from '../bank-module';

import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { queryContractOnHeight } from '../../query';

type AssetsRecord = Record<
  string,
  { denom: string; vault: string; hub: string }
>;
export default class AmuletSource extends BankModuleSource<AssetsRecord> {
  async getUserDebt(
    hub: string,
    vault: string,
    address: string,
    height: number,
  ): Promise<number> {
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
    return parseInt(res.debt);
  }

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    this.logger.debug('AmuletSource getUsersBalances');
    for (const [assetId, asset] of Object.entries(this.assets)) {
      this.logger.debug('PryzmSource getUsersBalances asset %s', assetId);
      let nextKey: undefined | Uint8Array = undefined;
      do {
        // result in vault tokens balances
        const { results, nextKey: newNextKey } = await this.getDenomBalances(
          { denom: asset.denom },
          multipliers[assetId] || 1,
          height,
          nextKey,
        );
        this.logger.debug('Got next key %s', newNextKey);
        const toInsert = [];
        for (const [address, balance] of Object.entries(results)) {
          //   cb(address, assetId, balance);
          const debt = await this.getUserDebt(
            asset.hub,
            asset.vault,
            address,
            height,
          );
          if (debt > 0) {
            toInsert.push({ address, asset: assetId, balance });
          }
        }
        cb(toInsert);
        if (!newNextKey) {
          break;
        }
        nextKey = newNextKey;
      } while (nextKey !== undefined && nextKey.length > 0);
    }
  };
}
