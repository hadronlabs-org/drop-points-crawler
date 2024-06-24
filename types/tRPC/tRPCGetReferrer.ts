import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCGetReferrerRequestSchema = z.object({
  referralCode: z.string(),
});

const tRPCGetReferrerResponseSchema = z.object({
  address: neutronAddress,
});

type tRPCGetReferrerRequest = {
  input: {
    referralCode: string;
  };
};

type tRPCGetReferrerResponse = {
  address: string;
};

export {
  tRPCGetReferrerRequestSchema,
  tRPCGetReferrerResponseSchema,
  tRPCGetReferrerRequest,
  tRPCGetReferrerResponse,
};
