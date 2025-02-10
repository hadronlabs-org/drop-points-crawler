import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCGetUserBadgesRequestSchema = z.object({
  address: neutronAddress,
});

const tRPCGetUserBadgesResponseSchema = z.array(z.string());

type tRPCGetUserBadgesRequest = {
  input: {
    address: string;
  };
};

type tRPCGetUserBadgesResponse = string[];

export {
  tRPCGetUserBadgesRequestSchema,
  tRPCGetUserBadgesRequest,
  tRPCGetUserBadgesResponse,
  tRPCGetUserBadgesResponseSchema,
};
