import {
  QueryBalanceRequest,
  QueryBalanceResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import { BaseInitiaSource } from '../../../types/sources/initiaSource';

export default class InitiaSource extends BaseInitiaSource {
  async getUserBalance(
    address: string,
    height: number,
    denom: string,
    multiplier: number,
  ): Promise<string> {
    this.logger.debug(
      'Fetching balance for %s, denom %s, multiplier %s',
      address,
      denom,
      multiplier,
    );
    const client = await this.getClient();
    const path = '/cosmos.bank.v1beta1.Query/Balance';

    const request = QueryBalanceRequest.encode({ address, denom }).finish();
    const responseData = await client.abciQuery({ path, data: request, height });

    if (responseData.code !== 0) {
      throw new Error(
        `Tendermint query error: ${responseData.log} Code: ${responseData.code}`
      );
    }

    const response = QueryBalanceResponse.decode(responseData.value);
    return (
      (BigInt(Number(response.balance?.amount || 0)) * BigInt(Math.round(multiplier * 10000))) /
      BigInt(10000)
    ).toString();
  }
}
