import { toAscii } from '@cosmjs/encoding';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  QueryAllContractStateRequest,
  QueryAllContractStateResponse,
  QueryRawContractStateRequest,
  QueryRawContractStateResponse,
  QuerySmartContractStateRequest,
  QuerySmartContractStateResponse,
} from 'cosmjs-types/cosmwasm/wasm/v1/query';
import { FullPositionBreakdown } from 'osmojs/osmosis/concentratedliquidity/v1beta1/position';
import * as osmoClQuery from 'osmojs/osmosis/concentratedliquidity/v1beta1/query';

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

const queryOsmoPositionOnHeight = async (
  client: Tendermint34Client,
  positionId: string,
  height: number,
): Promise<FullPositionBreakdown> => {
  const path = '/osmosis.concentratedliquidity.v1beta1.Query/PositionById';
  const data = osmoClQuery.PositionByIdRequest.encode(
    osmoClQuery.PositionByIdRequest.fromPartial({
      positionId: BigInt(positionId),
    }),
  ).finish();

  const response = await client.abciQuery({ path, data, height });

  if (response.code !== 0) {
    throw new Error(
      `Tendermint query error: ${response.log} Code: ${response.code}`,
    );
  }

  const out = osmoClQuery.PositionByIdResponse.decode(response.value).position;
  return out;
};

const getContractStateKeys = async (
  client: Tendermint34Client,
  height: number,
  address: string,
  key: Uint8Array | undefined,
) => {
  const path = '/cosmwasm.wasm.v1.Query/AllContractState';
  const request = {
    address,
    pagination: {
      limit: BigInt(100),
      key,
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
  return QueryAllContractStateResponse.decode(response.value);
};

const getContractStateRaw = async (
  client: Tendermint34Client,
  height: number,
  address: string,
  queryData: Uint8Array,
) => {
  const path = '/cosmwasm.wasm.v1.Query/RawContractState';
  const request = {
    address,
    queryData,
  };
  const data = QueryRawContractStateRequest.encode(
    QueryRawContractStateRequest.fromPartial(request),
  ).finish();
  const response = await client.abciQuery({ path, data, height });
  if (response.code !== 0) {
    throw new Error(
      `Tendermint query error: ${response.log} Code: ${response.code}`,
    );
  }
  const out = QueryRawContractStateResponse.decode(response.value);
  return JSON.parse(Buffer.from(out.data).toString());
};

export {
  queryContractOnHeight,
  queryOsmoPositionOnHeight,
  getContractStateKeys,
  getContractStateRaw,
};
