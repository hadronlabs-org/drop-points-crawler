import { BaseInitiaSource } from '../../../types/sources/initiaSource';
import {
  QueryViewRequest,
  QueryViewResponse,
} from '@initia/initia.proto/initia/move/v1/query';
import { bcs } from '@initia/initia.js';

export default class EchelonSource extends BaseInitiaSource {
  module: string;

  constructor(rpc: string, logger: any, params: any) {
    super(rpc, logger, params);

    if (!params.module) {
      throw new Error('No module configured in params');
    }
    this.module = params.module;
  }

  async getUserBalance(
    address: string,
    height: number,
    denom: string,
    multiplier: number,
  ): Promise<string> {
    const client = await this.getClient();

    const path = '/initia.move.v1.Query/View';
    const userAddressSerialized = bcs.address().serialize(address).toBytes();

    const request = QueryViewRequest.encode({
      address: this.module,
      moduleName: 'lens',
      functionName: 'get_user_data',
      typeArgs: [],
      args: [userAddressSerialized],
    }).finish();

    const response = await client.abciQuery({ path, data: request, height });
    const decoded = QueryViewResponse.decode(response.value);
    const balances = JSON.parse(decoded.data);

    const denomBalance =
      balances.account_coins.data.find(
        (x: { key: string; value: string }) => x.key === denom,
      )?.value || '0';

    return String(Math.round(Number(denomBalance) * multiplier));
  }
}
