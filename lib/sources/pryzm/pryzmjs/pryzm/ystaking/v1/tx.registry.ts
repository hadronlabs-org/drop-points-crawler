//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBond, MsgUnbond, MsgClaimReward, MsgExitPool } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pryzm.ystaking.v1.MsgBond", MsgBond], ["/pryzm.ystaking.v1.MsgUnbond", MsgUnbond], ["/pryzm.ystaking.v1.MsgClaimReward", MsgClaimReward], ["/pryzm.ystaking.v1.MsgExitPool", MsgExitPool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgBond",
        value: MsgBond.encode(value).finish()
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgUnbond",
        value: MsgUnbond.encode(value).finish()
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgClaimReward",
        value: MsgClaimReward.encode(value).finish()
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgExitPool",
        value: MsgExitPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgBond",
        value
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgUnbond",
        value
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgClaimReward",
        value
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgExitPool",
        value
      };
    }
  },
  toJSON: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgBond",
        value: MsgBond.toJSON(value)
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgUnbond",
        value: MsgUnbond.toJSON(value)
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgClaimReward",
        value: MsgClaimReward.toJSON(value)
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgExitPool",
        value: MsgExitPool.toJSON(value)
      };
    }
  },
  fromJSON: {
    bond(value: any) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgBond",
        value: MsgBond.fromJSON(value)
      };
    },
    unbond(value: any) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgUnbond",
        value: MsgUnbond.fromJSON(value)
      };
    },
    claimReward(value: any) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgClaimReward",
        value: MsgClaimReward.fromJSON(value)
      };
    },
    exitPool(value: any) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgExitPool",
        value: MsgExitPool.fromJSON(value)
      };
    }
  },
  fromPartial: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgBond",
        value: MsgBond.fromPartial(value)
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgUnbond",
        value: MsgUnbond.fromPartial(value)
      };
    },
    claimReward(value: MsgClaimReward) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgClaimReward",
        value: MsgClaimReward.fromPartial(value)
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/pryzm.ystaking.v1.MsgExitPool",
        value: MsgExitPool.fromPartial(value)
      };
    }
  }
};