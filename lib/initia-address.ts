import converter from 'bech32-converting';

export const toCosmosAddress = (hexAddress: string) =>
  converter('init').toBech32(hexAddress);

export const toHexAddress = (cosmosAddress: string): `0x${string}` =>
  converter('init').toHex(cosmosAddress) as `0x${string}`;
