import { SourceInterface } from '../../../types/sources/source';
import { Logger } from 'pino';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import pLimit from 'p-limit';
import { bcs, RESTClient } from '@initia/initia.js';

export default class EchelonSource implements SourceInterface {
  rpc: string;
  rest: string;
  module: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { denom: string }> = {};
  sourceName: string;
  client: Tendermint34Client | undefined;
  restClient: RESTClient | undefined;

  constructor(rpc: string, logger: Logger<never>, params: any) {
    this.logger = logger;

    if (!params.source) {
      throw new Error('No source name configured in params');
    }
    this.sourceName = params.source;

    if (!params.assets) {
      throw new Error('No assets configured in params');
    }
    this.assets = params.assets;

    if (!params.rest) {
      throw new Error('No rest endpoint configured in params');
    }
    this.rest = params.rest;

    if (!params.module) {
      throw new Error('No module configured in params');
    }
    this.module = params.module;

    this.rpc = rpc;
    this.concurrencyLimit = parseInt(params.concurrency_limit || '3', 10);
    this.paginationLimit = parseInt(params.paginationLimit || '100', 10);
  }

  getClient = async () => {
    if (!this.client) {
      this.client = await Tendermint34Client.connect(this.rpc);
    }
    return this.client;
  };

  getRestClient = () => {
    if (!this.restClient) {
      this.restClient = new RESTClient(this.rest, {
        chainId: 'echelon-testnet-1',
        gasPrices: '0.15uinit',
        gasAdjustment: '2.0',
      });
    }
    return this.restClient;
  };

  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    const status = await client.status();
    return status.syncInfo.latestBlockHeight;
  };

  getUserBalance = async (
    address: string,
    height: number,
    denom: string,
    multiplier: number,
  ) => {
    const rest = this.getRestClient();

    const userAddressSerialized = bcs.address().serialize(address).toBase64();
    const denomSerialized = bcs.object().serialize(denom).toBase64();

    const res = await rest.move.viewFunction(
      this.module,
      'lending',
      'account_coins',
      [],
      [userAddressSerialized, denomSerialized],
    );

    return String(Math.round(Number(res) * multiplier));
  };

  // eslint-disable-next-line require-await
  getUsers = async (denom: string, limit: number, offset: number) => [
    'init1waj5lmujv6dyqypntp3cts4gkpgnqcvr7tznyk',
    'init1k0gcdykyhk9z7kj6c8kng5wls6l7e3xw9a42tw',
  ];

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [assetId, { denom }] of Object.entries(this.assets)) {
      let offset = 0;

      while (true) {
        const users = await this.getUsers(denom, this.paginationLimit, offset);

        if (!users.length) {
          break;
        }
        offset += users.length;

        const withConcurrencyLimit = pLimit(this.concurrencyLimit);
        const settledResults = await Promise.allSettled(
          users.map((address) =>
            withConcurrencyLimit(async () => ({
              address: address,
              balance: await this.getUserBalance(
                address,
                height,
                denom,
                multipliers[assetId],
              ),
              asset: assetId,
            })),
          ),
        );

        cb(
          settledResults.reduce(
            (
              filteredResult: {
                address: string;
                balance: string;
                asset: string;
              }[],
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

        //TODO: remove that
        break;
      }
    }
  };
}

// const logger = pino({});
//
// const echelon = new EchelonSource(
//   'https://rpc-echelon-testnet-1.anvil.asia-southeast.initia.xyz',
//   logger,
//   {
//     source: 'echelon',
//     module:
//       '0x6c7a7e7461d3971e77071c66d1cef02c8f089a2cadf41710350c6e59a9d51469',
//     rest: 'https://rest-echelon-testnet-1.anvil.asia-southeast.initia.xyz:443',
//     assets: {
//       FA: {
//         denom:
//           '0xfd27433c0146752c2e79d8dda09c378b3c97dcdc258b62829b198c57fe11a46',
//       },
//     },
//   },
// );
// const height = await echelon.getLastBlockHeight();
// await echelon.getUsersBalances(height - 100, { INITIA: 1 }, () => {});
