import { toAscii } from '@cosmjs/encoding';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  QueryAllContractStateRequest,
  QueryAllContractStateResponse,
} from 'cosmjs-types/cosmwasm/wasm/v1/query';

const CONTRACT =
  'nolus1dca9sf0knq3qfg55mv2sn03rdw6gukkc4n764x5pvdgrgnpf9mzsfkcjp6';

const getContractStateKeys = async (
  client: Tendermint34Client,
  height: number,
  address: string,
): Promise<string[]> => {
  const path = '/cosmwasm.wasm.v1.Query/AllContractState';

  const request = {
    address,
  };
  const data = QueryAllContractStateRequest.encode(request).finish();
  const response = await client.abciQuery({ path, data, height });
  if (response.code !== 0) {
    throw new Error(
      `Tendermint query error: ${response.log} Code: ${response.code}`,
    );
  }

  const keys = Buffer.from(
    QueryAllContractStateResponse.decode(response.value).models.map(
      (model) => model.key,
    ),
  ).toString();
  return keys;
};
