import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { queryContractOnHeight } from '../query';

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

const NFT_CONTRACT_ADDRESS =
  'osmo1450hrg6dv2l58c0rvdwx8ec2a0r6dd50hn4frk370tpvqjhy8khqw7sw09';
const CREDIT_CONTRACT =
  'osmo1f2m24wktq0sw3c0lexlg7fv4kngwyttvzws3a3r3al9ld2s2pvds87jqvf';

const DEFAULT_LIMIT = 100;
const PARALLEL_QUERIES = 3;

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

const main = async () => {
  const client = await Tendermint34Client.connect(
    'https://osmosis-rpc.polkachu.com:443/',
  );
  const height = 15555016;
  const x = await getAccountInfo(client, height, '25248');
  // console.log(`Getting all tokens at height ${height}`);
  // const allTokens = await getAllAccounts(client, height);
  // const lastToken = allTokens[allTokens.length - 1];
  // console.log(`Last token: ${lastToken}`);
  console.log(x);
};

main().catch(console.error);
