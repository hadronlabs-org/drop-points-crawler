import { z } from 'zod';

const ALPHANUMERIC_REGEXP = /^[a-z\d]+$/;

const tRPCGetDropletsRequestSchema = z.object({
  address: z
    .string()
    .refine(
      (value) => ALPHANUMERIC_REGEXP.test(value),
      'Address should be alphanumeric',
    ),
});

const tRPCGetDropletsResponseSchema = z.object({
  points: z.number(),
  place: z.number(),
});

type tRPCGetDropletsRequest = {
  input: {
    address: string;
  };
};

type tRPCGetDropletsResponse = {
  points: number;
  place: number;
};

export {
  tRPCGetDropletsRequestSchema,
  tRPCGetDropletsRequest,
  tRPCGetDropletsResponse,
  tRPCGetDropletsResponseSchema,
};
