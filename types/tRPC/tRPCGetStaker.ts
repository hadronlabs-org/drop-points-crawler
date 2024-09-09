import { z } from 'zod';

const tRPCGetStakerRequestSchema = z.object({
  address: z.string(),
});

const tRPCGetStakerResponseSchema = z.object({
  bonded: z.boolean(),
});

type tRPCGetStakerRequest = {
  input: {
    address: string;
  };
};

type tRPCGetStakerResponse = {
  bonded: boolean;
};

export {
  tRPCGetStakerRequestSchema,
  tRPCGetStakerResponseSchema,
  tRPCGetStakerRequest,
  tRPCGetStakerResponse,
};
