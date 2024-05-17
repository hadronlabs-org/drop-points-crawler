import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { queryContractOnHeight } from '../../query';
import { ConcurrentJob } from '../../concurent-promise-job';

let client: Tendermint34Client | undefined;

const DEFAULT_LIMIT = 300;
const CONCURENCY = 3;

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
  start_after: string | undefined,
): Promise<string[]> => {
  const data = await queryContractOnHeight<{ accounts: string[] }>(
    client,
    LP_TOKEN_ADDRESS,
    height,
    {
      all_accounts: { limit, start_after },
    },
  );
  return data.accounts;
};

const getAccountData = async (
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

export const getLastBlockHeight = async (): Promise<number> => {
  const client = await getClient();
  const status = await client.status();
  return status.syncInfo.latestBlockHeight;
};

// const main = async () => {
//   const client = await Tendermint34Client.connect(OSMOSIS_LEVANA_RPC);
//   const lastBlock = await client.block();
//   const height = lastBlock.block.header.height;
//   const limit = DEFAULT_LIMIT;
//   let start_after: string | undefined = undefined;
//   let total = 0;
//   const cj = ConcurrentJob<string>(CONCURENCY);
//   cj.onResult((key, result) => {
//     console.log(`Account ${key} processed with result ${result}`);
//   });
//   //   while (true) {
//   const accounts = await getAccounts(client, height, limit, start_after);
//   start_after = accounts[accounts.length - 1];
//   total += accounts.length;
//   accounts.forEach((account) => {
//     cj.addTask((account) => getAccountData(client, height, account), account);
//   });
//   //     if (accounts.length !== limit) {
//   //       break;
//   //     }
//   //   }
//   await cj.waitFinish();
//   console.log('Total accounts:', total);
// };

// main();
