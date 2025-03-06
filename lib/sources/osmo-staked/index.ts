import { Logger } from 'pino';
import pLimit from 'p-limit';
import { CbOnUserTokens } from '../../../types/sources/cbOnUserTokens';
import { NFTBase } from '../nftbase/base';
import { getContractStateKeys, queryContractOnHeight } from '../../query';

const PAGINATION_LIMIT = 100;

export default class OsmoStakedNFT extends NFTBase {
  concurrencyLimit: number;
  constructor(rpc: string, logger: Logger<never>, params: any) {
    super(rpc, logger, params);
    this.concurrencyLimit = params.concurrency_limit;
  }

  getAllAccounts = async (
    contract: string,
    height: number,
  ): Promise<string[]> => {
    let nextKey = undefined;

    const addresses = [];
    while (true) {
      const newKeys = await getContractStateKeys(
        await this.getClient(),
        height,
        contract,
        nextKey,
        PAGINATION_LIMIT,
      );
      const keys = newKeys.models
        .map((k) => Buffer.from(k.key).toString())
        .filter((k) => k.match(/.*(osmo[a-z0-9]{39})$/g))
        .map((k) => k.replace(/^.*osmo/, 'osmo'));
      addresses.push(...keys);
      if (!keys.length) {
        break;
      }
      nextKey = newKeys.pagination?.nextKey;
      if (!newKeys.pagination?.nextKey) {
        break;
      }
    }
    return addresses;
  };

  isUserStakedTokens = async (
    contract: string,
    height: number,
    address: string,
  ): Promise<boolean> => {
    const response = await queryContractOnHeight<string[]>(
      await this.getClient(),
      contract,
      height,
      { staked_nfts: { address } },
    );
    return response.length > 0;
  };

  getUsersTokens = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserTokens,
  ): Promise<void> => {
    this.logger.info(
      'Getting users tokens on Osmo staked %s %o',
      height,
      multipliers,
    );
    const users = await this.getAllAccounts(this.contract, height);
    this.logger.info('Got users: %s', users.length);
    const limit = pLimit(this.concurrencyLimit);
    await Promise.all(
      users.map((user) =>
        limit(async () => {
          try {
            const isStaked = await this.isUserStakedTokens(
              this.contract,
              height,
              user,
            );
            if (isStaked) {
              cb(
                Object.entries(multipliers).map(([asset_id, mul]) => ({
                  address: user,
                  asset_id,
                  amount: String(mul),
                })),
              );
            }
          } catch (e: unknown) {
            const error = e as Error;
            this.logger.error(
              'Error getting user tokens %s %s',
              error.message,
              error.stack,
            );
          }
        }),
      ),
    );
  };
}
