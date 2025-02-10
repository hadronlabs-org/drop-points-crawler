import { z } from 'zod';

const tRPCGetBadgesRequestSchema = z.object({});

const tRPCGetBadgesResponseSchema = z.object({
  badges: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string().or(z.null()),
      mul: z.number(),
      params: z.any().or(z.null()),
    }),
  ),
});

type Badge = {
  id: string;
  name: string;
  description: string | null;
  mul: number;
  params: Record<string, unknown> | null;
};

type tRPCGetBadgesResponse = {
  badges: Badge[];
};

export {
  tRPCGetBadgesRequestSchema,
  tRPCGetBadgesResponse,
  tRPCGetBadgesResponseSchema,
};
