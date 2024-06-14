import { z } from 'zod';
import { bech32 } from 'bech32';

const ALPHANUMERIC_REGEXP = /^[a-z\d]+$/;

const neutronAddress = z.string().refine((value) => {
  const { prefix, words } = bech32.decode(value);
  return prefix === 'neutron';
}, 'Address should be valid Neutron address');

export { neutronAddress };
