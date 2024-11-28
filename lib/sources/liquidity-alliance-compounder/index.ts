import BankModuleSource from '../bank-module';
import { Logger } from 'pino';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { queryContractOnHeight } from '../../query';
import AstroportSource from '../astroport';

interface ExchangeRatesResponse {
  gauge: string;
  asset: Asset;
  exchange_rates: [number, ExchangeRate][];
  apr: any;
}

interface Asset {
  cw20?: string;
  native?: string;
}

interface ExchangeRate {
  exchange_rate: string;
  time_s: number;
}

export default class LiquidityAllianceCompounderSource extends BankModuleSource {
  rpc: string;
  logger: Logger<never>;
  map?: string;
  userMap: Record<string, string>;
  assets: Record<
    string,
    {
      denom: string;
      compounder_contract: string;
      gauge: string;
      pair_contract: string;
      lp_token: string;
      amplp_denom: string;
    }
  >;
  sourceName: string;
  client: Tendermint34Client | undefined;

  getUserMap = async (contract: string, height: number): Promise<void> => {
    if (Object.keys(this.userMap).length > 0) {
      return;
    }
    this.logger.debug(`Getting user map for ${contract} at height ${height}`);
    const client = await this.getClient();
    let startAfter = undefined;
    const out: Record<string, string> = {};
    while (true) {
      const userMap: [string, string][] = await queryContractOnHeight(
        client,
        contract,
        height,
        {
          get_all: { start_after: startAfter, limit: 2000 },
        },
      );
      this.logger.debug('Got user map %s', userMap);
      if (userMap.length) {
        break;
      }
      for (const one of userMap) {
        out[one[0]] = one[1];
      }
      startAfter = userMap[userMap.length - 1][0];
    }
    this.userMap = out;
  };

  constructor(rpc: string, logger: Logger<never>, params: any) {
    super(rpc, logger, params);
    this.userMap = {};
    this.logger = logger;
    if (params.map) {
      this.map = params.map;
    }
    if (!params.source) {
      throw new Error('No source name configured in params');
    }
    this.sourceName = params.source;

    if (!params.assets) {
      throw new Error('No assets configured in params');
    }
    this.assets = params.assets;

    this.rpc = rpc;
  }

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    const client = await this.getClient();
    const astroportSource = new AstroportSource(this.rpc, this.logger, {
      source: this.sourceName,
      assets: this.assets,
    });
    if (this.map) {
      await this.getUserMap(this.map, height);
    }
    for (const [
      assetId,
      {
        denom,
        compounder_contract,
        gauge,
        pair_contract,
        amplp_denom,
        lp_token,
      },
    ] of Object.entries(this.assets)) {
      const lpTokenSplit = lp_token.split(':');
      const token = { [lpTokenSplit[0]]: lpTokenSplit[1] };

      const response = await queryContractOnHeight<ExchangeRatesResponse[]>(
        client,
        compounder_contract,
        height,
        {
          exchange_rates: {
            assets: [[gauge, token]],
            limit: 1,
          },
        },
      );

      const vaultToLpExchangeRate =
        +response[0].exchange_rates[0][1].exchange_rate;
      const lpToAssetExchangeRate = await astroportSource.getLpExchangeRate(
        height,
        denom,
        pair_contract,
      );
      const multiplier = multipliers[assetId];
      const exchangeRate = vaultToLpExchangeRate * lpToAssetExchangeRate;
      let nextKey: undefined | Uint8Array = undefined;
      do {
        // result in vault tokens balances
        const { results, nextKey: newNextKey } = await this.getDenomBalances(
          { denom: amplp_denom },
          multiplier,
          height,
          nextKey,
        );
        const out = [];

        for (const result of Object.entries(results)) {
          this.logger.debug('Address %s has %s LP', result[0], result[1]);
          const user = this.userMap[result[0]];
          if (user) {
            out.push({
              address: user,
              balance: String(
                Math.floor(Number(result[1]) * multiplier * exchangeRate),
              ),
              asset: assetId,
            });
          }
        }

        cb(out);

        this.logger.debug('Got next key %s', newNextKey);
        if (!newNextKey) {
          break;
        }
        nextKey = newNextKey;
      } while (nextKey !== undefined && nextKey.length > 0);
    }
  };
}
