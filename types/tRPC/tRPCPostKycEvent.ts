import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

const tRPCPostKycEventRequestSchema = z.object({
  address: z.string(),
  eventType: z.string(),
  additionalData: z.any().optional(),
});

const tRPCPostKycEventResponseSchema = z.object({ id: z.number() });

type tRPCPostKycEventRequest = {
  input: {
    address: string;
    eventType: string;
    additionalData?: unknown;
  };
};

type tRPCPostKycEventResponse = { id: number };

export {
  tRPCPostKycEventRequestSchema,
  tRPCPostKycEventResponseSchema,
  tRPCPostKycEventRequest,
  tRPCPostKycEventResponse,
};
