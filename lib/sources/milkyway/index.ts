import BankModuleSource from '../bank-module';
import { PageRequest } from './milkyway.proto/ts/src/codegen/cosmos/base/query/v1beta1/pagination';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import {
  QueryPoolDelegationsRequest,
  QueryPoolDelegationsResponse,
} from './milkyway.proto/ts/src/codegen/milkyway/restaking/v1/query';

type AssetsRecord = {
  denom: string;
  pool_id: number;
};
export default class MilkyWaySource extends BankModuleSource<AssetsRecord> {
  getPoolDelegations = async (
    height: number,
    poolId: number,
    denom: string,
    nextKey: Uint8Array | null,
  ): Promise<{
    items: { address: string; amount: string }[];
    nextKey: Uint8Array | null;
  }> => {
    const path = '/milkyway.restaking.v1.Query/PoolDelegations';
    const request = {
      poolId,
      pagination: PageRequest.fromPartial({
        key: nextKey || undefined,
        limit: BigInt(999999),
      }),
    };
    const client = await this.getClient();
    const data = QueryPoolDelegationsRequest.encode(request).finish();
    const response = await client.abciQuery({ path, data, height });
    if (response.code !== 0) {
      throw new Error(
        `Tendermint query error: ${response.log} Code: ${response.code}`,
      );
    }
    const res = QueryPoolDelegationsResponse.decode(response.value);
    return {
      items: res.delegations.map((delegation) => ({
        address: delegation.delegation.userAddress,
        amount:
          delegation.balance.find((b) => b.denom === denom)?.amount ?? '0',
      })),
      nextKey: res.pagination?.nextKey ?? null,
    };
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    this.logger.debug('MilkyWaySource getUsersBalances');

    for (const [assetId, asset] of Object.entries(this.assets)) {
      this.logger.debug(
        'MilkyWaySource getUsersBalances asset %s %o %f',
        assetId,
        asset,
        multipliers[assetId],
      );

      let nextKey: Uint8Array | null = null;
      while (true) {
        const res = await this.getPoolDelegations(
          height,
          asset.pool_id,
          asset.denom,
          nextKey,
        );
        this.logger.debug(
          'MilkyWaySource getUsersBalances %d',
          res.items.length,
        );
        nextKey = res.nextKey;
        cb(
          res.items.map((item) => ({
            address: item.address,
            balance: (
              (BigInt(item.amount) *
                BigInt(Math.round(multipliers[assetId] * 1000000))) /
              BigInt(1000000)
            ).toString(),
            asset: assetId,
          })),
        );
        if (res.items.length === 0 || !nextKey || nextKey.length === 0) {
          break;
        }
      }
      this.logger.debug('MilkyWaySource getUsersBalances done');
    }
  };
}
