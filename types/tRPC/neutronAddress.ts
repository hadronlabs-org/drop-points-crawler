import { z } from 'zod';
import { bech32 } from 'bech32';

const neutronAddress = z.string().refine((value) => {
  const { prefix } = bech32.decode(value);
  return prefix === 'neutron';
}, 'Address should be valid Neutron address');

export { neutronAddress };
