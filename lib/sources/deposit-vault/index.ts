import 'dotenv/config';
import { Logger } from 'pino';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { Database } from 'bun:sqlite';
import EthERC20Source from '../eth-erc20';

const viem = require('viem');

const ERC20_ABI = [
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    type: 'function',
    name: 'previewWithdraw',
    inputs: [
      {
        name: 'assets',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
];

export default class DepositVaultSource extends EthERC20Source {
  client: any;
  db?: Database;

  getClient = () => {
    if (!this.client) {
      this.client = viem.createPublicClient({
        transport: viem.http(this.rpc),
      });
    }
    return this.client;
  };

  getRate = async (vaultAddress: string, height: number): Promise<number> => {
    this.logger.trace(
      'Fetching vault rate for %s at height %d',
      vaultAddress,
      height,
    );
    const client = await this.getClient();
    const rateRes = await client.readContract({
      address: vaultAddress,
      abi: ERC20_ABI,
      functionName: 'previewWithdraw',
      args: [10n ** 18n],
      blockNumber: BigInt(height),
    });
    const rate = Number(rateRes) / 10 ** 18;
    this.logger.debug('Got vault rate %d', rate);
    return rate;
  };

  constructor(rpc: string, logger: Logger<never>, params: any, db?: Database) {
    super(rpc, logger, params, db);
  }

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [assetId, asset] of Object.entries(this.assets)) {
      let offset = 0;
      let hasMore = true;
      const rate = await this.getRate(asset.contract, height);
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
                balance: (
                  (BigInt(balance) * BigInt(Math.round(rate * 10 ** 12))) /
                  BigInt(10 ** 12)
                ).toString(),
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
