import { toAscii } from '@cosmjs/encoding';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  QueryAllContractStateRequest,
  QueryAllContractStateResponse,
} from 'cosmjs-types/cosmwasm/wasm/v1/query';

const getContractStateKeys = async (
  client: Tendermint34Client,
  height: number,
  address: string,
) => {
  const path = '/cosmwasm.wasm.v1.Query/AllContractState';

  const request = {
    address,
    pagination: {
      limit: BigInt(10000),
    },
  };
  const data = QueryAllContractStateRequest.encode(
    QueryAllContractStateRequest.fromPartial(request),
  ).finish();
  const response = await client.abciQuery({ path, data, height });
  if (response.code !== 0) {
    throw new Error(
      `Tendermint query error: ${response.log} Code: ${response.code}`,
    );
  }
  const out = QueryAllContractStateResponse.decode(response.value);
  console.log(out.models.length);
};

const main = async () => {
  const rpc = 'https://osmosis-rpc.publicnode.com:443/';
  const client = await Tendermint34Client.connect(rpc);
  const height = 0;
  const address =
    'osmo1f2m24wktq0sw3c0lexlg7fv4kngwyttvzws3a3r3al9ld2s2pvds87jqvf';
  await getContractStateKeys(client, height, address);
};

main().catch(console.error);
