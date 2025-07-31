import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCGetRankTableRequestSchema = z.object({
  address: neutronAddress,
});

const rankItemSchema = z.object({
  address: z.string().or(z.null()),
  place: z.number(),
  points: z.number(),
  badges: z.array(z.string()),
});

const tRPCGetRankTableResponseSchema = z.object({
  items: z.array(rankItemSchema),
  totalRows: z.number(),
});

type tRPCGetRankTableRequest = {
  input: {
    address: string;
  };
};

type RankItem = {
  address: string | null;
  place: number;
  points: number;
  badges: string[];
};

type tRPCGetRankItemsResponse = {
  items: RankItem[];
  totalRows: number;
};

export {
  tRPCGetRankTableRequestSchema,
  tRPCGetRankTableResponseSchema,
  tRPCGetRankTableRequest,
  tRPCGetRankItemsResponse,
};
