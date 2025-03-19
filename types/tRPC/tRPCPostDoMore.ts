import { z } from 'zod';

const tRPCPostDoMoreRequestSchema = z.object({
  asset1: z.string(),
  asset2: z.string().optional(),
  description: z.string(),
  multiplier: z.number(),
  aprMin: z.number(),
  aprMax: z.number(),
  link: z.string(),
  order: z.number(),
});

const tRPCPostDoMoreResponseSchema = z.object({ id: z.number() });

type tRPCPostDoMoreRequest = {
  input: {
    asset1: string;
    asset2?: string;
    description: string;
    multiplier: number;
    aprMin: number;
    aprMax: number;
    link: string;
    order: number;
  };
};

type tRPCPostDoMoreResponse = {
  id: number;
};

export {
  tRPCPostDoMoreRequestSchema,
  tRPCPostDoMoreResponseSchema,
  tRPCPostDoMoreRequest,
  tRPCPostDoMoreResponse,
};
