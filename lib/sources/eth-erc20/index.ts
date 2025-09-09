import 'dotenv/config';
import { Logger } from 'pino';
import pLimit from 'p-limit';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { SourceInterface } from '../../../types/sources/source';
import { Database } from 'bun:sqlite';

const viem = require('viem');

const ERC20_ABI = [
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
];

export default class EthERC20Source<A = { contract: string }>
  implements SourceInterface
{
  rpc: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { contract: string; decimals: number } & A>;
  sourceName: string;
  client: any;
  db?: Database;
  networkName: string;

  getClient = () => {
    if (!this.client) {
      this.client = viem.createPublicClient({
        transport: viem.http(this.rpc),
      });
    }
    return this.client;
  };

  constructor(rpc: string, logger: Logger<never>, params: any, db?: Database) {
    this.logger = logger;

    if (!params.assets) {
      throw new Error('No assets configured in params');
    }
    this.assets = params.assets;

    if (!params.source) {
      throw new Error('No source name configured in params');
    }
    this.sourceName = params.source;

    if (!params.network_name) {
      throw new Error('Network name not provided in params');
    }
    this.networkName = params.network_name;

    this.db = db;

    this.rpc = rpc;
    this.concurrencyLimit = parseInt(params.concurrency_limit || '10', 10);
    this.paginationLimit = parseInt(params.pagination_limit || '1000', 10);
  }

  getEthereumAddressesFromDB = (
    offset: number = 0,
    limit: number = this.paginationLimit,
  ): string[] => {
    if (!this.db) {
      throw new Error('Database instance not available');
    }

    this.logger.debug(
      'Fetching Ethereum addresses from user_network_link for network %s, offset %d, limit %d',
      this.networkName,
      offset,
      limit,
    );

    const query = this.db.query<
      { remote_address: string },
      [string, number, number]
    >(
      'SELECT remote_address FROM user_network_link WHERE network = ? ORDER BY remote_address LIMIT ? OFFSET ?',
    );

    const addresses = query
      .all(this.networkName, limit, offset)
      .map((row) => row.remote_address);
    this.logger.debug(
      'Found %d Ethereum addresses in database',
      addresses.length,
    );
    return addresses;
  };

  getTokenBalances = async (
    asset: { contract: string },
    multiplier: number,
    height: number,
    addresses: string[],
    decimals = 6,
  ): Promise<Record<string, string>> => {
    this.logger.debug(
      'Fetching ERC20 balances for %s with multiplier %s at height %d for %d addresses',
      asset.contract,
      multiplier,
      height,
      addresses.length,
    );

    const blockNumber = BigInt(height);
    const client = this.getClient();
    const results: Record<string, string> = {};
    const withConcurrencyLimit = pLimit(this.concurrencyLimit);

    await Promise.all(
      addresses.map((address) =>
        withConcurrencyLimit(async () => {
          try {
            const balance = await client.readContract({
              address: asset.contract,
              abi: ERC20_ABI,
              functionName: 'balanceOf',
              args: [address],
              blockNumber,
            });

            if (balance > 0n) {
              const adjustedBalance = (
                (BigInt(balance.toString()) *
                  BigInt(Math.round(multiplier * 10000))) /
                BigInt(10000) /
                BigInt(10 ** (decimals - 6))
              ).toString();

              results[address] = adjustedBalance;

              this.logger.trace(
                'Address %s has ERC20 balance %s (raw)',
                address,
                adjustedBalance,
              );
            }
          } catch (error) {
            this.logger.warn(
              'Failed to get ERC20 balance for address %s: %s',
              address,
              error,
            );
          }
        }),
      ),
    );

    this.logger.debug(
      'Got %d non-zero ERC20 balances',
      Object.keys(results).length,
    );
    return results;
  };

  getLastBlockHeight = async (): Promise<number> => {
    const blockNumber = await this.getClient().getBlockNumber();
    return Number(blockNumber.toString());
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [assetId, asset] of Object.entries(this.assets)) {
      let offset = 0;
      let hasMore = true;

      while (hasMore) {
        try {
          const addresses = this.getEthereumAddressesFromDB(
            offset,
            this.paginationLimit,
          );
          if (addresses.length === 0) {
            hasMore = false;
            break;
          }

          const results = await this.getTokenBalances(
            asset,
            multipliers[assetId] || 1,
            height,
            addresses,
            this.assets[assetId].decimals || 6,
          );

          if (Object.keys(results).length > 0) {
            cb(
              Object.entries(results).map(([address, balance]) => ({
                address,
                balance, // with multiplier applied
                asset: assetId,
              })),
            );
          }

          offset += this.paginationLimit;
          hasMore = addresses.length === this.paginationLimit;
        } catch (error) {
          this.logger.error(
            'Error fetching ERC20 balances for asset %s: %s',
            assetId,
            error,
          );
          hasMore = false;
          process.exit(-1);
        }
      }

      this.logger.debug(
        'Finished fetching ERC20 balances for %s source',
        this.sourceName,
      );
    }
  };
}
