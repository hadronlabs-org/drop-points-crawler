import { MsgMintLockedRepresentation, MsgBurnLockedRepresentation, MsgWithdrawInsuranceFund, MsgUpdateParams } from "./messages";
export const AminoConverter = {
  "/milkyway.liquidvesting.v1.MsgMintLockedRepresentation": {
    aminoType: "milkyway/MsgMintLockedRepresentation",
    toAmino: MsgMintLockedRepresentation.toAmino,
    fromAmino: MsgMintLockedRepresentation.fromAmino
  },
  "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentation": {
    aminoType: "milkyway/MsgBurnLockedRepresentation",
    toAmino: MsgBurnLockedRepresentation.toAmino,
    fromAmino: MsgBurnLockedRepresentation.fromAmino
  },
  "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFund": {
    aminoType: "milkyway/MsgWithdrawInsuranceFund",
    toAmino: MsgWithdrawInsuranceFund.toAmino,
    fromAmino: MsgWithdrawInsuranceFund.fromAmino
  },
  "/milkyway.liquidvesting.v1.MsgUpdateParams": {
    aminoType: "milkyway/liquidvesting/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};