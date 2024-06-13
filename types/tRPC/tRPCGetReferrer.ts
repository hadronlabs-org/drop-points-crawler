import { z } from 'zod';

const tRPCGetReferrerRequestSchema = z.object({
  referralCode: z.string(),
});

const tRPCGetReferrerResponseSchema = z.object({
  address: z.string(),
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