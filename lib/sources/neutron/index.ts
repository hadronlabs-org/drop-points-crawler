import 'dotenv/config';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  QueryDenomOwnersRequest,
  QueryDenomOwnersResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import { PageRequest } from 'cosmjs-types/cosmos/base/query/v1beta1/pagination';
import { CbOnUserBalances } from '../../../types/cbOnUserBalances';
import { logger } from '../../logger';

const DENOM = process.env.NEUTRON_DENOM;
if (!DENOM) {
  throw new Error('NEUTRON_DENOM environment variable not set');
}
const LIMIT = parseInt(process.env.NEUTRON_LIMIT || '10000', 10);
const NEUTRON_RPC = process.env.NEUTRON_RPC;
if (!NEUTRON_RPC) {
  throw new Error('NEUTRON_RPC environment variable not set');
}

let client: Tendermint34Client | undefined;

const getClient = async () => {
  if (!client) {
    client = await Tendermint34Client.connect(NEUTRON_RPC);
  }
  return client;
};

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
  logger.trace('Got response %o', response);
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
  logger.debug('Got %d balances', Object.keys(out).length);
  return { results: out, nextKey: balances.pagination?.nextKey };
};

export const getLastBlockHeight = async (): Promise<number> => {
  const client = await getClient();
  const status = await client.status();
  return status.syncInfo.latestBlockHeight;
};

export const getPrice = (): number => 1;

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
    logger.debug('Got next key %s', newNextKey);
    if (!newNextKey) {
      break;
    }
    nextKey = newNextKey;
  } while (nextKey !== undefined && nextKey.length > 0);
  logger.debug('Finished fetching balances for neutron source');
};
