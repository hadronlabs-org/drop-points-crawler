export type UserBondsResponse =
  | {
      userBonds: {
        nodes: {
          id: string;
          ref: string;
          height: number;
          ts: string;
        }[];
      };
    }
  | undefined;
