import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgJoinService, MsgLeaveService, MsgAddOperatorToAllowList, MsgRemoveOperatorFromAllowlist, MsgBorrowPoolSecurity, MsgCeasePoolSecurityBorrow, MsgDelegatePool, MsgDelegateOperator, MsgDelegateService, MsgUpdateParams, MsgUndelegatePool, MsgUndelegateOperator, MsgUndelegateService, MsgSetUserPreferences } from "./messages";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/milkyway.restaking.v1.MsgJoinService", MsgJoinService], ["/milkyway.restaking.v1.MsgLeaveService", MsgLeaveService], ["/milkyway.restaking.v1.MsgAddOperatorToAllowList", MsgAddOperatorToAllowList], ["/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlist", MsgRemoveOperatorFromAllowlist], ["/milkyway.restaking.v1.MsgBorrowPoolSecurity", MsgBorrowPoolSecurity], ["/milkyway.restaking.v1.MsgCeasePoolSecurityBorrow", MsgCeasePoolSecurityBorrow], ["/milkyway.restaking.v1.MsgDelegatePool", MsgDelegatePool], ["/milkyway.restaking.v1.MsgDelegateOperator", MsgDelegateOperator], ["/milkyway.restaking.v1.MsgDelegateService", MsgDelegateService], ["/milkyway.restaking.v1.MsgUpdateParams", MsgUpdateParams], ["/milkyway.restaking.v1.MsgUndelegatePool", MsgUndelegatePool], ["/milkyway.restaking.v1.MsgUndelegateOperator", MsgUndelegateOperator], ["/milkyway.restaking.v1.MsgUndelegateService", MsgUndelegateService], ["/milkyway.restaking.v1.MsgSetUserPreferences", MsgSetUserPreferences]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    joinService(value: MsgJoinService) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgJoinService",
        value: MsgJoinService.encode(value).finish()
      };
    },
    leaveService(value: MsgLeaveService) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgLeaveService",
        value: MsgLeaveService.encode(value).finish()
      };
    },
    addOperatorToAllowList(value: MsgAddOperatorToAllowList) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgAddOperatorToAllowList",
        value: MsgAddOperatorToAllowList.encode(value).finish()
      };
    },
    removeOperatorFromAllowlist(value: MsgRemoveOperatorFromAllowlist) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlist",
        value: MsgRemoveOperatorFromAllowlist.encode(value).finish()
      };
    },
    borrowPoolSecurity(value: MsgBorrowPoolSecurity) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgBorrowPoolSecurity",
        value: MsgBorrowPoolSecurity.encode(value).finish()
      };
    },
    ceasePoolSecurityBorrow(value: MsgCeasePoolSecurityBorrow) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrow",
        value: MsgCeasePoolSecurityBorrow.encode(value).finish()
      };
    },
    delegatePool(value: MsgDelegatePool) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgDelegatePool",
        value: MsgDelegatePool.encode(value).finish()
      };
    },
    delegateOperator(value: MsgDelegateOperator) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgDelegateOperator",
        value: MsgDelegateOperator.encode(value).finish()
      };
    },
    delegateService(value: MsgDelegateService) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgDelegateService",
        value: MsgDelegateService.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    undelegatePool(value: MsgUndelegatePool) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgUndelegatePool",
        value: MsgUndelegatePool.encode(value).finish()
      };
    },
    undelegateOperator(value: MsgUndelegateOperator) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgUndelegateOperator",
        value: MsgUndelegateOperator.encode(value).finish()
      };
    },
    undelegateService(value: MsgUndelegateService) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgUndelegateService",
        value: MsgUndelegateService.encode(value).finish()
      };
    },
    setUserPreferences(value: MsgSetUserPreferences) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgSetUserPreferences",
        value: MsgSetUserPreferences.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    joinService(value: MsgJoinService) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgJoinService",
        value
      };
    },
    leaveService(value: MsgLeaveService) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgLeaveService",
        value
      };
    },
    addOperatorToAllowList(value: MsgAddOperatorToAllowList) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgAddOperatorToAllowList",
        value
      };
    },
    removeOperatorFromAllowlist(value: MsgRemoveOperatorFromAllowlist) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlist",
        value
      };
    },
    borrowPoolSecurity(value: MsgBorrowPoolSecurity) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgBorrowPoolSecurity",
        value
      };
    },
    ceasePoolSecurityBorrow(value: MsgCeasePoolSecurityBorrow) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrow",
        value
      };
    },
    delegatePool(value: MsgDelegatePool) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgDelegatePool",
        value
      };
    },
    delegateOperator(value: MsgDelegateOperator) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgDelegateOperator",
        value
      };
    },
    delegateService(value: MsgDelegateService) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgDelegateService",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgUpdateParams",
        value
      };
    },
    undelegatePool(value: MsgUndelegatePool) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgUndelegatePool",
        value
      };
    },
    undelegateOperator(value: MsgUndelegateOperator) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgUndelegateOperator",
        value
      };
    },
    undelegateService(value: MsgUndelegateService) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgUndelegateService",
        value
      };
    },
    setUserPreferences(value: MsgSetUserPreferences) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgSetUserPreferences",
        value
      };
    }
  },
  fromPartial: {
    joinService(value: MsgJoinService) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgJoinService",
        value: MsgJoinService.fromPartial(value)
      };
    },
    leaveService(value: MsgLeaveService) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgLeaveService",
        value: MsgLeaveService.fromPartial(value)
      };
    },
    addOperatorToAllowList(value: MsgAddOperatorToAllowList) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgAddOperatorToAllowList",
        value: MsgAddOperatorToAllowList.fromPartial(value)
      };
    },
    removeOperatorFromAllowlist(value: MsgRemoveOperatorFromAllowlist) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlist",
        value: MsgRemoveOperatorFromAllowlist.fromPartial(value)
      };
    },
    borrowPoolSecurity(value: MsgBorrowPoolSecurity) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgBorrowPoolSecurity",
        value: MsgBorrowPoolSecurity.fromPartial(value)
      };
    },
    ceasePoolSecurityBorrow(value: MsgCeasePoolSecurityBorrow) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrow",
        value: MsgCeasePoolSecurityBorrow.fromPartial(value)
      };
    },
    delegatePool(value: MsgDelegatePool) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgDelegatePool",
        value: MsgDelegatePool.fromPartial(value)
      };
    },
    delegateOperator(value: MsgDelegateOperator) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgDelegateOperator",
        value: MsgDelegateOperator.fromPartial(value)
      };
    },
    delegateService(value: MsgDelegateService) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgDelegateService",
        value: MsgDelegateService.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    undelegatePool(value: MsgUndelegatePool) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgUndelegatePool",
        value: MsgUndelegatePool.fromPartial(value)
      };
    },
    undelegateOperator(value: MsgUndelegateOperator) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgUndelegateOperator",
        value: MsgUndelegateOperator.fromPartial(value)
      };
    },
    undelegateService(value: MsgUndelegateService) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgUndelegateService",
        value: MsgUndelegateService.fromPartial(value)
      };
    },
    setUserPreferences(value: MsgSetUserPreferences) {
      return {
        typeUrl: "/milkyway.restaking.v1.MsgSetUserPreferences",
        value: MsgSetUserPreferences.fromPartial(value)
      };
    }
  }
};