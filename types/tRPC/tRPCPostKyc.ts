import { z } from 'zod';

const ALPHANUMERIC_REGEXP = /^[a-z\d]+$/;

const tRPCPostKycRequestSchema = z.object({
  address: z
    .string()
    .refine(
      (value) => ALPHANUMERIC_REGEXP.test(value),
      'Address should be alphanumeric',
    ),
  kycId: z.string(),
  kycProvider: z.string(),
});

const tRPCPostKycResponseSchema = z.object({ referralCode: z.string() });

type tRPCPostKycRequest = {
  input: {
    address: string;
    kycId: string;
    kycProvider: string;
  };
};

type tRPCPostKycResponse = {
  referralCode: string;
};

export {
  tRPCPostKycRequestSchema,
  tRPCPostKycResponseSchema,
  tRPCPostKycRequest,
  tRPCPostKycResponse,
};
