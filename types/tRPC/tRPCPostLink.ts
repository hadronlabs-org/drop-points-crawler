import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCPostLinkRequestSchema = z.object({
  localAddress: neutronAddress,
  remoteAddress: z.string(),
  sign: z.string(),
  network: z.string(),
});

const tRPCPostLinkResponseSchema = z.boolean();

type tRPCPostLinkRequest = {
  input: {
    remoteAddress: string;
    localAddress: string;
    sign: string;
    network: string;
  };
};

type tRPCPostLinkResponse = boolean;

export {
  tRPCPostLinkRequestSchema,
  tRPCPostLinkResponseSchema,
  tRPCPostLinkRequest,
  tRPCPostLinkResponse,
};
