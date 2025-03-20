import { z } from 'zod';

const tRPCDeleteDoMoreRequestSchema = z.object({
  id: z.number(),
});

const tRPCDeleteDoMoreResponseSchema = z.object({
  ok: z.boolean(),
});

type tRPCDeleteDoMoreResponse = {
  ok: boolean;
};
type tRPCDeleteDoMoreRequest = {
  input: { id: number };
};

export {
  tRPCDeleteDoMoreRequestSchema,
  tRPCDeleteDoMoreResponseSchema,
  tRPCDeleteDoMoreResponse,
  tRPCDeleteDoMoreRequest,
};
