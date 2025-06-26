import {
  QueryBalanceRequest,
  QueryBalanceResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import { BaseInitiaSource } from '../../../types/sources/initiaSource';

export default class RaveSource extends BaseInitiaSource {
  async getUserBalance(
    address: string,
    height: number,
    denom: string,
    multiplier: number,
  ): Promise<string> {
    const client = await this.getClient();
    const path = '/cosmos.bank.v1beta1.Query/Balance';

    const request = QueryBalanceRequest.encode({ address, denom }).finish();
    const responseData = await client.abciQuery({
      path,
      data: request,
      height,
    });
    const response = QueryBalanceResponse.decode(responseData.value);

    return String(
      Math.round((Number(response.balance?.amount || 0) / 1e12) * multiplier),
    );
  }
}