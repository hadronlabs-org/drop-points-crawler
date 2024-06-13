export type UserBalancesResponse =
  | {
      userBalances: {
        nodes: {
          id: string;
          balance: string;
        }[];
      };
    }
  | undefined;
