export type TradingFeesReport = {
  timestamp: string;
  wallets: {
    timestamp: string;
    trading_fees_in_usd: string;
    wallet: string;
  }[];
};
