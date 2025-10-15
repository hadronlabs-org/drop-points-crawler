import { z } from 'zod';

const tRPCGetTVLRequestSchema = z.object({
  asset: z.string(),
});

const tRPCGetTVLResponseSchema = z.string();

type tRPCGetTVLRequest = {
  input: {
    asset: string;
  };
};

type tRPCGetTVLResponse = string;

export {
  tRPCGetTVLRequestSchema,
  tRPCGetTVLRequest,
  tRPCGetTVLResponse,
  tRPCGetTVLResponseSchema,
};
