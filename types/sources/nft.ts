import { CbOnUserTokens } from './cbOnUserTokens';

/* eslint-disable no-unused-vars */
export interface NFTSource {
  contract: string;
  getUsersTokens(
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserTokens,
  ): Promise<void>;
  getAllTokens(contract: string, height: number): Promise<string[]>;
}
