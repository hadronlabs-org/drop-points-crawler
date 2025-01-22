import { z } from 'zod';
import { neutronAddress } from './neutronAddress';

type tRPCGetNFTCollectionsRequest = {
  input: {
    address: string;
  };
};

const tRPCGetNFTCollectionsRequestSchema = z.object({
  address: neutronAddress,
});

const tRPCNFTCollectionSchema = z.object({
  collection: z.string(),
  multiplier: z.number(),
});

const tRPCGetNFTCollectionResponseSchema = z.object({
  collections: z.array(tRPCNFTCollectionSchema),
});

type tNFTCollection = {
  collection: string;
  multiplier: number;
};

type tRPCGetNFTCollectionsResponse = {
  collections: tNFTCollection[];
};

export {
  tRPCGetNFTCollectionsRequest,
  tRPCGetNFTCollectionsRequestSchema,
  tRPCGetNFTCollectionsResponse,
  tRPCGetNFTCollectionResponseSchema,
};
