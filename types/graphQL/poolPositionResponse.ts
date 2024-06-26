export type PoolPositionResponse =
  | {
      poolPositions: {
        nodes: {
          id: string;
        }[];
      };
    }
  | undefined;
