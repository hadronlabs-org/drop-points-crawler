import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCGetReferralCodeRequestSchema = z.object({
  address: neutronAddress,
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
