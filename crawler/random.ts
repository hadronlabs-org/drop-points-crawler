import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import seedrandom from 'seedrandom';

const getTrueRandom = () => Math.random();

const uint8ArrayToHex = (array: Uint8Array): string =>
  Array.from(array)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');

const getPseudoRandom = async (neutronRpc: string) => {
  if (!neutronRpc) {
    throw new Error('neutron RPC is not specified!');
  }

  const client = await Tendermint34Client.connect(neutronRpc);
  const status = await client.status();

  const blockHeight = Math.floor(status.syncInfo.latestBlockHeight / 100) * 100;
  const block = await client.block(blockHeight);
  const blockHash = block?.blockId?.hash;
  const hexHash = blockHash ? uint8ArrayToHex(blockHash) : undefined;

  client.disconnect();

  const rng = seedrandom(hexHash);
  return rng();
};

export { getTrueRandom, getPseudoRandom };
