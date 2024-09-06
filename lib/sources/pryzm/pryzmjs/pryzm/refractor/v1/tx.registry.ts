//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRefract, MsgRedeem } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pryzm.refractor.v1.MsgRefract", MsgRefract], ["/pryzm.refractor.v1.MsgRedeem", MsgRedeem]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    refract(value: MsgRefract) {
      return {
        typeUrl: "/pryzm.refractor.v1.MsgRefract",
        value: MsgRefract.encode(value).finish()
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/pryzm.refractor.v1.MsgRedeem",
        value: MsgRedeem.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    refract(value: MsgRefract) {
      return {
        typeUrl: "/pryzm.refractor.v1.MsgRefract",
        value
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/pryzm.refractor.v1.MsgRedeem",
        value
      };
    }
  },
  toJSON: {
    refract(value: MsgRefract) {
      return {
        typeUrl: "/pryzm.refractor.v1.MsgRefract",
        value: MsgRefract.toJSON(value)
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/pryzm.refractor.v1.MsgRedeem",
        value: MsgRedeem.toJSON(value)
      };
    }
  },
  fromJSON: {
    refract(value: any) {
      return {
        typeUrl: "/pryzm.refractor.v1.MsgRefract",
        value: MsgRefract.fromJSON(value)
      };
    },
    redeem(value: any) {
      return {
        typeUrl: "/pryzm.refractor.v1.MsgRedeem",
        value: MsgRedeem.fromJSON(value)
      };
    }
  },
  fromPartial: {
    refract(value: MsgRefract) {
      return {
        typeUrl: "/pryzm.refractor.v1.MsgRefract",
        value: MsgRefract.fromPartial(value)
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/pryzm.refractor.v1.MsgRedeem",
        value: MsgRedeem.fromPartial(value)
      };
    }
  }
};