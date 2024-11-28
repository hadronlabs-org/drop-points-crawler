import { Logger } from 'pino';
import { TRPCError } from '@trpc/server';
import {
  tRPCPostKycRequest,
  tRPCPostKycResponse,
} from '../../../types/tRPC/tRPCPostKyc';
import { insertKYCRecord } from '../../../lib/kyc';
import { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc';
import { connect } from '../../../db';

const postKyc =
  (config: any, logger: Logger) =>
  async (req: tRPCPostKycRequest): Promise<tRPCPostKycResponse> => {
    const db = await connect(true, config, logger);

    const {
      input: { address, kycId, kycProvider },
    } = req;

    let referralCode = '';
    try {
      referralCode = await insertKYCRecord(
        db,
        logger,
        address,
        kycId,
        kycProvider,
      );
    } catch (e) {
      throw new TRPCError({
        code: (e as Error).cause as TRPC_ERROR_CODE_KEY,
        message: (e as Error).message,
      });
    } finally {
      await db.end();
    }

    return { referralCode };
  };

export { postKyc };
