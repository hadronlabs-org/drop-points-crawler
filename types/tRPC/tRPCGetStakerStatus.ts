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

const TESTNET_ENVIRONMENT = 'testnet';
const MAINNET_ENVIRONMENT = 'mainnet';

export {
  tRPCGetStakerStatusRequestSchema,
  tRPCGetStakerStatusResponseSchema,
  tRPCGetStakerStatusRequest,
  tRPCGetStakerStatusResponse,
  TESTNET_ENVIRONMENT,
  MAINNET_ENVIRONMENT,
};
