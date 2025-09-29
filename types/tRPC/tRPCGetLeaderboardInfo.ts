import { z } from 'zod';

const leaderboardItemSchema = z.object({
  address: z.string(),
  place: z.number(),
  points: z.number(),
});

const tRPCGetLeaderboardInfoResponseSchema = z.array(leaderboardItemSchema);

type LeaderboardItem = {
  address: string;
  place: number;
  points: number;
};

type tRPCGetLeaderboardInfoResponse = LeaderboardItem[];

export { tRPCGetLeaderboardInfoResponseSchema, tRPCGetLeaderboardInfoResponse };
