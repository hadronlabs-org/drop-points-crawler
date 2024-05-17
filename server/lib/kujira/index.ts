import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  QueryDenomOwnersRequest,
  QueryDenomOwnersResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import { PageRequest } from 'cosmjs-types/cosmos/base/query/v1beta1/pagination';

const DENOM =
  'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9'; //TODO: change to the right denom
const LIMIT = 10000;
const getDenomBalances = async (
  client: Tendermint34Client,
  height: number,
  nextKey: undefined | Uint8Array = undefined,
): Promise<{
  results: Record<string, string>;
  nextKey: undefined | Uint8Array;
}> => {
  const path = '/cosmos.bank.v1beta1.Query/DenomOwners';
  const request = {
    denom: DENOM,
    pagination: PageRequest.fromPartial({ limit: BigInt(LIMIT), key: nextKey }),
  };
  const data = QueryDenomOwnersRequest.encode(request).finish();
  const response = await client.abciQuery({ path, data, height });
  if (response.code !== 0) {
    throw new Error(
      `Tendermint query error: ${response.log} Code: ${response.code}`,
    );
  }
  const balances = QueryDenomOwnersResponse.decode(response.value);
  const out = balances.denomOwners.reduce(
    (acc, one) => ({ ...acc, [one.address]: one.balance.amount }),
    {},
  );
  return { results: out, nextKey: balances.pagination?.nextKey };
};

const main = async () => {
  const client = await Tendermint34Client.connect(
    'https://kujira-rpc.publicnode.com:443',
  );
  const height = (await client.status()).syncInfo.latestBlockHeight;

  console.log(await getDenomBalances(client, height));
};

main().catch(console.error);
