import {
  QueryTotalSupplyRequest,
  QueryTotalSupplyResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import BankModuleSource from '../bank-module';
import { PageRequest } from './pryzmjs/cosmos/base/query/v1beta1/pagination';
import {
  QueryAllAssetPoolStateRequest,
  QueryAllUserStakeStateResponse,
} from './pryzmjs/pryzm/ystaking/v1/query';
import { PageRequest as PageRequestCS } from 'cosmjs-types/cosmos/base/query/v1beta1/pagination';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import {
  QueryAllPoolTokenWeightRequest,
  QueryAllPoolTokenWeightResponse,
} from './pryzmjs/pryzm/amm/v1/query';
import { UserStakeState } from './pryzmjs/pryzm/ystaking/v1/user_stake_state';

type AssetType = 'lp' | 'plain' | 'staked' | 'masked';
type AssetsRecord = {
  denom: string;
  lp?: boolean;
  base_denom?: string;
  type: AssetType;
};
export default class PryzmSource extends BankModuleSource<AssetsRecord> {
  getAllDelegations = async (height: number): Promise<UserStakeState[]> => {
    const path = '/pryzm.ystaking.v1.Query/UserStakeStateAll';
    const request = {
      pagination: PageRequest.fromPartial({
        limit: BigInt(99999),
        countTotal: true,
      }),
    };
    const client = await this.getClient();
    const data = QueryAllAssetPoolStateRequest.encode(request).finish(); // I use QueryAllAssetPoolStateRequest as it has similar signature but without pagination
    const response = await client.abciQuery({ path, data, height });
    if (response.code !== 0) {
      throw new Error(
        `Tendermint query error: ${response.log} Code: ${response.code}`,
      );
    }
    const res = QueryAllUserStakeStateResponse.decode(response.value);
    return res.userStakeState;
  };

  getAllDenoms = async (height: number): Promise<string[]> => {
    const path = '/cosmos.bank.v1beta1.Query/TotalSupply';
    const request = {
      pagination: PageRequestCS.fromPartial({
        limit: BigInt(99999),
      }),
    };
    const client = await this.getClient();
    const data = QueryTotalSupplyRequest.encode(request).finish(); // I use QueryAllAssetPoolStateRequest as it has similar signature but without pagination
    const response = await client.abciQuery({ path, data, height });
    if (response.code !== 0) {
      throw new Error(
        `Tendermint query error: ${response.log} Code: ${response.code}`,
      );
    }
    const res = QueryTotalSupplyResponse.decode(response.value);
    return res.supply.map((x) => x.denom);
  };

  getBaseDenomWeight = async (
    height: number,
    poolId: number,
    baseDenom: string,
  ): Promise<number> => {
    this.logger.debug(
      'getting base denom weight pool %s and %s',
      poolId,
      baseDenom,
    );
    const path = '/pryzm.amm.v1.Query/PoolTokenWeightAll';
    const request = {
      poolId: BigInt(poolId),
    };
    const client = await this.getClient();
    const data = QueryAllPoolTokenWeightRequest.encode(request).finish();
    const response = await client.abciQuery({ path, data, height });
    if (response.code !== 0) {
      throw new Error(
        `Tendermint query error: ${response.log} Code: ${response.code}`,
      );
    }
    const res = QueryAllPoolTokenWeightResponse.decode(response.value);
    this.logger.debug('PryzmSource getBaseDenomWeight %o', res);
    const baseDenomWeight = res.tokenWeight.find(
      (x) => x.denom === baseDenom,
    )?.normalizedWeight;
    if (!baseDenomWeight) {
      throw new Error(
        'Base denom weight not found for ' + poolId + ' > ' + baseDenom,
      );
    }
    return parseFloat(baseDenomWeight);
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    this.logger.debug('PryzmSource getUsersBalances');
    for (const [assetId, asset] of Object.entries(this.assets)) {
      this.logger.debug('PryzmSource getUsersBalances asset %s', assetId);
      switch (asset.type) {
        case 'plain': {
          const balances = await this.getDenomBalances(
            asset,
            multipliers[assetId],
            height,
          );
          cb(
            Object.entries(balances.results).map(([address, balance]) => ({
              address,
              balance,
              asset: assetId,
            })),
          );
          break;
        }
        case 'masked': {
          const denoms = await this.getAllDenoms(height);
          const regexPattern = new RegExp(
            '^' + asset.denom.replace('*', '.*') + '$',
          );
          const ydATOMDenoms = denoms.filter((x) => regexPattern.test(x));
          for (const denom of ydATOMDenoms) {
            const balances = await this.getDenomBalances(
              { denom },
              multipliers[assetId],
              height,
            );
            cb(
              Object.entries(balances.results).map(([address, balance]) => ({
                address,
                balance,
                asset: assetId + denom,
              })),
            );
          }
          break;
        }
        case 'lp': {
          if (!asset.base_denom) {
            throw new Error('Base denom not set for LP asset');
          }
          let baseDenomWeight = await this.getBaseDenomWeight(
            height,
            parseInt(asset.denom.split(':')[1], 10),
            asset.base_denom,
          );
          if (asset.base_denom.startsWith('lp:')) {
            const subDenom = Object.values(this.assets).find(
              (o) => o.denom === asset.base_denom,
            );
            if (!subDenom) {
              throw new Error('Base denom not set for sub LP asset');
            }
            baseDenomWeight *= await this.getBaseDenomWeight(
              height,
              parseInt(subDenom.denom.split(':')[1], 10),
              subDenom.base_denom || '',
            );
          }
          this.logger.debug(
            'BaseDenomWeight for %s %o',
            assetId,
            baseDenomWeight,
          );
          const balances = await this.getDenomBalances(
            asset,
            multipliers[assetId] * baseDenomWeight,
            height,
          );
          cb(
            Object.entries(balances.results).map(([address, balance]) => ({
              address,
              balance,
              asset: assetId,
            })),
          );
          break;
        }
        case 'staked': {
          const delegations = (await this.getAllDelegations(height)).filter(
            (d) => d.assetId.startsWith(asset.denom) && d.maturitySymbol,
          );
          cb(
            delegations.map((delegation) => ({
              address: delegation.address,
              balance: (
                (BigInt(delegation.bondedAmount) *
                  BigInt(Math.round(multipliers[assetId] * 10000))) /
                BigInt(10000)
              ).toString(),
              asset: assetId + delegation.maturitySymbol,
            })),
          );
        }
      }
    }
  };
}
