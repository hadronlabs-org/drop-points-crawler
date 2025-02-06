import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCGetDropletsRequestSchema = z.object({
  address: neutronAddress,
  wave: z.optional(z.number().min(1).max(1)),
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
    wave?: number;
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
