import { MsgJoinService, MsgLeaveService, MsgAddOperatorToAllowList, MsgRemoveOperatorFromAllowlist, MsgBorrowPoolSecurity, MsgCeasePoolSecurityBorrow, MsgDelegatePool, MsgDelegateOperator, MsgDelegateService, MsgUpdateParams, MsgUndelegatePool, MsgUndelegateOperator, MsgUndelegateService, MsgSetUserPreferences } from "./messages";
export const AminoConverter = {
  "/milkyway.restaking.v1.MsgJoinService": {
    aminoType: "milkyway/MsgJoinService",
    toAmino: MsgJoinService.toAmino,
    fromAmino: MsgJoinService.fromAmino
  },
  "/milkyway.restaking.v1.MsgLeaveService": {
    aminoType: "milkyway/MsgLeaveService",
    toAmino: MsgLeaveService.toAmino,
    fromAmino: MsgLeaveService.fromAmino
  },
  "/milkyway.restaking.v1.MsgAddOperatorToAllowList": {
    aminoType: "milkyway/MsgAddOperatorToAllowList",
    toAmino: MsgAddOperatorToAllowList.toAmino,
    fromAmino: MsgAddOperatorToAllowList.fromAmino
  },
  "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlist": {
    aminoType: "milkyway/MsgRemoveOperatorFromAllowlist",
    toAmino: MsgRemoveOperatorFromAllowlist.toAmino,
    fromAmino: MsgRemoveOperatorFromAllowlist.fromAmino
  },
  "/milkyway.restaking.v1.MsgBorrowPoolSecurity": {
    aminoType: "milkyway/MsgBorrowPoolSecurity",
    toAmino: MsgBorrowPoolSecurity.toAmino,
    fromAmino: MsgBorrowPoolSecurity.fromAmino
  },
  "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrow": {
    aminoType: "milkyway/MsgCeasePoolSecurityBorrow",
    toAmino: MsgCeasePoolSecurityBorrow.toAmino,
    fromAmino: MsgCeasePoolSecurityBorrow.fromAmino
  },
  "/milkyway.restaking.v1.MsgDelegatePool": {
    aminoType: "milkyway/MsgDelegatePool",
    toAmino: MsgDelegatePool.toAmino,
    fromAmino: MsgDelegatePool.fromAmino
  },
  "/milkyway.restaking.v1.MsgDelegateOperator": {
    aminoType: "milkyway/MsgDelegateOperator",
    toAmino: MsgDelegateOperator.toAmino,
    fromAmino: MsgDelegateOperator.fromAmino
  },
  "/milkyway.restaking.v1.MsgDelegateService": {
    aminoType: "milkyway/MsgDelegateService",
    toAmino: MsgDelegateService.toAmino,
    fromAmino: MsgDelegateService.fromAmino
  },
  "/milkyway.restaking.v1.MsgUpdateParams": {
    aminoType: "milkyway/restaking/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/milkyway.restaking.v1.MsgUndelegatePool": {
    aminoType: "milkyway/MsgUndelegatePool",
    toAmino: MsgUndelegatePool.toAmino,
    fromAmino: MsgUndelegatePool.fromAmino
  },
  "/milkyway.restaking.v1.MsgUndelegateOperator": {
    aminoType: "milkyway/MsgUndelegateOperator",
    toAmino: MsgUndelegateOperator.toAmino,
    fromAmino: MsgUndelegateOperator.fromAmino
  },
  "/milkyway.restaking.v1.MsgUndelegateService": {
    aminoType: "milkyway/MsgUndelegateService",
    toAmino: MsgUndelegateService.toAmino,
    fromAmino: MsgUndelegateService.fromAmino
  },
  "/milkyway.restaking.v1.MsgSetUserPreferences": {
    aminoType: "milkyway/MsgSetUserPreferences",
    toAmino: MsgSetUserPreferences.toAmino,
    fromAmino: MsgSetUserPreferences.fromAmino
  }
};