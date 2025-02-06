import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCGetRankTableRequestSchema = z.object({
  address: neutronAddress,
});

const rankItemSchema = z.object({
  place: z.number(),
  points: z.number(),
  badgeType: z.enum(['bronze', 'silver', 'gold', 'platinum']),
});

const tRPCGetRankTableResponseSchema = z.object({
  items: z.array(rankItemSchema),
});

type tRPCGetRankTableRequest = {
  input: {
    address: string;
  };
};

type BadgeType = 'bronze' | 'silver' | 'gold' | 'platinum';

type RankItem = {
  place: number;
  points: number;
  badgeType: BadgeType;
};

type tRPCGetRankItemsResponse = {
  items: RankItem[];
};

export {
  RankItem,
  tRPCGetRankTableRequestSchema,
  tRPCGetRankTableResponseSchema,
  tRPCGetRankTableRequest,
  tRPCGetRankItemsResponse,
  BadgeType,
};
