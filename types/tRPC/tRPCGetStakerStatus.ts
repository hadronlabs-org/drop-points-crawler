import { z } from 'zod';

const tRPCGetStakerStatusRequestSchema = z.object({
  address: z.string(),
});

const tRPCGetStakerStatusResponseSchema = z.object({
  bonded: z.boolean(),
});

type tRPCGetStakerStatusRequest = {
  input: {
    address: string;
  };
};

type tRPCGetStakerStatusResponse = {
  bonded: boolean;
};

export {
  tRPCGetStakerStatusRequestSchema,
  tRPCGetStakerStatusResponseSchema,
  tRPCGetStakerStatusRequest,
  tRPCGetStakerStatusResponse,
};
