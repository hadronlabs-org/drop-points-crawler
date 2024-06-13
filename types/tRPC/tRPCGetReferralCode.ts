import { z } from 'zod';

const ALPHANUMERIC_REGEXP = /^[a-z\d]+$/;

const tRPCGetReferralCodeRequestSchema = z.object({
  address: z
    .string()
    .refine(
      (value) => ALPHANUMERIC_REGEXP.test(value),
      'Address should be alphanumeric',
    ),
});

const tRPCGetReferralCodeResponseSchema = z.object({
  referralCode: z.string(),
});

type tRPCGetReferralCodeRequest = {
  input: {
    address: string;
  };
};

type tRPCGetReferralCodeResponse = {
  referralCode: string;
};

export {
  tRPCGetReferralCodeRequestSchema,
  tRPCGetReferralCodeResponseSchema,
  tRPCGetReferralCodeRequest,
  tRPCGetReferralCodeResponse,
};
