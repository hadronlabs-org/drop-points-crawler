import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { SourceInterface } from '../../../types/sources/source';
import { Logger } from 'pino';
import { TradingFeesReport } from '../../../types/sources/levanaTradeFeesReport';

function getYesterdayFormatted(): string {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default class LevanaTradeSource implements SourceInterface {
  rpc: string;
  reportsUrl: string;
  supply: number;
  logger: Logger<never>;
  client: Tendermint34Client | undefined;

  getClient = async () => {
    if (!this.client) {
      this.client = await Tendermint34Client.connect(this.rpc);
    }
    return this.client;
  };

  constructor(rpc: string, logger: Logger<never>, params: any) {
    this.logger = logger;
    this.rpc = rpc;

    if (!params.reports_url) {
      throw new Error('No reports url configured in params');
    }
    this.reportsUrl = params.reports_url;

    if (!params.supply) {
      throw new Error('No reports url configured in params');
    }
    this.supply = params.supply;
  }

  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    const status = await client.status();
    return status.syncInfo.latestBlockHeight;
  };

  getUsersBalances = async (
    _height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    let tradingFeesData: TradingFeesReport;

    try {
      const response = await fetch(
        `${this.reportsUrl}/${getYesterdayFormatted()}-trading-fees.json`,
      );
      if (!response.ok) {
        throw new Error(
          `HTTP error while fetching Levana trade fees, status: ${response.status}`,
        );
      }
      tradingFeesData = await response.json();
    } catch (error) {
      throw new Error(`Unexpected error while fetching Levana trade fees`);
    }

    const totalFees = tradingFeesData.wallets.reduce(
      (sum, wallet) => sum + parseFloat(wallet.trading_fees_in_usd),
      0,
    );

    const results = Object.entries(multipliers).flatMap(([assetId]) =>
      tradingFeesData.wallets.map((wallet) => ({
        address: wallet.wallet,
        balance: Math.round(
          (parseFloat(wallet.trading_fees_in_usd) / totalFees) * this.supply,
        ).toString(),
        asset: assetId,
      })),
    );
    cb(results);
  };
}
