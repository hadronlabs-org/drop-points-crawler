import { bech32 } from 'bech32';
export const toNeutronAddress = (address: string): string =>
  address.startsWith('neutron')
    ? address
    : bech32.encode('neutron', bech32.decode(address).words);
