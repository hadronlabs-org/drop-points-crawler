import { toAscii } from '@cosmjs/encoding';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  QueryAllContractStateRequest,
  QueryAllContractStateResponse,
} from 'cosmjs-types/cosmwasm/wasm/v1/query';

const CONTRACT =
  'nolus1dca9sf0knq3qfg55mv2sn03rdw6gukkc4n764x5pvdgrgnpf9mzsfkcjp6';
//nolus1jew4l5nq7m3xhkqzy8j7cc99083m5j8d9w004ayyv8xl3yv4h0dql2dd4e
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
