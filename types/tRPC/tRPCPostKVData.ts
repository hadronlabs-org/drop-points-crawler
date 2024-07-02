import { z } from 'zod';

const tRPCPostKVDataRequestSchema = z.object({
  key: z.string(),
  value: z.string(),
});

const tRPCPostKVDataResponseSchema = z.boolean();

type tRPCPostKVDataRequest = {
  input: {
    key: string;
    value: string;
  };
};

type tRPCPostKVDataResponse = boolean;

export {
  tRPCPostKVDataRequestSchema,
  tRPCPostKVDataResponseSchema,
  tRPCPostKVDataRequest,
  tRPCPostKVDataResponse,
};
