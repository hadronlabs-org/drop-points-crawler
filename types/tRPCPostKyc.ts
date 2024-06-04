import { z } from 'zod';

const ALPHANUMERIC_REGEXP = /^[a-z\d]+$/;

const tRPCPostKycRequestSchema = z.object({
  address: z
    .string()
    .refine(
      (value) => ALPHANUMERIC_REGEXP.test(value),
      'Address should be alphanumeric',
    ),
});

const tRPCPostKycResponseSchema = z.object({ success: z.boolean() });

type tRPCPostKycRequest = {
  input: {
    address: string;
  };
};

type tRPCPostKycResponse = {
  success: boolean;
};

export {
  tRPCPostKycRequestSchema,
  tRPCPostKycResponseSchema,
  tRPCPostKycRequest,
  tRPCPostKycResponse,
};
