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
  staked_astro_lps: { denom: string; amount: string }[];
  vaults: {
    vault: {
      address: string;
    };
    amount: {
      locking: {
        locked: string;
        unlocking: string[];
      };
    };
  }[];
}
