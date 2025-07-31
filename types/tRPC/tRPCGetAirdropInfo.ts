import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCGetAirdropInfoRequestSchema = z.object({
  address: neutronAddress,
});

const rankSchema = z.object({
  address: z.string().or(z.null()),
  place: z.number(),
  points: z.number(),
});

const tRPCGetAirdropInfoResponseSchema = z.object({
  ranking: z.array(rankSchema),
  totalRows: z.number(),
});

type tRPCGetAirdropInfoRequest = {
  input: {
    address: string;
  };
};

type RankItem = {
  address: string | null;
  place: number;
  points: number;
};

type tRPCGetAirdropInfoResponse = {
  ranking: RankItem[];
  totalRows: number;
};

export {
  tRPCGetAirdropInfoRequestSchema,
  tRPCGetAirdropInfoResponseSchema,
  tRPCGetAirdropInfoRequest,
  tRPCGetAirdropInfoResponse,
};
