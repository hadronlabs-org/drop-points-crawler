import { z } from 'zod';

const dropletRuleSchema = z.object({
  strategy: z.string(),
  description: z.string(),
  multiplier: z.number(),
  chain: z.string(),
  status: z.boolean(),
  link: z.string(),
  link_text: z.string(),
  type: z.string(),
});

export { dropletRuleSchema };
