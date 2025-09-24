import 'dotenv/config';
import { Logger } from 'pino';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { Database } from 'bun:sqlite';
import EthERC20Source from '../eth-erc20';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { queryContractOnHeight } from '../../query';

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

export default class LPVaultSource extends EthERC20Source<{
  contract: string;
  sv_contract: string;
}> {
  client: any;
  neutronClient: Tendermint34Client | undefined;
  neutronRpc: string;
  batchId: string;

  constructor(rpc: string, logger: Logger<never>, params: any, db?: Database) {
    logger.debug('Initializing LPVaultSource with params: %o', params);
    super(rpc, logger, params, db);
    if (!params.batchId) {
      throw new Error('No batchId in params');
    }
    this.batchId = params.batchId;
    if (!params.neutron_rpc) {
      throw new Error('No neutron_rpc in params');
    }
    this.neutronRpc = params.neutron_rpc;
  }

  getClient = () => {
    if (!this.client) {
      this.client = viem.createPublicClient({
        transport: viem.http(this.rpc),
      });
    }
    return this.client;
  };

  getNeutronClient = async () => {
    if (!this.neutronClient) {
      this.neutronClient = await Tendermint34Client.connect(this.neutronRpc);
    }
    return this.neutronClient;
  };

  getRate = async (vaultAddress: string, height: number): Promise<number> => {
    this.logger.trace(
      'Fetching vault rate for %s at height %d',
      vaultAddress,
      height,
    );
    // Need to get the neutron height for the given batch id
    if (!this.db) {
      this.logger.error('No database connection');
      process.exit(-1);
    }
    const query = this.db.query<{ height: number }, [string]>(
      `SELECT height FROM tasks WHERE batch_id = ? AND protocol_id = 'neutron' ORDER BY height DESC LIMIT 1`,
    );
    const result = query.get(this.batchId);
    if (!result) {
      this.logger.error(
        'No neutron height found for batch_id %s',
        this.batchId,
      );
      process.exit(-1);
    }
    const neutronHeight = result.height;
    this.logger.debug(
      'Found neutron height %d for batch_id %s',
      neutronHeight,
      this.batchId,
    );
    this.logger.debug(
      'Fetching pool rate for %o at height %d - %s',
      this.assets.maxBTC.sv_contract,
      neutronHeight,
      this.assets.maxBTC.contract,
    );
    const pricesRes = await queryContractOnHeight<{
      token_0_price: string;
      token_1_price: string;
      price_0_to_1: string;
    }>(
      await this.getNeutronClient(),
      this.assets.maxBTC.sv_contract,
      neutronHeight,
      {
        get_prices: {},
      },
    );
    const maxBTCtoWBTC = Number(pricesRes.price_0_to_1);
    const liqRes = await queryContractOnHeight<string[]>(
      await this.getNeutronClient(),
      this.assets.maxBTC.sv_contract,
      neutronHeight,
      {
        simulate_withdraw_liquidity: {
          amount: '99999999999',
        },
      },
    );
    const maxBTCPart =
      Number(liqRes[0]) /
      (Number(liqRes[0]) + Number(liqRes[1]) / maxBTCtoWBTC);

    this.logger.debug(
      'Got liquidity response %o, maxBTC part %d',
      liqRes,
      maxBTCPart,
    );

    const client = await this.getClient();
    const rateRes = await client.readContract({
      address: vaultAddress,
      abi: ERC20_ABI,
      functionName: 'previewWithdraw',
      args: [10n ** 18n],
      blockNumber: BigInt(height),
    });
    const rate = (Number(rateRes) / 10 ** 18) * maxBTCPart;
    this.logger.debug('Got vault rate %d', rate);
    return rate;
  };

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
            'Error fetching LP balances for asset %s: %s',
            assetId,
            error,
          );
          hasMore = false;
          process.exit(-1);
        }
      }

      this.logger.debug(
        'Finished fetching LP balances for %s source',
        this.sourceName,
      );
    }
  };
}
