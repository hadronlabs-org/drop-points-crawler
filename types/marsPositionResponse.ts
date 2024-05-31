export interface MarsPositionResponse {
  account_id: string;
  debts: {
    amount: string;
    denom: string;
    shares: string;
  }[];
  deposits: {
    amount: string;
    denom: string;
  }[];
  lends: {
    amount: string;
    denom: string;
  }[];
}
