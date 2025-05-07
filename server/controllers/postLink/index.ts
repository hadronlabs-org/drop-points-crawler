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
import { toHexAddress } from '../../../lib/initia-address';

const ETHEREUM_NETWORK = 'ethereum';
const INITIA_NETWORK = 'initia';

function isHexString(value: string): value is `0x${string}` {
  return value.startsWith('0x');
}

function isInitiaString(value: string): boolean {
  return value.startsWith('init');
}

function validateEthereumAddress(
  localAddress: string,
  remoteAddress: string,
  sign: string,
): Promise<boolean> {
  if (!isHexString(sign) || !isHexString(remoteAddress)) {
    throw new TRPCError({
      code: 'CONFLICT',
      message: 'Invalid address or signature',
    });
  }

  return verifyMessage({
    message: localAddress,
    signature: sign,
    address: remoteAddress,
  });
}

function validateInitiaAddress(
  localAddress: string,
  remoteAddress: string,
  sign: string,
): Promise<boolean> {
  if (!isHexString(sign) || !isInitiaString(remoteAddress)) {
    throw new TRPCError({
      code: 'CONFLICT',
      message: 'Invalid address or signature',
    });
  }

  return verifyMessage({
    message: localAddress,
    signature: sign,
    address: toHexAddress(remoteAddress),
  });
}

const postLink =
  (db: Database, logger: Logger) =>
  async (req: tRPCPostLinkRequest): Promise<tRPCPostLinkResponse> => {
    const {
      input: { localAddress, remoteAddress, network, sign },
    } = req;

    if (network !== ETHEREUM_NETWORK && network !== INITIA_NETWORK) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'Invalid network',
      });
    }

    let verified = false;

    switch (network) {
      case ETHEREUM_NETWORK:
        verified = await validateEthereumAddress(
          localAddress,
          remoteAddress,
          sign,
        );
        break;
      case INITIA_NETWORK:
        verified = await validateInitiaAddress(
          localAddress,
          remoteAddress,
          sign,
        );
        break;
      default:
        throw new TRPCError({ code: 'CONFLICT', message: 'Invalid network' });
    }

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
