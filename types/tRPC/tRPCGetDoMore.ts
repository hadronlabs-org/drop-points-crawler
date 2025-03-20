import { z } from 'zod';

const tRPCGetDoMoreResponseSchema = z.array(
  z.object({
    id: z.number(),
    asset1: z.string(),
    asset2: z.string().or(z.null()),
    description: z.string(),
    multiplier: z.number(),
    aprMin: z.number(),
    aprMax: z.number(),
    link: z.string(),
    order: z.number(),
  }),
);

type tRPCGetDoMoreResponse = {
  id: number;
  asset1: string;
  asset2: string | null;
  description: string;
  multiplier: number;
  aprMin: number;
  aprMax: number;
  link: string;
  order: number;
}[];

export { tRPCGetDoMoreResponseSchema, tRPCGetDoMoreResponse };
