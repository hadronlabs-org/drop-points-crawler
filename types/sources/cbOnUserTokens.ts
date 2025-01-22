/* eslint-disable no-unused-vars */
export type CbOnUserTokens = (
  tokens: { address: string; asset_id: string; amount: string }[],
) => void;
