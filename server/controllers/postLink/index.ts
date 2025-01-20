import { Database } from 'bun:sqlite';
import { Logger } from 'pino';
import { TRPCError } from '@trpc/server';
import {
  tRPCPostLinkRequest,
  tRPCPostLinkResponse,
} from '../../../types/tRPC/tRPCPostLink';
import { verifyMessage } from 'viem';
import { insertLinkRecord } from '../../../lib/link';
import { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc';

const ETHEREUM_NETWORK = 'ethereum';

function isHexString(value: string): value is `0x${string}` {
  return value.startsWith('0x');
}

const postLink =
  (db: Database, logger: Logger) =>
  async (req: tRPCPostLinkRequest): Promise<tRPCPostLinkResponse> => {
    const {
      input: { localAddress, remoteAddress, network, sign },
    } = req;

    if (network !== ETHEREUM_NETWORK) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'Invalid network',
      });
    }

    if (!isHexString(sign) || !isHexString(remoteAddress)) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'Invalid address or signature',
      });
    }

    const verified = await verifyMessage({
      message: localAddress,
      signature: sign,
      address: remoteAddress,
    });

    if (!verified) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'Invalid signature',
      });
    }

    try {
      insertLinkRecord(db, logger, localAddress, remoteAddress, network);
    } catch (e) {
      throw new TRPCError({
        code: (e as Error).cause as TRPC_ERROR_CODE_KEY,
        message: (e as Error).message,
      });
    }
    return true;
  };

export { postLink };
