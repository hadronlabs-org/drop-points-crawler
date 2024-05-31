import {
  tRPCPostKycRequest,
  tRPCPostKycResponse,
} from '../../../types/tRPCPostKyc';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';

const postKyc =
  (db: Database, logger: Logger) =>
  (req: tRPCPostKycRequest): tRPCPostKycResponse => {
    console.log(req);
    return { success: true };
  };

export { postKyc };
