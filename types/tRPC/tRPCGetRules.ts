import { z } from 'zod';

const tRPCDropletRuleSchema = z.object({
  strategy: z.string(),
  description: z.string(),
  dropRate: z.number(),
  chain: z.string(),
  status: z.boolean(),
  link: z.string(),
  linkText: z.string(),
  type: z.string(),
  featured: z.boolean(),
});

const tRPCGetRulesResponseSchema = z.object({
  rules: z.array(tRPCDropletRuleSchema),
});

type tRPCRule = {
  strategy: string;
  description: string;
  dropRate: number;
  chain: string;
  status: boolean;
  link: string;
  linkText: string;
  type: string;
  featured: boolean;
};

type tRPCGetRulesResponse = {
  rules: tRPCRule[];
};

export { tRPCRule, tRPCGetRulesResponseSchema, tRPCGetRulesResponse };
