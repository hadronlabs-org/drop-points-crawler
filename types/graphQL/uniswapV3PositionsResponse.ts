export type UniswapV3PositionResponse =
  | {
      positions: UniswapV3Position[];
    }
  | undefined;

export type UniswapV3Position = {
  id: string;
  owner: string;
  pool: {
    id: string;
    sqrtPrice: string;
    tick: string;
    token0: {
      symbol: string;
      decimals: string;
    };
    token1: {
      symbol: string;
      decimals: string;
    };
  };
  liquidity: string;
  depositedToken0: string;
  depositedToken1: string;
  withdrawnToken0: string;
  withdrawnToken1: string;
  tickLower: {
    tickIdx: string;
    feeGrowthOutside0X128: string;
    feeGrowthOutside1X128: string;
  };
  tickUpper: {
    tickIdx: string;
    feeGrowthOutside0X128: string;
    feeGrowthOutside1X128: string;
  };
};
