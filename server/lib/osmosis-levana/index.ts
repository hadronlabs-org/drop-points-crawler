import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { queryContractOnHeight } from '../query';
import { ConcurrentJob } from '../concurent-promise-job';

const DEFAULT_LIMIT = 300;
const CONCURENCY = 3;
const LP_TOKEN_ADDRESS =
  'osmo1kp5nhg2eqcv8zwc0ndgjj7w8pk8dzhu58jfk4q0ptfywj2m42qvqhh9dcv';

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

const main = async () => {
  const client = await Tendermint34Client.connect(
    'https://osmosis-rpc.polkachu.com:443/',
  );
  const lastBlock = await client.block();
  const height = lastBlock.block.header.height;
  const limit = DEFAULT_LIMIT;
  let start_after: string | undefined = undefined;
  let total = 0;
  const cj = ConcurrentJob<string>(CONCURENCY);
  cj.onResult((key, result) => {
    console.log(`Account ${key} processed with result ${result}`);
  });
  //   while (true) {
  const accounts = await getAccounts(client, height, limit, start_after);
  start_after = accounts[accounts.length - 1];
  total += accounts.length;
  accounts.forEach((account) => {
    cj.addTask((account) => getAccountData(client, height, account), account);
  });
  //     if (accounts.length !== limit) {
  //       break;
  //     }
  //   }
  await cj.waitFinish();
  console.log('Total accounts:', total);
};

main();
