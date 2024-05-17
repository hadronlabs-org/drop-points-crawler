import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  QueryDenomOwnersRequest,
  QueryDenomOwnersResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import { PageRequest } from 'cosmjs-types/cosmos/base/query/v1beta1/pagination';
import { CbOnUserBalances } from '@/types/cbOnUserBalances';

let client: Tendermint34Client | undefined;

const DENOM = process.env.KUJIRA_DENOM;
if (!DENOM) {
  throw new Error('KUJIRA_DENOM environment variable not set');
}
const LIMIT = parseInt(process.env.KUJIRA_LIMIT || '10000', 10);
const KUJIRA_RPC = process.env.KUJIRA_RPC;
if (!KUJIRA_RPC) {
  throw new Error('KUJIRA_RPC environment variable not set');
}

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

export const getLastBlockHeight = async (): Promise<number> => {
  const client = await getClient();
  const status = await client.status();
  return status.syncInfo.latestBlockHeight;
};

export const getPrice = (): number => 1;

const getClient = async () => {
  if (!client) {
    client = await Tendermint34Client.connect(KUJIRA_RPC);
  }
  return client;
};

export const getUsersBalances = async (
  height: number,
  cb: CbOnUserBalances,
): Promise<void> => {
  client = await getClient();
  let nextKey: undefined | Uint8Array = undefined;
  do {
    const { results, nextKey: newNextKey } = await getDenomBalances(
      client,
      height,
      nextKey,
    );
    cb(
      Object.entries(results).map(([address, balance]) => ({
        address,
        balance,
      })),
    );
    console.log('>>', newNextKey);
    if (!newNextKey) {
      break;
    }
    nextKey = newNextKey;
  } while (nextKey !== undefined && nextKey.length > 0);
};
