export type FlamePositionResponse =
  | {
      positions: FlamePosition[];
    }
  | undefined;

export type FlamePosition = {
  id: string;
  owner: string;
  pool: {
    id: string;
    token0: {
      symbol: string;
    };
    token1: {
      symbol: string;
    };
  };
  liquidity: string;
  depositedToken0: string;
  depositedToken1: string;
  withdrawnToken0: string;
  withdrawnToken1: string;
};
