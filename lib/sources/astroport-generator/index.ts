import { Logger } from 'pino';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import AstroportSource from '../astroport';
import { queryContractOnHeight } from '../../query';

export default class AstroportGeneratorSource extends AstroportSource {
  rpc: string;
  paginationLimit: number;
  logger: Logger<never>;
  generatorContract: string;
  assets: Record<
    string,
    { denom: string; pair_contract: string; map?: string }
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

    if (!params.generator_contract) {
      throw new Error('No generator contract configured in params');
    }
    this.generatorContract = params.generator_contract;

    this.rpc = rpc;
    this.paginationLimit = parseInt(params.paginationLimit || '50', 10);
  }

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [
      assetId,
      { denom, pair_contract: pairContract, map },
    ] of Object.entries(this.assets)) {
      if (map) {
        await this.getUserMap(map, height);
      }
      const lpToken = await this.getLpContract(height, pairContract);
      this.logger.debug(
        `LP token for ${assetId}: ${lpToken} at height ${height}`,
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
        this.logger.debug(`Fetching accounts starting after ${startAfter}`);
        const balances: string[][] = await queryContractOnHeight(
          client,
          this.generatorContract,
          height,
          {
            pool_stakers: {
              lp_token: lpToken,
              start_after: startAfter,
              limit: this.paginationLimit,
            },
          },
        );
        if (balances.length == 0) {
          break;
        }
        startAfter = balances[balances.length - 1][0];
        const out: { address: string; balance: string; asset: string }[] = [];
        for (const balance of balances) {
          if (map) {
            const user = this.userMap[balance[0]];
            if (user) {
              out.push({
                address: user,
                balance: String(Math.floor(Number(balance[1]) * multiplier)),
                asset: assetId,
              });
            }
          } else {
            out.push({
              address: balance[0],
              balance: String(Math.floor(Number(balance[1]) * multiplier)),
              asset: assetId,
            });
          }
        }
        cb(out);
      }
    }
  };
}
