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
  change: z.number(),
  place: z.number(),
  totalPlaces: z.number(),
});

type tRPCGetDropletsRequest = {
  input: {
    address: string;
  };
};

type tRPCGetDropletsResponse = {
  points: number;
  change: number;
  place: number;
  totalPlaces: number;
};

export {
  tRPCGetDropletsRequestSchema,
  tRPCGetDropletsRequest,
  tRPCGetDropletsResponse,
  tRPCGetDropletsResponseSchema,
};
