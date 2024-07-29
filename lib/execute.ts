import {
  ExecuteResult,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { GasPrice } from '@cosmjs/stargate';

const executeContractWithAutoFee = (
  signingClient: SigningCosmWasmClient,
  senderAddress: string,
  contractAddress: string,
  msg: any,
): Promise<ExecuteResult> =>
  signingClient.execute(senderAddress, contractAddress, msg, 'auto');

const executeSetBalances = (
  signingClient: SigningCosmWasmClient,
  senderAddress: string,
  contractAddress: string,
  points: { address: string; points: number }[],
): Promise<ExecuteResult> => {
  const msg = {
    set_balances: {
      balances: points.map(({ address, points }) => [address, String(points)]),
    },
  };
  return executeContractWithAutoFee(
    signingClient,
    senderAddress,
    contractAddress,
    msg,
  );
};

export { executeSetBalances };
