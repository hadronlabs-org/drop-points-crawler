import { Logger } from 'pino';
import pLimit from 'p-limit';
import { CbOnUserTokens } from '../../../types/sources/cbOnUserTokens';
import { NFTBase } from '../../sources/nftbase/base';
import { queryContractOnHeight } from '../../query';

interface TokensResponse {
  tokens: string[];
}

const PAGINATION_LIMIT = 100;

export class StargazeNFT extends NFTBase {
  concurrencyLimit: number;
  constructor(rpc: string, logger: Logger<never>, params: any) {
    super(rpc, logger, params);
    this.concurrencyLimit = params.concurrency_limit;
  }

  getAllTokens = async (
    contract: string,
    height: number,
  ): Promise<string[]> => {
    let start_after = '';
    const out = [];
    while (true) {
      const data: TokensResponse = await queryContractOnHeight(
        await this.getClient(),
        contract,
        height,
        {
          all_tokens: {
            start_after,
            limit: PAGINATION_LIMIT,
          },
        },
      );
      out.push(...data.tokens);
      if (data.tokens.length < PAGINATION_LIMIT) {
        break;
      }
      start_after = data.tokens[data.tokens.length - 1];
    }
    return out;
  };

  getUsers = async (
    contract: string,
    height: number,
    tokens: string[],
    multipliers: Record<string, number>,
  ): Promise<{ address: string; asset_id: string; amount: string }[]> => {
    const withConcurrencyLimit = pLimit(this.concurrencyLimit);
    const client = await this.getClient();
    const out = await Promise.all(
      tokens.map((token_id) =>
        withConcurrencyLimit(() =>
          queryContractOnHeight<{ access: { owner: string } }>(
            client,
            contract,
            height,
            {
              all_nft_info: {
                token_id,
              },
            },
          ).then((data) => data.access.owner),
        ),
      ),
    );
    return [...new Set(out)]
      .map((address) => [
        ...Object.entries(multipliers).map(([asset_id, multiplier]) => ({
          address,
          asset_id,
          amount: String(multiplier),
        })),
      ])
      .flat();
  };

  getUsersTokens = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserTokens,
  ): Promise<void> => {
    this.logger.info(
      'Getting users tokens on Stargaze %s %o',
      height,
      multipliers,
    );
    try {
      const tokens = await this.getAllTokens(this.contract, height);
      this.logger.info('Got tokens: %s', tokens.length);
      const users = await this.getUsers(
        this.contract,
        height,
        tokens,
        multipliers,
      );
      this.logger.info('Got users: %s', users.length);
      cb(users);
    } catch (e: unknown) {
      const error = e as Error;
      this.logger.error(
        'Error getting tokens %s %s',
        error.message,
        error.stack,
      );
      process.exit(1);
    }
  };
}
