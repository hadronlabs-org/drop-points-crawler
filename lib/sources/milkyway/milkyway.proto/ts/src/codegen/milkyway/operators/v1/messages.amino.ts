import { MsgRegisterOperator, MsgUpdateOperator, MsgDeactivateOperator, MsgReactivateOperator, MsgDeleteOperator, MsgTransferOperatorOwnership, MsgSetOperatorParams, MsgUpdateParams } from "./messages";
export const AminoConverter = {
  "/milkyway.operators.v1.MsgRegisterOperator": {
    aminoType: "milkyway/MsgRegisterOperator",
    toAmino: MsgRegisterOperator.toAmino,
    fromAmino: MsgRegisterOperator.fromAmino
  },
  "/milkyway.operators.v1.MsgUpdateOperator": {
    aminoType: "milkyway/MsgUpdateOperator",
    toAmino: MsgUpdateOperator.toAmino,
    fromAmino: MsgUpdateOperator.fromAmino
  },
  "/milkyway.operators.v1.MsgDeactivateOperator": {
    aminoType: "milkyway/MsgDeactivateOperator",
    toAmino: MsgDeactivateOperator.toAmino,
    fromAmino: MsgDeactivateOperator.fromAmino
  },
  "/milkyway.operators.v1.MsgReactivateOperator": {
    aminoType: "milkyway/MsgReactivateOperator",
    toAmino: MsgReactivateOperator.toAmino,
    fromAmino: MsgReactivateOperator.fromAmino
  },
  "/milkyway.operators.v1.MsgDeleteOperator": {
    aminoType: "milkyway/MsgDeleteOperator",
    toAmino: MsgDeleteOperator.toAmino,
    fromAmino: MsgDeleteOperator.fromAmino
  },
  "/milkyway.operators.v1.MsgTransferOperatorOwnership": {
    aminoType: "milkyway/MsgTransferOperatorOwnership",
    toAmino: MsgTransferOperatorOwnership.toAmino,
    fromAmino: MsgTransferOperatorOwnership.fromAmino
  },
  "/milkyway.operators.v1.MsgSetOperatorParams": {
    aminoType: "milkyway/MsgSetOperatorParams",
    toAmino: MsgSetOperatorParams.toAmino,
    fromAmino: MsgSetOperatorParams.fromAmino
  },
  "/milkyway.operators.v1.MsgUpdateParams": {
    aminoType: "milkyway/operators/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};