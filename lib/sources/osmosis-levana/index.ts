import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import pLimit from 'p-limit';
import { queryContractOnHeight } from '../../query';
import { CbOnUserBalances } from '../../../types/cbOnUserBalances';

let client: Tendermint34Client | undefined;

const DEFAULT_LIMIT = 300;
const CONCURRENCY_LIMIT = 3;

const OSMOSIS_LEVANA_RPC = process.env.OSMOSIS_LEVANA_RPC;
if (!OSMOSIS_LEVANA_RPC) {
  throw new Error('OSMOSIS_LEVANA_RPC environment variable not set');
}
const LP_TOKEN_ADDRESS = process.env.OSMOSIS_LEVANA_LP_TOKEN;
if (!LP_TOKEN_ADDRESS) {
  throw new Error('OSMOSIS_LEVANA_LP_TOKEN environment variable not set');
}

const getAccounts = async (
  client: Tendermint34Client,
  height: number,
  limit: number,
  startAfter: string | undefined,
): Promise<string[]> => {
  const data = await queryContractOnHeight<{ accounts: string[] }>(
    client,
    LP_TOKEN_ADDRESS,
    height,
    {
      all_accounts: { limit, start_after: startAfter },
    },
  );
  return data.accounts;
};

const getAccountBalance = async (
  client: Tendermint34Client,
  height: number,
  address: string,
): Promise<string> => {
  const data = await queryContractOnHeight<{ balance: string }>(
    client,
    LP_TOKEN_ADDRESS,
    height,
    {
      balance: { address },
    },
  );
  return data.balance;
};

const getClient = async () => {
  if (!client) {
    client = await Tendermint34Client.connect(OSMOSIS_LEVANA_RPC);
  }
  return client;
};

const getLastBlockHeight = async (): Promise<number> => {
  const client = await getClient();
  const status = await client.status();
  return status.syncInfo.latestBlockHeight;
};

const getPrice = (): number => 1;

const getUsersBalances = async (
  height: number,
  cb: CbOnUserBalances,
): Promise<void> => {
  const client = await getClient();

  const limit = DEFAULT_LIMIT;
  let startAfter = undefined;
  let accounts: string[] = [];
  const usersBalances = [];

  while (true) {
    startAfter =
      accounts.length > 0 ? accounts[accounts.length - 1] : undefined;
    accounts = await getAccounts(client, height, limit, startAfter);
    if (accounts.length === 0) break;

    const withConcurrencyLimit = pLimit(CONCURRENCY_LIMIT);
    const settledResults = await Promise.allSettled(
      accounts.map((account) =>
        withConcurrencyLimit(async () => ({
          address: account,
          balance: await getAccountBalance(client, height, account),
        })),
      ),
    );

    usersBalances.push(
      ...settledResults.reduce(
        (
          filteredResult: { address: string; balance: string }[],
          settledResult,
        ) => {
          if (settledResult.status === 'fulfilled') {
            filteredResult.push(settledResult.value);
          }
          return filteredResult;
        },
        [],
      ),
    );
  }

  cb(usersBalances);
};

export { getLastBlockHeight, getPrice, getUsersBalances };
