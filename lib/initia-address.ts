import converter from 'bech32-converting';

export const toInitiaAddress = (hexAddress: string) =>
  converter('init').toBech32(hexAddress);

export const evmToHexDenom = (initiaDenom: string) => {
  const prefix = 'evm/';
  if (initiaDenom.startsWith(prefix)) {
    const hexPart = initiaDenom.slice(prefix.length);
    return `0x${hexPart}`;
  }
  throw new Error('Invalid input format: must start with "evm/"');
};
