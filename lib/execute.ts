import {
  ExecuteResult,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';
import { Logger } from 'pino';

const executeSetBalances = (
  signingClient: SigningCosmWasmClient,
  senderAddress: string,
  contractAddress: string,
  points: { address: string; points: number }[],
  gasAdjustment: number,
  logger: Logger<never>,
): Promise<ExecuteResult> => {
  const msg = {
    set_balances: {
      balances: points.map(({ address, points }) => [address, String(points)]),
    },
  };
  logger.debug(
    'Setting balances msg size: %o',
    Buffer.byteLength(JSON.stringify(msg)),
  );
  return signingClient.execute(
    senderAddress,
    contractAddress,
    msg,
    gasAdjustment || 1.5,
  );
};

export { executeSetBalances };
