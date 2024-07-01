import { z } from 'zod';

const tRPCGetKVDataRequestSchema = z.object({
  key: z.string(),
});

const tRPCGetKVDataResponseSchema = z.object({
  value: z.string(),
});

type tRPCGetKVDataRequest = {
  input: {
    key: string;
  };
};

type tRPCGetKVDataResponse = {
  value: string;
};

export {
  tRPCGetKVDataRequestSchema,
  tRPCGetKVDataResponseSchema,
  tRPCGetKVDataRequest,
  tRPCGetKVDataResponse,
};
