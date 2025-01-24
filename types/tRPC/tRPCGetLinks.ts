import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCGetLinksRequestSchema = z.object({
  address: neutronAddress,
});

const tRPCGetLinksResponseSchema = z.array(
  z.object({
    network: z.string(),
    address: z.string(),
  }),
);

type tRPCGetLinksRequest = {
  input: {
    address: string;
  };
};

type tRPCGetLinksResponse = {
  network: string;
  address: string;
}[];

export {
  tRPCGetLinksRequestSchema,
  tRPCGetLinksRequest,
  tRPCGetLinksResponse,
  tRPCGetLinksResponseSchema,
};
