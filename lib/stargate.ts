import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { GasPrice } from '@cosmjs/stargate';

const getSigningCosmWasmClient = async (
  rpcEndpoint: string,
  gasPrice: string,
  mnemonic: string,
) => {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: 'neutron',
  });

  return await SigningCosmWasmClient.connectWithSigner(rpcEndpoint, wallet, {
    gasPrice: GasPrice.fromString(gasPrice),
  });
};

export { getSigningCosmWasmClient };
