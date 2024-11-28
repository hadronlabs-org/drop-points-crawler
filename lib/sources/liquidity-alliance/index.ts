import { Logger } from 'pino';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import AstroportSource from '../astroport';
import { queryContractOnHeight } from '../../query';

interface UserShare {
  user: string;
  shares: string;
  balance: string;
}

export default class LiquidityAllianceSource extends AstroportSource {
  rpc: string;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<
    string,
    {
      denom: string;
      pair_contract: string;
      staking_contract: string;
      lp_token: string;
    }
  > = {};
  sourceName: string;
  client: Tendermint34Client | undefined;

  constructor(rpc: string, logger: Logger<never>, params: any) {
    super(rpc, logger, params);
    this.logger = logger;
    if (!params.source) {
      throw new Error('No source name configured in params');
    }
    this.sourceName = params.source;

    if (!params.assets) {
      throw new Error('No assets configured in params');
    }
    this.assets = params.assets;

    this.rpc = rpc;
    this.paginationLimit = parseInt(params.pagination_limit || '50', 10);
  }

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    if (this.map) {
      await this.getUserMap(this.map, height);
    }
    for (const [
      assetId,
      { denom, pair_contract: pairContract, lp_token, staking_contract },
    ] of Object.entries(this.assets)) {
      const lpTokenSplit = lp_token.split(':');
      const token = { [lpTokenSplit[0]]: lpTokenSplit[1] };

      this.logger.debug(
        `LP token for ${assetId}: ${lp_token} at height ${height}`,
      );
      const exchangeRate = await this.getLpExchangeRate(
        height,
        denom,
        pairContract,
      );
      this.logger.debug(`Exchange rate ${exchangeRate}`);
      const multiplier = multipliers[assetId] * exchangeRate;
      const client = await this.getClient();
      let startAfter = undefined;
      while (true) {
        this.logger.debug(
          `Fetching accounts starting after ${startAfter} - limit ${this.paginationLimit}`,
        );
        const balances: UserShare[] = await queryContractOnHeight(
          client,
          staking_contract,
          height,
          {
            pool_stakers: {
              asset: token,
              start_after: startAfter,
              limit: this.paginationLimit,
            },
          },
        );

        if (balances.length == 0) {
          break;
        }
        startAfter = balances[balances.length - 1].user;
        const out = [];
        for (const result of balances) {
          if (this.map) {
            const user = this.userMap[result.user];
            if (user) {
              out.push({
                address: user,
                balance: String(
                  Math.floor(
                    Number(result.balance) * multiplier * exchangeRate,
                  ),
                ),
                asset: assetId,
              });
            }
          } else {
            out.push({
              address: result.user,
              balance: String(
                Math.floor(Number(result.balance) * multiplier * exchangeRate),
              ),
              asset: assetId,
            });
          }
          this.logger.debug(
            'Address %s has %s LP',
            result.user,
            result.balance,
          );
        }
        cb(out);
        this.logger.debug('Got next key %s', startAfter);
      }
    }
  };
}
