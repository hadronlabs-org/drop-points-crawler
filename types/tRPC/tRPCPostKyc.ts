import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCPostKycRequestSchema = z.object({
  address: neutronAddress,
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
