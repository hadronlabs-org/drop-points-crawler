import { toAscii } from '@cosmjs/encoding';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  QuerySmartContractStateRequest,
  QuerySmartContractStateResponse,
} from 'cosmjs-types/cosmwasm/wasm/v1/query';

const queryContractOnHeight = async <T>(
  client: Tendermint34Client,
  address: string,
  height: number,
  query: any,
): Promise<T> => {
  const path = '/cosmwasm.wasm.v1.Query/SmartContractState';
  const request = {
    address,
    queryData: toAscii(JSON.stringify(query)),
  };
  const data = QuerySmartContractStateRequest.encode(request).finish();
  const response = await client.abciQuery({ path, data, height });
  if (response.code !== 0) {
    throw new Error(
      `Tendermint query error: ${response.log} Code: ${response.code}`,
    );
  }
  const out = JSON.parse(
    Buffer.from(
      QuerySmartContractStateResponse.decode(response.value).data,
    ).toString(),
  ) as T;
  return out;
};

export { queryContractOnHeight };
