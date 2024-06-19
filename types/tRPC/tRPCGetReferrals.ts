import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCGetReferralsRequestSchema = z.object({
  address: neutronAddress,
});

const tRPCGetReferralsResponseSchema = z.object({
  referrals: z.array(neutronAddress),
});

type tRPCGetReferralsRequest = {
  input: {
    address: string;
  };
};

type tRPCGetReferralsResponse = {
  referrals: string[];
};

export {
  tRPCGetReferralsRequestSchema,
  tRPCGetReferralsResponseSchema,
  tRPCGetReferralsRequest,
  tRPCGetReferralsResponse,
};
