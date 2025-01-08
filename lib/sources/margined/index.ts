import BankModuleSource from '../bank-module';
import { Logger } from 'pino';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { queryContractOnHeight } from '../../query';

export default class MarginedSource extends BankModuleSource {
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

  getExchangeRate = async (
    contract: string,
    height: number,
  ): Promise<number> => {
    const out = await queryContractOnHeight<string>(
      await this.getClient(),
      contract,
      height,
      {
        convert_to_assets: {
          amount: '1000000',
        },
      },
    );
    return Number(out) / 1000000;
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [
      assetId,
      { denom, vault_contract: vaultContract },
    ] of Object.entries(this.assets)) {
      const vaultExchangeRate = await this.getExchangeRate(
        vaultContract,
        height,
      );
      this.logger.debug(
        `Vault exchange rate for ${assetId} at height ${height}: ${vaultExchangeRate}`,
      );
      let nextKey: undefined | Uint8Array = undefined;
      do {
        const { results, nextKey: newNextKey } = await this.getDenomBalances(
          { denom },
          (multipliers[assetId] || 1) * vaultExchangeRate,
          height,
          nextKey,
        );
        cb(
          Object.entries(results).map(([address, balance]) => ({
            address,
            balance,
            asset: assetId,
          })),
        );
        this.logger.debug('Got next key %s', newNextKey);
        if (!newNextKey) {
          break;
        }
        nextKey = newNextKey;
      } while (nextKey !== undefined && nextKey.length > 0);
    }
    this.logger.debug(
      'Finished fetching balances for %s source',
      this.sourceName,
    );
  };
}
