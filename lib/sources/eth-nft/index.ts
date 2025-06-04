import { Logger } from 'pino';
import pLimit from 'p-limit';
import { CbOnUserTokens } from '../../../types/sources/cbOnUserTokens';
import { NFTSource } from '../../../types/sources/nft';
/**
 * sorry bro, I've spent too much time on this already and can't get it work
 * viem seem to have conflict with our dynamic class instantiation in the crawler index.ts
 * */
const viem = require('viem');

const ABI = [
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export default class ETHNFT implements NFTSource {
  rpc: string;
  concurrencyLimit: number;
  contract: string;
  logger: Logger<never>;
  tokenCount: number;
  client: any;

  constructor(rpc: string, logger: Logger<never>, params: any) {
    this.rpc = rpc;
    this.concurrencyLimit = params.concurrency_limit;
    this.contract = params.contract;
    this.logger = logger;
    this.tokenCount = params.token_count;
  }

  getClient = () => {
    if (!this.client) {
      this.client = viem.createPublicClient({
        transport: viem.http(this.rpc),
      });
    }
    return this.client;
  };

  getTokenOwner = async (id: number, height: bigint): Promise<string> => {
    const maxAttempts = 5;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const owner = await this.getClient().readContract({
          address: this.contract,
          abi: ABI,
          functionName: 'ownerOf',
          args: [id],
          blockNumber: height,
        });
        return owner;
      } catch (err) {
        this.logger.warn(`${attempt} attempt to get id ${id} failed: ${err}`);

        if (attempt === maxAttempts) {
          this.logger.error(`Can't get ${id} after ${maxAttempts} retries`);
          throw err;
        }
        await new Promise((res) => setTimeout(res, attempt * 1000));
      }
    }
    throw new Error('Unreachable');
  };

  getLastBlockHeight = async (): Promise<number> => {
    const blockNumber = await this.getClient().getBlockNumber();
    return Number(blockNumber.toString());
  };

  /* eslint-disable */
  getAllTokens = async (
    _contract: string,
    _height: number,
  ): Promise<string[]> => [];
  /* eslint-enable */

  getUsersTokens = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserTokens,
  ): Promise<void> => {
    this.logger.info(
      'Getting users tokens on ETHNFT %s %o',
      height,
      multipliers,
    );
    const tokens = Array.from({ length: this.tokenCount }, (_, i) => i + 1);
    const withConcurrencyLimit = pLimit(this.concurrencyLimit);
    const out = new Set<string>();
    await Promise.all(
      tokens.map((token_id) =>
        withConcurrencyLimit(() =>
          this.getTokenOwner(token_id, BigInt(height)).then((owner) => {
            out.add(owner);
            this.logger.trace('Got token %s owner %s', token_id, owner);
            !(token_id % 100) &&
              this.logger.debug('Got token %s owner %s', token_id, owner);
          }),
        ),
      ),
    );
    this.logger.debug('Got %d unique users', out.size);
    const users = [...out]
      .map((address) =>
        Object.entries(multipliers).map(([asset_id, multiplier]) => ({
          address,
          asset_id,
          amount: String(multiplier),
        })),
      )
      .flat();
    cb(users);
  };
}
