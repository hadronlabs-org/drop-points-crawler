import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgMintLockedRepresentation, MsgBurnLockedRepresentation, MsgWithdrawInsuranceFund, MsgUpdateParams } from "./messages";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/milkyway.liquidvesting.v1.MsgMintLockedRepresentation", MsgMintLockedRepresentation], ["/milkyway.liquidvesting.v1.MsgBurnLockedRepresentation", MsgBurnLockedRepresentation], ["/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFund", MsgWithdrawInsuranceFund], ["/milkyway.liquidvesting.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    mintLockedRepresentation(value: MsgMintLockedRepresentation) {
      return {
        typeUrl: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentation",
        value: MsgMintLockedRepresentation.encode(value).finish()
      };
    },
    burnLockedRepresentation(value: MsgBurnLockedRepresentation) {
      return {
        typeUrl: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentation",
        value: MsgBurnLockedRepresentation.encode(value).finish()
      };
    },
    withdrawInsuranceFund(value: MsgWithdrawInsuranceFund) {
      return {
        typeUrl: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFund",
        value: MsgWithdrawInsuranceFund.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.liquidvesting.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    mintLockedRepresentation(value: MsgMintLockedRepresentation) {
      return {
        typeUrl: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentation",
        value
      };
    },
    burnLockedRepresentation(value: MsgBurnLockedRepresentation) {
      return {
        typeUrl: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentation",
        value
      };
    },
    withdrawInsuranceFund(value: MsgWithdrawInsuranceFund) {
      return {
        typeUrl: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFund",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.liquidvesting.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    mintLockedRepresentation(value: MsgMintLockedRepresentation) {
      return {
        typeUrl: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentation",
        value: MsgMintLockedRepresentation.fromPartial(value)
      };
    },
    burnLockedRepresentation(value: MsgBurnLockedRepresentation) {
      return {
        typeUrl: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentation",
        value: MsgBurnLockedRepresentation.fromPartial(value)
      };
    },
    withdrawInsuranceFund(value: MsgWithdrawInsuranceFund) {
      return {
        typeUrl: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFund",
        value: MsgWithdrawInsuranceFund.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.liquidvesting.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};