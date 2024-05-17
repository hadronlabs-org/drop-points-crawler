import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { queryContractOnHeight } from '../../query';
import { parse } from 'path';

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

const DEFAULT_LIMIT = 100;
const PARALLEL_QUERIES = parseInt(
  process.env.OSMOSIS_MARS_CONCURRENT || '3',
  10,
);

const getAccounts = async (
  client: Tendermint34Client,
  height: number,
  limit = DEFAULT_LIMIT,
  start_after?: string,
): Promise<string[]> => {
  const data = await queryContractOnHeight<{ tokens: string[] }>(
    client,
    NFT_CONTRACT_ADDRESS,
    height,
    {
      all_tokens: { limit, start_after },
    },
  );
  return data.tokens as string[];
};

const getAllAccounts = async (
  client: Tendermint34Client,
  height: number,
  limit = DEFAULT_LIMIT,
): Promise<string[]> => {
  const allTokens: string[] = [];
  while (true) {
    const tokens = await getAccounts(
      client,
      height,
      DEFAULT_LIMIT,
      allTokens.length ? allTokens[allTokens.length - 1] : undefined,
    );
    allTokens.push(...tokens);
    if (tokens.length < DEFAULT_LIMIT) {
      break;
    }
  }
  return allTokens;
};

const getAccountPositions = async (
  client: Tendermint34Client,
  height: number,
  token: string,
): Promise<PositionResponse> => {
  const data = await queryContractOnHeight<PositionResponse>(
    client,
    CREDIT_CONTRACT,
    height,
    {
      positions: { account_id: token },
    },
  );
  return data;
};

const getAccountOwner = async (
  client: Tendermint34Client,
  height: number,
  token: string,
): Promise<string> => {
  const data = await queryContractOnHeight<{ owner: string }>(
    client,
    NFT_CONTRACT_ADDRESS,
    height,
    {
      owner_of: { token_id: token },
    },
  );
  return data.owner;
};

export const getLastBlockHeight = async (): Promise<number> => {
  const client = await getClient();
  const status = await client.status();
  return status.syncInfo.latestBlockHeight;
};

export const getPrice = (): number => 1;

const getAccountInfo = async (
  client: Tendermint34Client,
  height: number,
  token: string,
): Promise<{ owner: string; positions: PositionResponse }> => {
  const [owner, positions] = await Promise.all([
    getAccountOwner(client, height, token),
    getAccountPositions(client, height, token),
  ]);
  return { owner, positions };
};
