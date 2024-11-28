import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { queryContractOnHeight } from '../../query';

import {
  QueryDenomOwnersRequest,
  QueryDenomOwnersResponse,
  QuerySupplyOfRequest,
  QuerySupplyOfResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import { PageRequest } from 'cosmjs-types/cosmos/base/query/v1beta1/pagination';
import AstroportSource from '../astroport';

export default class AstroportCWSource extends AstroportSource {
  getUserBalance = async (
    account: string,
    lpContract: string,
    height: number,
    assetId: string,
    multiplier: number,
  ) => {
    const client = await this.getClient();
    const { balance } = await queryContractOnHeight<{ balance: string }>(
      client,
      lpContract,
      height,
      {
        balance: {
          address: account,
        },
      },
    );
    this.logger.debug('Got balance %s', balance);
    return {
      address: account,
      balance: String(Math.round(Number(balance) * multiplier)),
      asset: assetId,
    };
  };

  getLpContract = async (
    height: number,
    pairContract: string,
  ): Promise<string> => {
    const client = await this.getClient();
    const data: any = await queryContractOnHeight(
      client,
      pairContract,
      height,
      {
        pair: {},
      },
    );

    return data.liquidity_token;
  };

  getAllUsers = async (contact: string, height: number): Promise<string[]> => {
    let start_after: string | undefined = undefined;
    const out = [];
    while (true) {
      const response: { accounts: string[] } = await queryContractOnHeight(
        await this.getClient(),
        contact,
        height,
        {
          all_accounts: {
            start_after: start_after,
            limit: 30,
          },
        },
      );
      if (response.accounts.length === 0) {
        break;
      }
      start_after = response.accounts[response.accounts.length - 1];
      out.push(...response.accounts);
    }
    this.logger.debug('Got %d users', out.length);
    return out;
  };

  getDenomBalances = async (
    denom: string,
    multiplier: number,
    height: number,
    nextKey: undefined | Uint8Array = undefined,
  ): Promise<{
    results: Record<string, string>;
    nextKey: undefined | Uint8Array;
  }> => {
    this.logger.debug(
      'Fetching balances for %o with multiplier %s',
      denom,
      multiplier,
    );
    const path = '/cosmos.bank.v1beta1.Query/DenomOwners';
    const request = {
      denom,
      pagination: PageRequest.fromPartial({
        limit: BigInt(this.paginationLimit),
        key: nextKey,
      }),
    };
    const client = await this.getClient();
    const data = QueryDenomOwnersRequest.encode(request).finish();
    const response = await client.abciQuery({ path, data, height });
    this.logger.trace('Got response %o', response);
    if (response.code !== 0) {
      throw new Error(
        `Tendermint query error: ${response.log} Code: ${response.code}`,
      );
    }
    const balances = QueryDenomOwnersResponse.decode(response.value);
    const out = balances.denomOwners.reduce(
      (acc, one) => ({
        ...acc,
        [one.address]: (
          (BigInt(one.balance.amount) *
            BigInt(Math.round(multiplier * 10000))) /
          BigInt(10000)
        ).toString(),
      }),
      {},
    );
    this.logger.debug('Got %d balances', Object.keys(out).length);
    return { results: out, nextKey: balances.pagination?.nextKey };
  };

  getTotalSupply = async (
    token: string,
    height: number,
  ): Promise<number | undefined> => {
    const path = '/cosmos.bank.v1beta1.Query/SupplyOf';
    const request = {
      denom: token,
    };
    const client = await this.getClient();
    const data = QuerySupplyOfRequest.encode(request).finish();
    const response = await client.abciQuery({ path, data, height });
    this.logger.trace('Got response %o', response);
    if (response.code !== 0) {
      throw new Error(
        `Tendermint query error: ${response.log} Code: ${response.code}`,
      );
    }
    const supply = QuerySupplyOfResponse.decode(response.value);
    this.logger.trace('Supply %o', supply);
    return parseInt(supply.amount.amount, 10);
  };

  getLpExchangeRate = async (
    height: number,
    denom: string,
    pairContract: string,
  ): Promise<number> => {
    const client = await this.getClient();
    const pool = await queryContractOnHeight<
      {
        info: {
          native_token: {
            denom: string;
          };
        };
        amount: string;
      }[]
    >(client, pairContract, height, {
      share: {
        amount: '100000',
      },
    });
    this.logger.debug('Got pool %o', pool);
    const assetAmount = pool.find(
      (asset) => asset.info.native_token.denom === denom,
    )!.amount;
    return Number(assetAmount) / Number(100000);
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    if (this.map) {
      await this.getUserMap(this.map, height);
    }
    for (const [
      assetId,
      { denom, pair_contract: pairContract },
    ] of Object.entries(this.assets)) {
      const lpContract = await this.getLpContract(height, pairContract);
      this.logger.debug(
        `LP contract for ${assetId}: ${lpContract} at height ${height}`,
      );
      const users = await this.getAllUsers(lpContract, height);
      const exchangeRate = await this.getLpExchangeRate(
        height,
        denom,
        pairContract,
      );
      this.logger.debug(`Exchange rate ${exchangeRate}`);
      for (const user of users) {
        if (this.map && !this.userMap[user]) {
          continue;
        }
        const balance = await this.getUserBalance(
          user,
          lpContract,
          height,
          assetId,
          (multipliers[assetId] || 1) * exchangeRate,
        );
        if (this.map) {
          balance.address = this.userMap[user];
        }
        this.logger.debug('Got balance %o', balance);
        cb([balance]);
      }
    }
    process.exit(1);
  };

  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    const status = await client.status();
    return status.syncInfo.latestBlockHeight;
  };
}
