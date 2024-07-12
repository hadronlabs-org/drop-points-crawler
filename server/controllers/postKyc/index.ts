import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import { TRPCError } from '@trpc/server';
import {
  tRPCPostKycRequest,
  tRPCPostKycResponse,
} from '../../../types/tRPC/tRPCPostKyc';
import { insertKYCRecord } from '../../../lib/kyc';
import { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc';

const postKyc =
  (db: Database, logger: Logger) =>
  (req: tRPCPostKycRequest): tRPCPostKycResponse => {
    const {
      input: { address, kycId, kycProvider },
    } = req;

    let referralCode = '';
    try {
      referralCode = insertKYCRecord(db, logger, address, kycId, kycProvider);
    } catch (e) {
      throw new TRPCError({
        code: (e as Error).cause as TRPC_ERROR_CODE_KEY,
        message: (e as Error).message,
      });
    }
    return { referralCode };
  };

export { postKyc };
