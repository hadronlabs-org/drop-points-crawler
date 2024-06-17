import BankModuleSource from '../bank-module';
import { Logger } from 'pino';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { queryContractOnHeight } from '../../query';
import AstroportSource from '../astroport';

export default class ApolloSource extends BankModuleSource {
  rpc: string;
  logger: Logger<never>;
  assets: Record<string, { denom: string; vault_contract: string }>;
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
  }

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [
      assetId,
      { denom, vault_contract: vaultContract },
    ] of Object.entries(this.assets)) {
      const client = await this.getClient();
      const {
        staked_base_tokens: stakedBaseTokens,
        vault_token_supply: vaultTokenSupply,
        pool: { pair_addr: pairContract },
        vault_token_denom: vaultDenom,
      } = await queryContractOnHeight<{
        staked_base_tokens: string;
        vault_token_supply: string;
        lp_token_addr: string;
        pool: {
          pair_addr: string;
        };
        vault_token_denom: string;
      }>(client, vaultContract, height, {
        vault_extension: {
          apollo: {
            state: {},
          },
        },
      });
      const vaultToLpExchangeRate =
        Number(stakedBaseTokens) / Number(vaultTokenSupply);
      const astroportSource = new AstroportSource(this.rpc, this.logger, {
        source: this.sourceName,
        assets: this.assets,
      });
      const lpToAssetExchangeRate = await astroportSource.getLpExchangeRate(
        height,
        denom,
        pairContract,
      );
      const multiplier = multipliers[assetId];
      const exchangeRate = vaultToLpExchangeRate * lpToAssetExchangeRate;

      let nextKey: undefined | Uint8Array = undefined;
      do {
        // result in vault tokens balances
        const { results, nextKey: newNextKey } = await this.getDenomBalances(
          { denom: vaultDenom },
          multiplier,
          height,
          nextKey,
        );

        cb(
          Object.entries(results).map(([address, balance]) => ({
            address,
            // convert from vault token balances to asset token balances
            balance: String(Math.floor(Number(balance) * exchangeRate)),
            asset: assetId,
          })),
        );

        this.logger.debug('Got next key %s', newNextKey);
        if (!newNextKey) {
          break;
        }
        nextKey = newNextKey;
      } while (nextKey != undefined && nextKey.length > 0);
    }
  };
}
