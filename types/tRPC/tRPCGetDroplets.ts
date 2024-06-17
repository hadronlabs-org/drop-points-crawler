import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCGetDropletsRequestSchema = z.object({
  address: neutronAddress,
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
