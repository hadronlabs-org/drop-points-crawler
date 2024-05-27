/* eslint-disable no-unused-vars */
import { Logger } from 'pino';
import { CbOnUserBalances } from './cbOnUserBalances';

export interface SourceInterface {
  logger: Logger<never>;
  getLastBlockHeight(): Promise<number>;
  getUsersBalances(height: number, cb: CbOnUserBalances): Promise<void>;
}
