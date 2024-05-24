import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { queryContractOnHeight } from '../../query';
import { CbOnUserBalances } from '../../../types/cbOnUserBalances';
import pLimit from 'p-limit';

interface PositionResponse {
  account_id: string;
  debts: {
    amount: string;
    denom: string;
    shares: string;
  }[];
  deposits: {
    amount: string;
    denom: string;
  }[];
  lends: {
    amount: string;
    denom: string;
  }[];
}

const MARS_DENOM =
  'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2';
const NFT_CONTRACT_ADDRESS = process.env.OSMOSIS_MARS_NFT_CONTRACT;
if (!NFT_CONTRACT_ADDRESS) {
  throw new Error('OSMOSIS_MARS_NFT_CONTRACT environment variable not set');
}
const CREDIT_CONTRACT = process.env.OSMOSIS_MARS_CREDIT_CONTRACT;
if (!CREDIT_CONTRACT) {
  throw new Error('OSMOSIS_MARS_CREDIT_CONTRACT environment variable not set');
}
const OSMOSIS_MARS_RPC = process.env.OSMOSIS_MARS_RPC;
if (!OSMOSIS_MARS_RPC) {
  throw new Error('OSMOSIS_MARS_RPC environment variable not set');
}

let client: Tendermint34Client | undefined;

const getClient = async () => {
  if (!client) {
    client = await Tendermint34Client.connect(OSMOSIS_MARS_RPC);
  }
  return client;
};

const PAGINATION_LIMIT = parseInt(
  process.env.OSMOSIS_MARS_PAGINATION_LIMIT || '300',
  10,
);
const CONCURRENCY_LIMIT = parseInt(
  process.env.OSMOSIS_MARS_CONCURRENCY_LIMIT || '3',
  10,
);

const getAccountTokens = async (
  client: Tendermint34Client,
  height: number,
  limit: number,
  startAfter?: string,
): Promise<string[]> => {
  const data = await queryContractOnHeight<{ tokens: string[] }>(
    client,
    NFT_CONTRACT_ADDRESS,
    height,
    {
      all_tokens: { limit, start_after: startAfter },
    },
  );
  return data.tokens;
};

const getAccountTokensOwned = async (
  client: Tendermint34Client,
  height: number,
  owner: string,
): Promise<string[]> => {
  const data = await queryContractOnHeight<{ tokens: string[] }>(
    client,
    NFT_CONTRACT_ADDRESS,
    height,
    {
      tokens: { owner },
    },
  );
  return data.tokens;
};

const getAccountPositions = async (
  client: Tendermint34Client,
  height: number,
  account: string,
): Promise<PositionResponse> => {
  const data = await queryContractOnHeight<PositionResponse>(
    client,
    CREDIT_CONTRACT,
    height,
    {
      positions: { account_id: account },
    },
  );
  return data;
};

const getAccountOwner = async (
  client: Tendermint34Client,
  height: number,
  account: string,
): Promise<string> => {
  const data = await queryContractOnHeight<{ owner: string }>(
    client,
    NFT_CONTRACT_ADDRESS,
    height,
    {
      owner_of: { token_id: account },
    },
  );

  return data.owner;
};

const getLastBlockHeight = async (): Promise<number> => {
  const client = await getClient();
  const status = await client.status();
  return status.syncInfo.latestBlockHeight;
};

const getBalanceOrNull = (positions: PositionResponse) => {
  if (positions.debts.length > 0 && positions.lends.length > 0) {
    const foundAsset = positions.lends.find((lend) => lend.denom === MARS_DENOM);
    if (foundAsset) return foundAsset.amount;
  }

  return null;
};

const getAddressAndBalance = async (
  client: Tendermint34Client,
  height: number,
  accountToken: string,
): Promise<{ address: string; balance: string } | null> => {
  const owner = await getAccountOwner(client, height, accountToken);

  const accountTokensOwned = await getAccountTokensOwned(client, height, owner);

  if (accountTokensOwned.length === 1) {
    const positions = await getAccountPositions(client, height, accountToken);
    const positionsBalance = getBalanceOrNull(positions);
    return positionsBalance
      ? { address: owner, balance: positionsBalance }
      : null;
  }

  if (accountToken !== accountTokensOwned[0]) return null;

  let aggregatedBalance = 0;
  let hasFittingPosition = false;

  accountTokensOwned.forEach(async (accountToken) => {
    const currentPositions = await getAccountPositions(
      client,
      height,
      accountToken,
    );
    const balance = getBalanceOrNull(currentPositions);

    if (balance && !hasFittingPosition) hasFittingPosition = true;

    aggregatedBalance += balance ? parseInt(balance, 10) : 0;
  });

  return hasFittingPosition
    ? { address: owner, balance: String(aggregatedBalance) }
    : null;
};

const getPrice = (): number => 1;

const getUsersBalances = async (
  height: number,
  cb: CbOnUserBalances,
): Promise<void> => {
  const client = await getClient();

  const limit = PAGINATION_LIMIT;
  let startAfter = undefined;
  let accountTokens: string[] = [];

  while (true) {
    startAfter =
      accountTokens.length > 0
        ? accountTokens[accountTokens.length - 1]
        : undefined;
    accountTokens = await getAccountTokens(client, height, limit, startAfter);
    if (accountTokens.length === 0) break;

    const withConcurrencyLimit = pLimit(CONCURRENCY_LIMIT);
    const settledResults = await Promise.allSettled(
      accountTokens.map((accountToken) =>
        withConcurrencyLimit(
          async () => await getAddressAndBalance(client, height, accountToken),
        ),
      ),
    );

    cb(
      settledResults.reduce(
        (
          filteredResult: { address: string; balance: string }[],
          settledResult,
        ) => {
          if (settledResult.status === 'fulfilled' && settledResult.value) {
            filteredResult.push(settledResult.value);
          }
          return filteredResult;
        },
        [],
      ),
    );
  }
};

export { getLastBlockHeight, getPrice, getUsersBalances };
