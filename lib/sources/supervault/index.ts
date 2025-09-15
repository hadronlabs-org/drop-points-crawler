import BankModuleSource from '../bank-module';

import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { queryContractOnHeight } from '../../query';

type AssetsRecord = { contract: string; denom: string; base_denom: string };
export default class SupervaultSource extends BankModuleSource<AssetsRecord> {
  getPoolRate = async (
    baseDenom: string,
    asset: { contract: string; denom: string },
    height: number,
  ): Promise<number> => {
    this.logger.trace(
      'Fetching pool rate for %o at height %d - %s',
      asset.contract,
      height,
      baseDenom,
    );
    const client = await this.getClient();
    const configRes = await queryContractOnHeight<{
      pair_data: {
        token_0: { denom: string; decimals: number };
        token_1: { denom: string; decimals: number };
      };
    }>(client, asset.contract, height, {
      get_config: {},
    });
    let index = -1;
    if (configRes.pair_data.token_0.denom === baseDenom) {
      index = 0;
    }
    if (configRes.pair_data.token_1.denom === baseDenom) {
      index = 1;
    }
    if (index === -1) {
      this.logger.error(
        'Denom %s not found in pair %o',
        asset.denom,
        configRes.pair_data,
      );
      process.exit(-1);
    }
    this.logger.trace('Found denom %s at index %d', baseDenom, index);

    const liqRes = await queryContractOnHeight<number[]>(
      client,
      asset.contract,
      height,
      {
        simulate_withdraw_liquidity: {
          amount: '99999999999',
        },
      },
    );
    this.logger.debug('Got liquidity response %o', liqRes);
    if (liqRes.length !== 2) {
      this.logger.error('Invalid liquidity response %o', liqRes);
      process.exit(-1);
    }
    const rate = liqRes[index] / 99999999999;
    this.logger.debug(
      'Got pool rate for %s at height %d: %d',
      asset.denom,
      height,
      rate,
    );
    if (rate === 0) {
      this.logger.error('Zero rate for %o', asset);
      process.exit(-1);
    }
    return rate;
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    this.logger.debug('Supervault getUsersBalances %d', height);
    for (const [assetId, asset] of Object.entries(this.assets)) {
      let nextKey: undefined | Uint8Array = undefined;
      const rate = await this.getPoolRate(asset.base_denom, asset, height);

      do {
        const { results, nextKey: newNextKey } = await this.getDenomBalances(
          asset,
          multipliers[assetId] || 1,
          height,
          nextKey,
        );
        cb(
          Object.entries(results).map(([address, balance]) => ({
            address,
            balance: (
              (BigInt(balance) * BigInt(Math.round(rate * 10 ** 12))) /
              BigInt(10 ** 12) /
              BigInt(10)
            ).toString(),
            asset: assetId,
          })),
        );
        this.logger.debug('Got %d balances', Object.keys(results).length);
        this.logger.debug('Got next key %s', newNextKey);
        if (!newNextKey) {
          break;
        }
        nextKey = newNextKey;
      } while (nextKey !== undefined && nextKey.length > 0);
      this.logger.debug(
        'Finished fetching balances for %s source',
        this.sourceName,
      );
    }
  };
}
