import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCGetReferralsRequestSchema = z.object({
  address: neutronAddress,
});

const referralSchema = z.object({
  address: neutronAddress,
  level: z.number(),
  percent: z.number(),
});

const tRPCGetReferralsResponseSchema = z.object({
  referrals: z.array(referralSchema),
});

type tRPCGetReferralsRequest = {
  input: {
    address: string;
  };
};

type Referral = {
  address: string;
  level: number;
  percent: number;
};

type tRPCGetReferralsResponse = {
  referrals: Referral[];
};

export {
  tRPCGetReferralsRequestSchema,
  tRPCGetReferralsResponseSchema,
  tRPCGetReferralsRequest,
  tRPCGetReferralsResponse,
};
