import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface OrderParameters {
  stepMatchingFeeRatio: string;
  stepSwapFeeRatio: string;
  matchingProtocolFeeRatio: string;
  matchingSolverFeeRatio: string;
  maxOrdersPerBlock: number;
  maxSchedulePerBlock: number;
  maxExecOrderTradeRatio: string;
  maxOrderStepRatio: string;
  minOrderStepRatio: string;
  minOrderStepMillisInterval: bigint;
  maxOrderStepMillisInterval: bigint;
  maxPairsPerBlock: number;
  maxOrdersPerPair: number;
}
export interface OrderParametersProtoMsg {
  typeUrl: "/pryzm.amm.v1.OrderParameters";
  value: Uint8Array;
}
export interface OrderParametersAmino {
  step_matching_fee_ratio?: string;
  step_swap_fee_ratio?: string;
  matching_protocol_fee_ratio?: string;
  matching_solver_fee_ratio?: string;
  max_orders_per_block: number;
  max_schedule_per_block: number;
  max_exec_order_trade_ratio?: string;
  max_order_step_ratio?: string;
  min_order_step_ratio?: string;
  min_order_step_millis_interval?: string;
  max_order_step_millis_interval?: string;
  max_pairs_per_block?: number;
  max_orders_per_pair?: number;
}
export interface OrderParametersAminoMsg {
  type: "/pryzm.amm.v1.OrderParameters";
  value: OrderParametersAmino;
}
export interface OrderParametersSDKType {
  step_matching_fee_ratio: string;
  step_swap_fee_ratio: string;
  matching_protocol_fee_ratio: string;
  matching_solver_fee_ratio: string;
  max_orders_per_block: number;
  max_schedule_per_block: number;
  max_exec_order_trade_ratio: string;
  max_order_step_ratio: string;
  min_order_step_ratio: string;
  min_order_step_millis_interval: bigint;
  max_order_step_millis_interval: bigint;
  max_pairs_per_block: number;
  max_orders_per_pair: number;
}
export interface YammParameters {
  lambda: string;
  /** duration (milliseconds) for virtual balance when adding new pAssets to yamm pools */
  maturityIntroductionIntervalMillis: bigint;
  maturityExpirationIntervalMillis: bigint;
  introductionVirtualBalanceScaler: string;
  expirationVirtualBalanceScaler: string;
  buyYGivenInLoanFeeRatio: string;
  sellYGivenOutFeeRatio: string;
  maxAlpha: string;
  /**
   * this will be set to newly created yamm pools
   * if not empty, only these addresses can initialize the pools
   */
  defaultInitializationAllowList: string[];
  avgMonthlyYieldRate: string;
  yieldFeeScaler: string;
  /** this will be set to newly created yamm pools */
  defaultAdmins: string[];
  /** this will be set to newly created yamm pools */
  defaultPauseAllowList: string[];
  /** this will be set to newly created yamm pools */
  defaultPauseWindowDurationMillis: bigint;
  /** this will be set to newly created yamm pools */
  defaultPauseBufferDurationMillis: bigint;
}
export interface YammParametersProtoMsg {
  typeUrl: "/pryzm.amm.v1.YammParameters";
  value: Uint8Array;
}
export interface YammParametersAmino {
  lambda?: string;
  /** duration (milliseconds) for virtual balance when adding new pAssets to yamm pools */
  maturity_introduction_interval_millis: string;
  maturity_expiration_interval_millis: string;
  introduction_virtual_balance_scaler?: string;
  expiration_virtual_balance_scaler?: string;
  buy_y_given_in_loan_fee_ratio?: string;
  sell_y_given_out_fee_ratio?: string;
  max_alpha?: string;
  /**
   * this will be set to newly created yamm pools
   * if not empty, only these addresses can initialize the pools
   */
  default_initialization_allow_list: string[];
  avg_monthly_yield_rate?: string;
  yield_fee_scaler?: string;
  /** this will be set to newly created yamm pools */
  default_admins: string[];
  /** this will be set to newly created yamm pools */
  default_pause_allow_list: string[];
  /** this will be set to newly created yamm pools */
  default_pause_window_duration_millis: string;
  /** this will be set to newly created yamm pools */
  default_pause_buffer_duration_millis: string;
}
export interface YammParametersAminoMsg {
  type: "/pryzm.amm.v1.YammParameters";
  value: YammParametersAmino;
}
export interface YammParametersSDKType {
  lambda: string;
  maturity_introduction_interval_millis: bigint;
  maturity_expiration_interval_millis: bigint;
  introduction_virtual_balance_scaler: string;
  expiration_virtual_balance_scaler: string;
  buy_y_given_in_loan_fee_ratio: string;
  sell_y_given_out_fee_ratio: string;
  max_alpha: string;
  default_initialization_allow_list: string[];
  avg_monthly_yield_rate: string;
  yield_fee_scaler: string;
  default_admins: string[];
  default_pause_allow_list: string[];
  default_pause_window_duration_millis: bigint;
  default_pause_buffer_duration_millis: bigint;
}
export interface GeneralPoolParameters {
  allowPublicPoolCreation: boolean;
  defaultSwapFeeRatio: string;
  swapProtocolFeeRatio: string;
  joinExitProtocolFeeRatio: string;
}
export interface GeneralPoolParametersProtoMsg {
  typeUrl: "/pryzm.amm.v1.GeneralPoolParameters";
  value: Uint8Array;
}
export interface GeneralPoolParametersAmino {
  allow_public_pool_creation: boolean;
  default_swap_fee_ratio?: string;
  swap_protocol_fee_ratio?: string;
  join_exit_protocol_fee_ratio?: string;
}
export interface GeneralPoolParametersAminoMsg {
  type: "/pryzm.amm.v1.GeneralPoolParameters";
  value: GeneralPoolParametersAmino;
}
export interface GeneralPoolParametersSDKType {
  allow_public_pool_creation: boolean;
  default_swap_fee_ratio: string;
  swap_protocol_fee_ratio: string;
  join_exit_protocol_fee_ratio: string;
}
export interface AuthorizationParameters {
  adminList: string[];
  /**
   * can pause the vault and also set pools to paused_by_gov mode which
   * is a special mode where only the gov can unpause and does not have a window
   * these cannot unpause anything
   */
  pauseAllowList: string[];
}
export interface AuthorizationParametersProtoMsg {
  typeUrl: "/pryzm.amm.v1.AuthorizationParameters";
  value: Uint8Array;
}
export interface AuthorizationParametersAmino {
  admin_list: string[];
  /**
   * can pause the vault and also set pools to paused_by_gov mode which
   * is a special mode where only the gov can unpause and does not have a window
   * these cannot unpause anything
   */
  pause_allow_list: string[];
}
export interface AuthorizationParametersAminoMsg {
  type: "/pryzm.amm.v1.AuthorizationParameters";
  value: AuthorizationParametersAmino;
}
export interface AuthorizationParametersSDKType {
  admin_list: string[];
  pause_allow_list: string[];
}
export interface GasParameters {
  /** gas for swapping in a pool */
  vaultSwap: bigint;
  /** gas for initializing a pool */
  vaultInitializePool: bigint;
  /** gas for join pool */
  vaultJoin: bigint;
  /** gas for exit pool */
  vaultExit: bigint;
  /** gas for recovery exit */
  vaultRecoveryExit: bigint;
  /** gas for each step of batch swap */
  vaultBatchSwapStep: bigint;
  /** gas for creating a new weighted pool */
  createWeightedPool: bigint;
  /** gas for submitting a new order */
  submitOrder: bigint;
  /** gas for each order in match proposal */
  proposalMatchOrder: bigint;
}
export interface GasParametersProtoMsg {
  typeUrl: "/pryzm.amm.v1.GasParameters";
  value: Uint8Array;
}
export interface GasParametersAmino {
  /** gas for swapping in a pool */
  vault_swap?: string;
  /** gas for initializing a pool */
  vault_initialize_pool?: string;
  /** gas for join pool */
  vault_join?: string;
  /** gas for exit pool */
  vault_exit?: string;
  /** gas for recovery exit */
  vault_recovery_exit?: string;
  /** gas for each step of batch swap */
  vault_batch_swap_step?: string;
  /** gas for creating a new weighted pool */
  create_weighted_pool?: string;
  /** gas for submitting a new order */
  submit_order?: string;
  /** gas for each order in match proposal */
  proposal_match_order?: string;
}
export interface GasParametersAminoMsg {
  type: "/pryzm.amm.v1.GasParameters";
  value: GasParametersAmino;
}
export interface GasParametersSDKType {
  vault_swap: bigint;
  vault_initialize_pool: bigint;
  vault_join: bigint;
  vault_exit: bigint;
  vault_recovery_exit: bigint;
  vault_batch_swap_step: bigint;
  create_weighted_pool: bigint;
  submit_order: bigint;
  proposal_match_order: bigint;
}
/** Params defines the parameters for the module. */
export interface Params {
  generalPoolParameters: GeneralPoolParameters;
  yammParameters: YammParameters;
  orderParameters: OrderParameters;
  authorizationParameters: AuthorizationParameters;
  gasParameters: GasParameters;
}
export interface ParamsProtoMsg {
  typeUrl: "/pryzm.amm.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  general_pool_parameters?: GeneralPoolParametersAmino;
  yamm_parameters?: YammParametersAmino;
  order_parameters?: OrderParametersAmino;
  authorization_parameters?: AuthorizationParametersAmino;
  gas_parameters?: GasParametersAmino;
}
export interface ParamsAminoMsg {
  type: "/pryzm.amm.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  general_pool_parameters: GeneralPoolParametersSDKType;
  yamm_parameters: YammParametersSDKType;
  order_parameters: OrderParametersSDKType;
  authorization_parameters: AuthorizationParametersSDKType;
  gas_parameters: GasParametersSDKType;
}
function createBaseOrderParameters(): OrderParameters {
  return {
    stepMatchingFeeRatio: "",
    stepSwapFeeRatio: "",
    matchingProtocolFeeRatio: "",
    matchingSolverFeeRatio: "",
    maxOrdersPerBlock: 0,
    maxSchedulePerBlock: 0,
    maxExecOrderTradeRatio: "",
    maxOrderStepRatio: "",
    minOrderStepRatio: "",
    minOrderStepMillisInterval: BigInt(0),
    maxOrderStepMillisInterval: BigInt(0),
    maxPairsPerBlock: 0,
    maxOrdersPerPair: 0
  };
}
export const OrderParameters = {
  typeUrl: "/pryzm.amm.v1.OrderParameters",
  is(o: any): o is OrderParameters {
    return o && (o.$typeUrl === OrderParameters.typeUrl || typeof o.stepMatchingFeeRatio === "string" && typeof o.stepSwapFeeRatio === "string" && typeof o.matchingProtocolFeeRatio === "string" && typeof o.matchingSolverFeeRatio === "string" && typeof o.maxOrdersPerBlock === "number" && typeof o.maxSchedulePerBlock === "number" && typeof o.maxExecOrderTradeRatio === "string" && typeof o.maxOrderStepRatio === "string" && typeof o.minOrderStepRatio === "string" && typeof o.minOrderStepMillisInterval === "bigint" && typeof o.maxOrderStepMillisInterval === "bigint" && typeof o.maxPairsPerBlock === "number" && typeof o.maxOrdersPerPair === "number");
  },
  isSDK(o: any): o is OrderParametersSDKType {
    return o && (o.$typeUrl === OrderParameters.typeUrl || typeof o.step_matching_fee_ratio === "string" && typeof o.step_swap_fee_ratio === "string" && typeof o.matching_protocol_fee_ratio === "string" && typeof o.matching_solver_fee_ratio === "string" && typeof o.max_orders_per_block === "number" && typeof o.max_schedule_per_block === "number" && typeof o.max_exec_order_trade_ratio === "string" && typeof o.max_order_step_ratio === "string" && typeof o.min_order_step_ratio === "string" && typeof o.min_order_step_millis_interval === "bigint" && typeof o.max_order_step_millis_interval === "bigint" && typeof o.max_pairs_per_block === "number" && typeof o.max_orders_per_pair === "number");
  },
  isAmino(o: any): o is OrderParametersAmino {
    return o && (o.$typeUrl === OrderParameters.typeUrl || typeof o.step_matching_fee_ratio === "string" && typeof o.step_swap_fee_ratio === "string" && typeof o.matching_protocol_fee_ratio === "string" && typeof o.matching_solver_fee_ratio === "string" && typeof o.max_orders_per_block === "number" && typeof o.max_schedule_per_block === "number" && typeof o.max_exec_order_trade_ratio === "string" && typeof o.max_order_step_ratio === "string" && typeof o.min_order_step_ratio === "string" && typeof o.min_order_step_millis_interval === "bigint" && typeof o.max_order_step_millis_interval === "bigint" && typeof o.max_pairs_per_block === "number" && typeof o.max_orders_per_pair === "number");
  },
  encode(message: OrderParameters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stepMatchingFeeRatio !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.stepMatchingFeeRatio, 18).atomics);
    }
    if (message.stepSwapFeeRatio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.stepSwapFeeRatio, 18).atomics);
    }
    if (message.matchingProtocolFeeRatio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.matchingProtocolFeeRatio, 18).atomics);
    }
    if (message.matchingSolverFeeRatio !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.matchingSolverFeeRatio, 18).atomics);
    }
    if (message.maxOrdersPerBlock !== 0) {
      writer.uint32(40).int32(message.maxOrdersPerBlock);
    }
    if (message.maxSchedulePerBlock !== 0) {
      writer.uint32(48).int32(message.maxSchedulePerBlock);
    }
    if (message.maxExecOrderTradeRatio !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.maxExecOrderTradeRatio, 18).atomics);
    }
    if (message.maxOrderStepRatio !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.maxOrderStepRatio, 18).atomics);
    }
    if (message.minOrderStepRatio !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.minOrderStepRatio, 18).atomics);
    }
    if (message.minOrderStepMillisInterval !== BigInt(0)) {
      writer.uint32(80).int64(message.minOrderStepMillisInterval);
    }
    if (message.maxOrderStepMillisInterval !== BigInt(0)) {
      writer.uint32(88).int64(message.maxOrderStepMillisInterval);
    }
    if (message.maxPairsPerBlock !== 0) {
      writer.uint32(96).int32(message.maxPairsPerBlock);
    }
    if (message.maxOrdersPerPair !== 0) {
      writer.uint32(104).int32(message.maxOrdersPerPair);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderParameters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stepMatchingFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.stepSwapFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.matchingProtocolFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.matchingSolverFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.maxOrdersPerBlock = reader.int32();
          break;
        case 6:
          message.maxSchedulePerBlock = reader.int32();
          break;
        case 7:
          message.maxExecOrderTradeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.maxOrderStepRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.minOrderStepRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.minOrderStepMillisInterval = reader.int64();
          break;
        case 11:
          message.maxOrderStepMillisInterval = reader.int64();
          break;
        case 12:
          message.maxPairsPerBlock = reader.int32();
          break;
        case 13:
          message.maxOrdersPerPair = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderParameters {
    return {
      stepMatchingFeeRatio: isSet(object.stepMatchingFeeRatio) ? String(object.stepMatchingFeeRatio) : "",
      stepSwapFeeRatio: isSet(object.stepSwapFeeRatio) ? String(object.stepSwapFeeRatio) : "",
      matchingProtocolFeeRatio: isSet(object.matchingProtocolFeeRatio) ? String(object.matchingProtocolFeeRatio) : "",
      matchingSolverFeeRatio: isSet(object.matchingSolverFeeRatio) ? String(object.matchingSolverFeeRatio) : "",
      maxOrdersPerBlock: isSet(object.maxOrdersPerBlock) ? Number(object.maxOrdersPerBlock) : 0,
      maxSchedulePerBlock: isSet(object.maxSchedulePerBlock) ? Number(object.maxSchedulePerBlock) : 0,
      maxExecOrderTradeRatio: isSet(object.maxExecOrderTradeRatio) ? String(object.maxExecOrderTradeRatio) : "",
      maxOrderStepRatio: isSet(object.maxOrderStepRatio) ? String(object.maxOrderStepRatio) : "",
      minOrderStepRatio: isSet(object.minOrderStepRatio) ? String(object.minOrderStepRatio) : "",
      minOrderStepMillisInterval: isSet(object.minOrderStepMillisInterval) ? BigInt(object.minOrderStepMillisInterval.toString()) : BigInt(0),
      maxOrderStepMillisInterval: isSet(object.maxOrderStepMillisInterval) ? BigInt(object.maxOrderStepMillisInterval.toString()) : BigInt(0),
      maxPairsPerBlock: isSet(object.maxPairsPerBlock) ? Number(object.maxPairsPerBlock) : 0,
      maxOrdersPerPair: isSet(object.maxOrdersPerPair) ? Number(object.maxOrdersPerPair) : 0
    };
  },
  toJSON(message: OrderParameters): unknown {
    const obj: any = {};
    message.stepMatchingFeeRatio !== undefined && (obj.stepMatchingFeeRatio = message.stepMatchingFeeRatio);
    message.stepSwapFeeRatio !== undefined && (obj.stepSwapFeeRatio = message.stepSwapFeeRatio);
    message.matchingProtocolFeeRatio !== undefined && (obj.matchingProtocolFeeRatio = message.matchingProtocolFeeRatio);
    message.matchingSolverFeeRatio !== undefined && (obj.matchingSolverFeeRatio = message.matchingSolverFeeRatio);
    message.maxOrdersPerBlock !== undefined && (obj.maxOrdersPerBlock = Math.round(message.maxOrdersPerBlock));
    message.maxSchedulePerBlock !== undefined && (obj.maxSchedulePerBlock = Math.round(message.maxSchedulePerBlock));
    message.maxExecOrderTradeRatio !== undefined && (obj.maxExecOrderTradeRatio = message.maxExecOrderTradeRatio);
    message.maxOrderStepRatio !== undefined && (obj.maxOrderStepRatio = message.maxOrderStepRatio);
    message.minOrderStepRatio !== undefined && (obj.minOrderStepRatio = message.minOrderStepRatio);
    message.minOrderStepMillisInterval !== undefined && (obj.minOrderStepMillisInterval = (message.minOrderStepMillisInterval || BigInt(0)).toString());
    message.maxOrderStepMillisInterval !== undefined && (obj.maxOrderStepMillisInterval = (message.maxOrderStepMillisInterval || BigInt(0)).toString());
    message.maxPairsPerBlock !== undefined && (obj.maxPairsPerBlock = Math.round(message.maxPairsPerBlock));
    message.maxOrdersPerPair !== undefined && (obj.maxOrdersPerPair = Math.round(message.maxOrdersPerPair));
    return obj;
  },
  fromPartial(object: Partial<OrderParameters>): OrderParameters {
    const message = createBaseOrderParameters();
    message.stepMatchingFeeRatio = object.stepMatchingFeeRatio ?? "";
    message.stepSwapFeeRatio = object.stepSwapFeeRatio ?? "";
    message.matchingProtocolFeeRatio = object.matchingProtocolFeeRatio ?? "";
    message.matchingSolverFeeRatio = object.matchingSolverFeeRatio ?? "";
    message.maxOrdersPerBlock = object.maxOrdersPerBlock ?? 0;
    message.maxSchedulePerBlock = object.maxSchedulePerBlock ?? 0;
    message.maxExecOrderTradeRatio = object.maxExecOrderTradeRatio ?? "";
    message.maxOrderStepRatio = object.maxOrderStepRatio ?? "";
    message.minOrderStepRatio = object.minOrderStepRatio ?? "";
    message.minOrderStepMillisInterval = object.minOrderStepMillisInterval !== undefined && object.minOrderStepMillisInterval !== null ? BigInt(object.minOrderStepMillisInterval.toString()) : BigInt(0);
    message.maxOrderStepMillisInterval = object.maxOrderStepMillisInterval !== undefined && object.maxOrderStepMillisInterval !== null ? BigInt(object.maxOrderStepMillisInterval.toString()) : BigInt(0);
    message.maxPairsPerBlock = object.maxPairsPerBlock ?? 0;
    message.maxOrdersPerPair = object.maxOrdersPerPair ?? 0;
    return message;
  },
  fromAmino(object: OrderParametersAmino): OrderParameters {
    const message = createBaseOrderParameters();
    if (object.step_matching_fee_ratio !== undefined && object.step_matching_fee_ratio !== null) {
      message.stepMatchingFeeRatio = object.step_matching_fee_ratio;
    }
    if (object.step_swap_fee_ratio !== undefined && object.step_swap_fee_ratio !== null) {
      message.stepSwapFeeRatio = object.step_swap_fee_ratio;
    }
    if (object.matching_protocol_fee_ratio !== undefined && object.matching_protocol_fee_ratio !== null) {
      message.matchingProtocolFeeRatio = object.matching_protocol_fee_ratio;
    }
    if (object.matching_solver_fee_ratio !== undefined && object.matching_solver_fee_ratio !== null) {
      message.matchingSolverFeeRatio = object.matching_solver_fee_ratio;
    }
    if (object.max_orders_per_block !== undefined && object.max_orders_per_block !== null) {
      message.maxOrdersPerBlock = object.max_orders_per_block;
    }
    if (object.max_schedule_per_block !== undefined && object.max_schedule_per_block !== null) {
      message.maxSchedulePerBlock = object.max_schedule_per_block;
    }
    if (object.max_exec_order_trade_ratio !== undefined && object.max_exec_order_trade_ratio !== null) {
      message.maxExecOrderTradeRatio = object.max_exec_order_trade_ratio;
    }
    if (object.max_order_step_ratio !== undefined && object.max_order_step_ratio !== null) {
      message.maxOrderStepRatio = object.max_order_step_ratio;
    }
    if (object.min_order_step_ratio !== undefined && object.min_order_step_ratio !== null) {
      message.minOrderStepRatio = object.min_order_step_ratio;
    }
    if (object.min_order_step_millis_interval !== undefined && object.min_order_step_millis_interval !== null) {
      message.minOrderStepMillisInterval = BigInt(object.min_order_step_millis_interval);
    }
    if (object.max_order_step_millis_interval !== undefined && object.max_order_step_millis_interval !== null) {
      message.maxOrderStepMillisInterval = BigInt(object.max_order_step_millis_interval);
    }
    if (object.max_pairs_per_block !== undefined && object.max_pairs_per_block !== null) {
      message.maxPairsPerBlock = object.max_pairs_per_block;
    }
    if (object.max_orders_per_pair !== undefined && object.max_orders_per_pair !== null) {
      message.maxOrdersPerPair = object.max_orders_per_pair;
    }
    return message;
  },
  toAmino(message: OrderParameters, useInterfaces: boolean = true): OrderParametersAmino {
    const obj: any = {};
    obj.step_matching_fee_ratio = padDecimal(message.stepMatchingFeeRatio) === "" ? undefined : padDecimal(message.stepMatchingFeeRatio);
    obj.step_swap_fee_ratio = padDecimal(message.stepSwapFeeRatio) === "" ? undefined : padDecimal(message.stepSwapFeeRatio);
    obj.matching_protocol_fee_ratio = padDecimal(message.matchingProtocolFeeRatio) === "" ? undefined : padDecimal(message.matchingProtocolFeeRatio);
    obj.matching_solver_fee_ratio = padDecimal(message.matchingSolverFeeRatio) === "" ? undefined : padDecimal(message.matchingSolverFeeRatio);
    obj.max_orders_per_block = message.maxOrdersPerBlock === 0 ? undefined : message.maxOrdersPerBlock;
    obj.max_schedule_per_block = message.maxSchedulePerBlock === 0 ? undefined : message.maxSchedulePerBlock;
    obj.max_exec_order_trade_ratio = padDecimal(message.maxExecOrderTradeRatio) === "" ? undefined : padDecimal(message.maxExecOrderTradeRatio);
    obj.max_order_step_ratio = padDecimal(message.maxOrderStepRatio) === "" ? undefined : padDecimal(message.maxOrderStepRatio);
    obj.min_order_step_ratio = padDecimal(message.minOrderStepRatio) === "" ? undefined : padDecimal(message.minOrderStepRatio);
    obj.min_order_step_millis_interval = message.minOrderStepMillisInterval ? message.minOrderStepMillisInterval.toString() : undefined;
    obj.max_order_step_millis_interval = message.maxOrderStepMillisInterval ? message.maxOrderStepMillisInterval.toString() : undefined;
    obj.max_pairs_per_block = message.maxPairsPerBlock === 0 ? undefined : message.maxPairsPerBlock;
    obj.max_orders_per_pair = message.maxOrdersPerPair === 0 ? undefined : message.maxOrdersPerPair;
    return obj;
  },
  fromAminoMsg(object: OrderParametersAminoMsg): OrderParameters {
    return OrderParameters.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderParametersProtoMsg, useInterfaces: boolean = true): OrderParameters {
    return OrderParameters.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderParameters): Uint8Array {
    return OrderParameters.encode(message).finish();
  },
  toProtoMsg(message: OrderParameters): OrderParametersProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.OrderParameters",
      value: OrderParameters.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderParameters.typeUrl, OrderParameters);
function createBaseYammParameters(): YammParameters {
  return {
    lambda: "",
    maturityIntroductionIntervalMillis: BigInt(0),
    maturityExpirationIntervalMillis: BigInt(0),
    introductionVirtualBalanceScaler: "",
    expirationVirtualBalanceScaler: "",
    buyYGivenInLoanFeeRatio: "",
    sellYGivenOutFeeRatio: "",
    maxAlpha: "",
    defaultInitializationAllowList: [],
    avgMonthlyYieldRate: "",
    yieldFeeScaler: "",
    defaultAdmins: [],
    defaultPauseAllowList: [],
    defaultPauseWindowDurationMillis: BigInt(0),
    defaultPauseBufferDurationMillis: BigInt(0)
  };
}
export const YammParameters = {
  typeUrl: "/pryzm.amm.v1.YammParameters",
  is(o: any): o is YammParameters {
    return o && (o.$typeUrl === YammParameters.typeUrl || typeof o.lambda === "string" && typeof o.maturityIntroductionIntervalMillis === "bigint" && typeof o.maturityExpirationIntervalMillis === "bigint" && typeof o.introductionVirtualBalanceScaler === "string" && typeof o.expirationVirtualBalanceScaler === "string" && typeof o.buyYGivenInLoanFeeRatio === "string" && typeof o.sellYGivenOutFeeRatio === "string" && typeof o.maxAlpha === "string" && Array.isArray(o.defaultInitializationAllowList) && (!o.defaultInitializationAllowList.length || typeof o.defaultInitializationAllowList[0] === "string") && typeof o.avgMonthlyYieldRate === "string" && typeof o.yieldFeeScaler === "string" && Array.isArray(o.defaultAdmins) && (!o.defaultAdmins.length || typeof o.defaultAdmins[0] === "string") && Array.isArray(o.defaultPauseAllowList) && (!o.defaultPauseAllowList.length || typeof o.defaultPauseAllowList[0] === "string") && typeof o.defaultPauseWindowDurationMillis === "bigint" && typeof o.defaultPauseBufferDurationMillis === "bigint");
  },
  isSDK(o: any): o is YammParametersSDKType {
    return o && (o.$typeUrl === YammParameters.typeUrl || typeof o.lambda === "string" && typeof o.maturity_introduction_interval_millis === "bigint" && typeof o.maturity_expiration_interval_millis === "bigint" && typeof o.introduction_virtual_balance_scaler === "string" && typeof o.expiration_virtual_balance_scaler === "string" && typeof o.buy_y_given_in_loan_fee_ratio === "string" && typeof o.sell_y_given_out_fee_ratio === "string" && typeof o.max_alpha === "string" && Array.isArray(o.default_initialization_allow_list) && (!o.default_initialization_allow_list.length || typeof o.default_initialization_allow_list[0] === "string") && typeof o.avg_monthly_yield_rate === "string" && typeof o.yield_fee_scaler === "string" && Array.isArray(o.default_admins) && (!o.default_admins.length || typeof o.default_admins[0] === "string") && Array.isArray(o.default_pause_allow_list) && (!o.default_pause_allow_list.length || typeof o.default_pause_allow_list[0] === "string") && typeof o.default_pause_window_duration_millis === "bigint" && typeof o.default_pause_buffer_duration_millis === "bigint");
  },
  isAmino(o: any): o is YammParametersAmino {
    return o && (o.$typeUrl === YammParameters.typeUrl || typeof o.lambda === "string" && typeof o.maturity_introduction_interval_millis === "bigint" && typeof o.maturity_expiration_interval_millis === "bigint" && typeof o.introduction_virtual_balance_scaler === "string" && typeof o.expiration_virtual_balance_scaler === "string" && typeof o.buy_y_given_in_loan_fee_ratio === "string" && typeof o.sell_y_given_out_fee_ratio === "string" && typeof o.max_alpha === "string" && Array.isArray(o.default_initialization_allow_list) && (!o.default_initialization_allow_list.length || typeof o.default_initialization_allow_list[0] === "string") && typeof o.avg_monthly_yield_rate === "string" && typeof o.yield_fee_scaler === "string" && Array.isArray(o.default_admins) && (!o.default_admins.length || typeof o.default_admins[0] === "string") && Array.isArray(o.default_pause_allow_list) && (!o.default_pause_allow_list.length || typeof o.default_pause_allow_list[0] === "string") && typeof o.default_pause_window_duration_millis === "bigint" && typeof o.default_pause_buffer_duration_millis === "bigint");
  },
  encode(message: YammParameters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lambda !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.lambda, 18).atomics);
    }
    if (message.maturityIntroductionIntervalMillis !== BigInt(0)) {
      writer.uint32(16).int64(message.maturityIntroductionIntervalMillis);
    }
    if (message.maturityExpirationIntervalMillis !== BigInt(0)) {
      writer.uint32(24).int64(message.maturityExpirationIntervalMillis);
    }
    if (message.introductionVirtualBalanceScaler !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.introductionVirtualBalanceScaler, 18).atomics);
    }
    if (message.expirationVirtualBalanceScaler !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.expirationVirtualBalanceScaler, 18).atomics);
    }
    if (message.buyYGivenInLoanFeeRatio !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.buyYGivenInLoanFeeRatio, 18).atomics);
    }
    if (message.sellYGivenOutFeeRatio !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.sellYGivenOutFeeRatio, 18).atomics);
    }
    if (message.maxAlpha !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.maxAlpha, 18).atomics);
    }
    for (const v of message.defaultInitializationAllowList) {
      writer.uint32(74).string(v!);
    }
    if (message.avgMonthlyYieldRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.avgMonthlyYieldRate, 18).atomics);
    }
    if (message.yieldFeeScaler !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.yieldFeeScaler, 18).atomics);
    }
    for (const v of message.defaultAdmins) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.defaultPauseAllowList) {
      writer.uint32(106).string(v!);
    }
    if (message.defaultPauseWindowDurationMillis !== BigInt(0)) {
      writer.uint32(112).int64(message.defaultPauseWindowDurationMillis);
    }
    if (message.defaultPauseBufferDurationMillis !== BigInt(0)) {
      writer.uint32(120).int64(message.defaultPauseBufferDurationMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): YammParameters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYammParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lambda = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.maturityIntroductionIntervalMillis = reader.int64();
          break;
        case 3:
          message.maturityExpirationIntervalMillis = reader.int64();
          break;
        case 4:
          message.introductionVirtualBalanceScaler = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.expirationVirtualBalanceScaler = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.buyYGivenInLoanFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.sellYGivenOutFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.maxAlpha = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.defaultInitializationAllowList.push(reader.string());
          break;
        case 10:
          message.avgMonthlyYieldRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.yieldFeeScaler = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.defaultAdmins.push(reader.string());
          break;
        case 13:
          message.defaultPauseAllowList.push(reader.string());
          break;
        case 14:
          message.defaultPauseWindowDurationMillis = reader.int64();
          break;
        case 15:
          message.defaultPauseBufferDurationMillis = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): YammParameters {
    return {
      lambda: isSet(object.lambda) ? String(object.lambda) : "",
      maturityIntroductionIntervalMillis: isSet(object.maturityIntroductionIntervalMillis) ? BigInt(object.maturityIntroductionIntervalMillis.toString()) : BigInt(0),
      maturityExpirationIntervalMillis: isSet(object.maturityExpirationIntervalMillis) ? BigInt(object.maturityExpirationIntervalMillis.toString()) : BigInt(0),
      introductionVirtualBalanceScaler: isSet(object.introductionVirtualBalanceScaler) ? String(object.introductionVirtualBalanceScaler) : "",
      expirationVirtualBalanceScaler: isSet(object.expirationVirtualBalanceScaler) ? String(object.expirationVirtualBalanceScaler) : "",
      buyYGivenInLoanFeeRatio: isSet(object.buyYGivenInLoanFeeRatio) ? String(object.buyYGivenInLoanFeeRatio) : "",
      sellYGivenOutFeeRatio: isSet(object.sellYGivenOutFeeRatio) ? String(object.sellYGivenOutFeeRatio) : "",
      maxAlpha: isSet(object.maxAlpha) ? String(object.maxAlpha) : "",
      defaultInitializationAllowList: Array.isArray(object?.defaultInitializationAllowList) ? object.defaultInitializationAllowList.map((e: any) => String(e)) : [],
      avgMonthlyYieldRate: isSet(object.avgMonthlyYieldRate) ? String(object.avgMonthlyYieldRate) : "",
      yieldFeeScaler: isSet(object.yieldFeeScaler) ? String(object.yieldFeeScaler) : "",
      defaultAdmins: Array.isArray(object?.defaultAdmins) ? object.defaultAdmins.map((e: any) => String(e)) : [],
      defaultPauseAllowList: Array.isArray(object?.defaultPauseAllowList) ? object.defaultPauseAllowList.map((e: any) => String(e)) : [],
      defaultPauseWindowDurationMillis: isSet(object.defaultPauseWindowDurationMillis) ? BigInt(object.defaultPauseWindowDurationMillis.toString()) : BigInt(0),
      defaultPauseBufferDurationMillis: isSet(object.defaultPauseBufferDurationMillis) ? BigInt(object.defaultPauseBufferDurationMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: YammParameters): unknown {
    const obj: any = {};
    message.lambda !== undefined && (obj.lambda = message.lambda);
    message.maturityIntroductionIntervalMillis !== undefined && (obj.maturityIntroductionIntervalMillis = (message.maturityIntroductionIntervalMillis || BigInt(0)).toString());
    message.maturityExpirationIntervalMillis !== undefined && (obj.maturityExpirationIntervalMillis = (message.maturityExpirationIntervalMillis || BigInt(0)).toString());
    message.introductionVirtualBalanceScaler !== undefined && (obj.introductionVirtualBalanceScaler = message.introductionVirtualBalanceScaler);
    message.expirationVirtualBalanceScaler !== undefined && (obj.expirationVirtualBalanceScaler = message.expirationVirtualBalanceScaler);
    message.buyYGivenInLoanFeeRatio !== undefined && (obj.buyYGivenInLoanFeeRatio = message.buyYGivenInLoanFeeRatio);
    message.sellYGivenOutFeeRatio !== undefined && (obj.sellYGivenOutFeeRatio = message.sellYGivenOutFeeRatio);
    message.maxAlpha !== undefined && (obj.maxAlpha = message.maxAlpha);
    if (message.defaultInitializationAllowList) {
      obj.defaultInitializationAllowList = message.defaultInitializationAllowList.map(e => e);
    } else {
      obj.defaultInitializationAllowList = [];
    }
    message.avgMonthlyYieldRate !== undefined && (obj.avgMonthlyYieldRate = message.avgMonthlyYieldRate);
    message.yieldFeeScaler !== undefined && (obj.yieldFeeScaler = message.yieldFeeScaler);
    if (message.defaultAdmins) {
      obj.defaultAdmins = message.defaultAdmins.map(e => e);
    } else {
      obj.defaultAdmins = [];
    }
    if (message.defaultPauseAllowList) {
      obj.defaultPauseAllowList = message.defaultPauseAllowList.map(e => e);
    } else {
      obj.defaultPauseAllowList = [];
    }
    message.defaultPauseWindowDurationMillis !== undefined && (obj.defaultPauseWindowDurationMillis = (message.defaultPauseWindowDurationMillis || BigInt(0)).toString());
    message.defaultPauseBufferDurationMillis !== undefined && (obj.defaultPauseBufferDurationMillis = (message.defaultPauseBufferDurationMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<YammParameters>): YammParameters {
    const message = createBaseYammParameters();
    message.lambda = object.lambda ?? "";
    message.maturityIntroductionIntervalMillis = object.maturityIntroductionIntervalMillis !== undefined && object.maturityIntroductionIntervalMillis !== null ? BigInt(object.maturityIntroductionIntervalMillis.toString()) : BigInt(0);
    message.maturityExpirationIntervalMillis = object.maturityExpirationIntervalMillis !== undefined && object.maturityExpirationIntervalMillis !== null ? BigInt(object.maturityExpirationIntervalMillis.toString()) : BigInt(0);
    message.introductionVirtualBalanceScaler = object.introductionVirtualBalanceScaler ?? "";
    message.expirationVirtualBalanceScaler = object.expirationVirtualBalanceScaler ?? "";
    message.buyYGivenInLoanFeeRatio = object.buyYGivenInLoanFeeRatio ?? "";
    message.sellYGivenOutFeeRatio = object.sellYGivenOutFeeRatio ?? "";
    message.maxAlpha = object.maxAlpha ?? "";
    message.defaultInitializationAllowList = object.defaultInitializationAllowList?.map(e => e) || [];
    message.avgMonthlyYieldRate = object.avgMonthlyYieldRate ?? "";
    message.yieldFeeScaler = object.yieldFeeScaler ?? "";
    message.defaultAdmins = object.defaultAdmins?.map(e => e) || [];
    message.defaultPauseAllowList = object.defaultPauseAllowList?.map(e => e) || [];
    message.defaultPauseWindowDurationMillis = object.defaultPauseWindowDurationMillis !== undefined && object.defaultPauseWindowDurationMillis !== null ? BigInt(object.defaultPauseWindowDurationMillis.toString()) : BigInt(0);
    message.defaultPauseBufferDurationMillis = object.defaultPauseBufferDurationMillis !== undefined && object.defaultPauseBufferDurationMillis !== null ? BigInt(object.defaultPauseBufferDurationMillis.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: YammParametersAmino): YammParameters {
    const message = createBaseYammParameters();
    if (object.lambda !== undefined && object.lambda !== null) {
      message.lambda = object.lambda;
    }
    if (object.maturity_introduction_interval_millis !== undefined && object.maturity_introduction_interval_millis !== null) {
      message.maturityIntroductionIntervalMillis = BigInt(object.maturity_introduction_interval_millis);
    }
    if (object.maturity_expiration_interval_millis !== undefined && object.maturity_expiration_interval_millis !== null) {
      message.maturityExpirationIntervalMillis = BigInt(object.maturity_expiration_interval_millis);
    }
    if (object.introduction_virtual_balance_scaler !== undefined && object.introduction_virtual_balance_scaler !== null) {
      message.introductionVirtualBalanceScaler = object.introduction_virtual_balance_scaler;
    }
    if (object.expiration_virtual_balance_scaler !== undefined && object.expiration_virtual_balance_scaler !== null) {
      message.expirationVirtualBalanceScaler = object.expiration_virtual_balance_scaler;
    }
    if (object.buy_y_given_in_loan_fee_ratio !== undefined && object.buy_y_given_in_loan_fee_ratio !== null) {
      message.buyYGivenInLoanFeeRatio = object.buy_y_given_in_loan_fee_ratio;
    }
    if (object.sell_y_given_out_fee_ratio !== undefined && object.sell_y_given_out_fee_ratio !== null) {
      message.sellYGivenOutFeeRatio = object.sell_y_given_out_fee_ratio;
    }
    if (object.max_alpha !== undefined && object.max_alpha !== null) {
      message.maxAlpha = object.max_alpha;
    }
    message.defaultInitializationAllowList = object.default_initialization_allow_list?.map(e => e) || [];
    if (object.avg_monthly_yield_rate !== undefined && object.avg_monthly_yield_rate !== null) {
      message.avgMonthlyYieldRate = object.avg_monthly_yield_rate;
    }
    if (object.yield_fee_scaler !== undefined && object.yield_fee_scaler !== null) {
      message.yieldFeeScaler = object.yield_fee_scaler;
    }
    message.defaultAdmins = object.default_admins?.map(e => e) || [];
    message.defaultPauseAllowList = object.default_pause_allow_list?.map(e => e) || [];
    if (object.default_pause_window_duration_millis !== undefined && object.default_pause_window_duration_millis !== null) {
      message.defaultPauseWindowDurationMillis = BigInt(object.default_pause_window_duration_millis);
    }
    if (object.default_pause_buffer_duration_millis !== undefined && object.default_pause_buffer_duration_millis !== null) {
      message.defaultPauseBufferDurationMillis = BigInt(object.default_pause_buffer_duration_millis);
    }
    return message;
  },
  toAmino(message: YammParameters, useInterfaces: boolean = true): YammParametersAmino {
    const obj: any = {};
    obj.lambda = padDecimal(message.lambda) === "" ? undefined : padDecimal(message.lambda);
    obj.maturity_introduction_interval_millis = message.maturityIntroductionIntervalMillis ? message.maturityIntroductionIntervalMillis.toString() : undefined;
    obj.maturity_expiration_interval_millis = message.maturityExpirationIntervalMillis ? message.maturityExpirationIntervalMillis.toString() : undefined;
    obj.introduction_virtual_balance_scaler = padDecimal(message.introductionVirtualBalanceScaler) === "" ? undefined : padDecimal(message.introductionVirtualBalanceScaler);
    obj.expiration_virtual_balance_scaler = padDecimal(message.expirationVirtualBalanceScaler) === "" ? undefined : padDecimal(message.expirationVirtualBalanceScaler);
    obj.buy_y_given_in_loan_fee_ratio = padDecimal(message.buyYGivenInLoanFeeRatio) === "" ? undefined : padDecimal(message.buyYGivenInLoanFeeRatio);
    obj.sell_y_given_out_fee_ratio = padDecimal(message.sellYGivenOutFeeRatio) === "" ? undefined : padDecimal(message.sellYGivenOutFeeRatio);
    obj.max_alpha = padDecimal(message.maxAlpha) === "" ? undefined : padDecimal(message.maxAlpha);
    if (message.defaultInitializationAllowList) {
      obj.default_initialization_allow_list = message.defaultInitializationAllowList.map(e => e);
    } else {
      obj.default_initialization_allow_list = message.defaultInitializationAllowList;
    }
    obj.avg_monthly_yield_rate = padDecimal(message.avgMonthlyYieldRate) === "" ? undefined : padDecimal(message.avgMonthlyYieldRate);
    obj.yield_fee_scaler = padDecimal(message.yieldFeeScaler) === "" ? undefined : padDecimal(message.yieldFeeScaler);
    if (message.defaultAdmins) {
      obj.default_admins = message.defaultAdmins.map(e => e);
    } else {
      obj.default_admins = message.defaultAdmins;
    }
    if (message.defaultPauseAllowList) {
      obj.default_pause_allow_list = message.defaultPauseAllowList.map(e => e);
    } else {
      obj.default_pause_allow_list = message.defaultPauseAllowList;
    }
    obj.default_pause_window_duration_millis = message.defaultPauseWindowDurationMillis ? message.defaultPauseWindowDurationMillis.toString() : undefined;
    obj.default_pause_buffer_duration_millis = message.defaultPauseBufferDurationMillis ? message.defaultPauseBufferDurationMillis.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: YammParametersAminoMsg): YammParameters {
    return YammParameters.fromAmino(object.value);
  },
  fromProtoMsg(message: YammParametersProtoMsg, useInterfaces: boolean = true): YammParameters {
    return YammParameters.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: YammParameters): Uint8Array {
    return YammParameters.encode(message).finish();
  },
  toProtoMsg(message: YammParameters): YammParametersProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.YammParameters",
      value: YammParameters.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(YammParameters.typeUrl, YammParameters);
function createBaseGeneralPoolParameters(): GeneralPoolParameters {
  return {
    allowPublicPoolCreation: false,
    defaultSwapFeeRatio: "",
    swapProtocolFeeRatio: "",
    joinExitProtocolFeeRatio: ""
  };
}
export const GeneralPoolParameters = {
  typeUrl: "/pryzm.amm.v1.GeneralPoolParameters",
  is(o: any): o is GeneralPoolParameters {
    return o && (o.$typeUrl === GeneralPoolParameters.typeUrl || typeof o.allowPublicPoolCreation === "boolean" && typeof o.defaultSwapFeeRatio === "string" && typeof o.swapProtocolFeeRatio === "string" && typeof o.joinExitProtocolFeeRatio === "string");
  },
  isSDK(o: any): o is GeneralPoolParametersSDKType {
    return o && (o.$typeUrl === GeneralPoolParameters.typeUrl || typeof o.allow_public_pool_creation === "boolean" && typeof o.default_swap_fee_ratio === "string" && typeof o.swap_protocol_fee_ratio === "string" && typeof o.join_exit_protocol_fee_ratio === "string");
  },
  isAmino(o: any): o is GeneralPoolParametersAmino {
    return o && (o.$typeUrl === GeneralPoolParameters.typeUrl || typeof o.allow_public_pool_creation === "boolean" && typeof o.default_swap_fee_ratio === "string" && typeof o.swap_protocol_fee_ratio === "string" && typeof o.join_exit_protocol_fee_ratio === "string");
  },
  encode(message: GeneralPoolParameters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowPublicPoolCreation === true) {
      writer.uint32(8).bool(message.allowPublicPoolCreation);
    }
    if (message.defaultSwapFeeRatio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.defaultSwapFeeRatio, 18).atomics);
    }
    if (message.swapProtocolFeeRatio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapProtocolFeeRatio, 18).atomics);
    }
    if (message.joinExitProtocolFeeRatio !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.joinExitProtocolFeeRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GeneralPoolParameters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneralPoolParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowPublicPoolCreation = reader.bool();
          break;
        case 2:
          message.defaultSwapFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.swapProtocolFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.joinExitProtocolFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GeneralPoolParameters {
    return {
      allowPublicPoolCreation: isSet(object.allowPublicPoolCreation) ? Boolean(object.allowPublicPoolCreation) : false,
      defaultSwapFeeRatio: isSet(object.defaultSwapFeeRatio) ? String(object.defaultSwapFeeRatio) : "",
      swapProtocolFeeRatio: isSet(object.swapProtocolFeeRatio) ? String(object.swapProtocolFeeRatio) : "",
      joinExitProtocolFeeRatio: isSet(object.joinExitProtocolFeeRatio) ? String(object.joinExitProtocolFeeRatio) : ""
    };
  },
  toJSON(message: GeneralPoolParameters): unknown {
    const obj: any = {};
    message.allowPublicPoolCreation !== undefined && (obj.allowPublicPoolCreation = message.allowPublicPoolCreation);
    message.defaultSwapFeeRatio !== undefined && (obj.defaultSwapFeeRatio = message.defaultSwapFeeRatio);
    message.swapProtocolFeeRatio !== undefined && (obj.swapProtocolFeeRatio = message.swapProtocolFeeRatio);
    message.joinExitProtocolFeeRatio !== undefined && (obj.joinExitProtocolFeeRatio = message.joinExitProtocolFeeRatio);
    return obj;
  },
  fromPartial(object: Partial<GeneralPoolParameters>): GeneralPoolParameters {
    const message = createBaseGeneralPoolParameters();
    message.allowPublicPoolCreation = object.allowPublicPoolCreation ?? false;
    message.defaultSwapFeeRatio = object.defaultSwapFeeRatio ?? "";
    message.swapProtocolFeeRatio = object.swapProtocolFeeRatio ?? "";
    message.joinExitProtocolFeeRatio = object.joinExitProtocolFeeRatio ?? "";
    return message;
  },
  fromAmino(object: GeneralPoolParametersAmino): GeneralPoolParameters {
    const message = createBaseGeneralPoolParameters();
    if (object.allow_public_pool_creation !== undefined && object.allow_public_pool_creation !== null) {
      message.allowPublicPoolCreation = object.allow_public_pool_creation;
    }
    if (object.default_swap_fee_ratio !== undefined && object.default_swap_fee_ratio !== null) {
      message.defaultSwapFeeRatio = object.default_swap_fee_ratio;
    }
    if (object.swap_protocol_fee_ratio !== undefined && object.swap_protocol_fee_ratio !== null) {
      message.swapProtocolFeeRatio = object.swap_protocol_fee_ratio;
    }
    if (object.join_exit_protocol_fee_ratio !== undefined && object.join_exit_protocol_fee_ratio !== null) {
      message.joinExitProtocolFeeRatio = object.join_exit_protocol_fee_ratio;
    }
    return message;
  },
  toAmino(message: GeneralPoolParameters, useInterfaces: boolean = true): GeneralPoolParametersAmino {
    const obj: any = {};
    obj.allow_public_pool_creation = message.allowPublicPoolCreation === false ? undefined : message.allowPublicPoolCreation;
    obj.default_swap_fee_ratio = padDecimal(message.defaultSwapFeeRatio) === "" ? undefined : padDecimal(message.defaultSwapFeeRatio);
    obj.swap_protocol_fee_ratio = padDecimal(message.swapProtocolFeeRatio) === "" ? undefined : padDecimal(message.swapProtocolFeeRatio);
    obj.join_exit_protocol_fee_ratio = padDecimal(message.joinExitProtocolFeeRatio) === "" ? undefined : padDecimal(message.joinExitProtocolFeeRatio);
    return obj;
  },
  fromAminoMsg(object: GeneralPoolParametersAminoMsg): GeneralPoolParameters {
    return GeneralPoolParameters.fromAmino(object.value);
  },
  fromProtoMsg(message: GeneralPoolParametersProtoMsg, useInterfaces: boolean = true): GeneralPoolParameters {
    return GeneralPoolParameters.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GeneralPoolParameters): Uint8Array {
    return GeneralPoolParameters.encode(message).finish();
  },
  toProtoMsg(message: GeneralPoolParameters): GeneralPoolParametersProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.GeneralPoolParameters",
      value: GeneralPoolParameters.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GeneralPoolParameters.typeUrl, GeneralPoolParameters);
function createBaseAuthorizationParameters(): AuthorizationParameters {
  return {
    adminList: [],
    pauseAllowList: []
  };
}
export const AuthorizationParameters = {
  typeUrl: "/pryzm.amm.v1.AuthorizationParameters",
  is(o: any): o is AuthorizationParameters {
    return o && (o.$typeUrl === AuthorizationParameters.typeUrl || Array.isArray(o.adminList) && (!o.adminList.length || typeof o.adminList[0] === "string") && Array.isArray(o.pauseAllowList) && (!o.pauseAllowList.length || typeof o.pauseAllowList[0] === "string"));
  },
  isSDK(o: any): o is AuthorizationParametersSDKType {
    return o && (o.$typeUrl === AuthorizationParameters.typeUrl || Array.isArray(o.admin_list) && (!o.admin_list.length || typeof o.admin_list[0] === "string") && Array.isArray(o.pause_allow_list) && (!o.pause_allow_list.length || typeof o.pause_allow_list[0] === "string"));
  },
  isAmino(o: any): o is AuthorizationParametersAmino {
    return o && (o.$typeUrl === AuthorizationParameters.typeUrl || Array.isArray(o.admin_list) && (!o.admin_list.length || typeof o.admin_list[0] === "string") && Array.isArray(o.pause_allow_list) && (!o.pause_allow_list.length || typeof o.pause_allow_list[0] === "string"));
  },
  encode(message: AuthorizationParameters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.adminList) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.pauseAllowList) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AuthorizationParameters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizationParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.adminList.push(reader.string());
          break;
        case 2:
          message.pauseAllowList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthorizationParameters {
    return {
      adminList: Array.isArray(object?.adminList) ? object.adminList.map((e: any) => String(e)) : [],
      pauseAllowList: Array.isArray(object?.pauseAllowList) ? object.pauseAllowList.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: AuthorizationParameters): unknown {
    const obj: any = {};
    if (message.adminList) {
      obj.adminList = message.adminList.map(e => e);
    } else {
      obj.adminList = [];
    }
    if (message.pauseAllowList) {
      obj.pauseAllowList = message.pauseAllowList.map(e => e);
    } else {
      obj.pauseAllowList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<AuthorizationParameters>): AuthorizationParameters {
    const message = createBaseAuthorizationParameters();
    message.adminList = object.adminList?.map(e => e) || [];
    message.pauseAllowList = object.pauseAllowList?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AuthorizationParametersAmino): AuthorizationParameters {
    const message = createBaseAuthorizationParameters();
    message.adminList = object.admin_list?.map(e => e) || [];
    message.pauseAllowList = object.pause_allow_list?.map(e => e) || [];
    return message;
  },
  toAmino(message: AuthorizationParameters, useInterfaces: boolean = true): AuthorizationParametersAmino {
    const obj: any = {};
    if (message.adminList) {
      obj.admin_list = message.adminList.map(e => e);
    } else {
      obj.admin_list = message.adminList;
    }
    if (message.pauseAllowList) {
      obj.pause_allow_list = message.pauseAllowList.map(e => e);
    } else {
      obj.pause_allow_list = message.pauseAllowList;
    }
    return obj;
  },
  fromAminoMsg(object: AuthorizationParametersAminoMsg): AuthorizationParameters {
    return AuthorizationParameters.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthorizationParametersProtoMsg, useInterfaces: boolean = true): AuthorizationParameters {
    return AuthorizationParameters.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AuthorizationParameters): Uint8Array {
    return AuthorizationParameters.encode(message).finish();
  },
  toProtoMsg(message: AuthorizationParameters): AuthorizationParametersProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.AuthorizationParameters",
      value: AuthorizationParameters.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AuthorizationParameters.typeUrl, AuthorizationParameters);
function createBaseGasParameters(): GasParameters {
  return {
    vaultSwap: BigInt(0),
    vaultInitializePool: BigInt(0),
    vaultJoin: BigInt(0),
    vaultExit: BigInt(0),
    vaultRecoveryExit: BigInt(0),
    vaultBatchSwapStep: BigInt(0),
    createWeightedPool: BigInt(0),
    submitOrder: BigInt(0),
    proposalMatchOrder: BigInt(0)
  };
}
export const GasParameters = {
  typeUrl: "/pryzm.amm.v1.GasParameters",
  is(o: any): o is GasParameters {
    return o && (o.$typeUrl === GasParameters.typeUrl || typeof o.vaultSwap === "bigint" && typeof o.vaultInitializePool === "bigint" && typeof o.vaultJoin === "bigint" && typeof o.vaultExit === "bigint" && typeof o.vaultRecoveryExit === "bigint" && typeof o.vaultBatchSwapStep === "bigint" && typeof o.createWeightedPool === "bigint" && typeof o.submitOrder === "bigint" && typeof o.proposalMatchOrder === "bigint");
  },
  isSDK(o: any): o is GasParametersSDKType {
    return o && (o.$typeUrl === GasParameters.typeUrl || typeof o.vault_swap === "bigint" && typeof o.vault_initialize_pool === "bigint" && typeof o.vault_join === "bigint" && typeof o.vault_exit === "bigint" && typeof o.vault_recovery_exit === "bigint" && typeof o.vault_batch_swap_step === "bigint" && typeof o.create_weighted_pool === "bigint" && typeof o.submit_order === "bigint" && typeof o.proposal_match_order === "bigint");
  },
  isAmino(o: any): o is GasParametersAmino {
    return o && (o.$typeUrl === GasParameters.typeUrl || typeof o.vault_swap === "bigint" && typeof o.vault_initialize_pool === "bigint" && typeof o.vault_join === "bigint" && typeof o.vault_exit === "bigint" && typeof o.vault_recovery_exit === "bigint" && typeof o.vault_batch_swap_step === "bigint" && typeof o.create_weighted_pool === "bigint" && typeof o.submit_order === "bigint" && typeof o.proposal_match_order === "bigint");
  },
  encode(message: GasParameters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vaultSwap !== BigInt(0)) {
      writer.uint32(8).uint64(message.vaultSwap);
    }
    if (message.vaultInitializePool !== BigInt(0)) {
      writer.uint32(16).uint64(message.vaultInitializePool);
    }
    if (message.vaultJoin !== BigInt(0)) {
      writer.uint32(24).uint64(message.vaultJoin);
    }
    if (message.vaultExit !== BigInt(0)) {
      writer.uint32(32).uint64(message.vaultExit);
    }
    if (message.vaultRecoveryExit !== BigInt(0)) {
      writer.uint32(40).uint64(message.vaultRecoveryExit);
    }
    if (message.vaultBatchSwapStep !== BigInt(0)) {
      writer.uint32(48).uint64(message.vaultBatchSwapStep);
    }
    if (message.createWeightedPool !== BigInt(0)) {
      writer.uint32(56).uint64(message.createWeightedPool);
    }
    if (message.submitOrder !== BigInt(0)) {
      writer.uint32(64).uint64(message.submitOrder);
    }
    if (message.proposalMatchOrder !== BigInt(0)) {
      writer.uint32(72).uint64(message.proposalMatchOrder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GasParameters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultSwap = reader.uint64();
          break;
        case 2:
          message.vaultInitializePool = reader.uint64();
          break;
        case 3:
          message.vaultJoin = reader.uint64();
          break;
        case 4:
          message.vaultExit = reader.uint64();
          break;
        case 5:
          message.vaultRecoveryExit = reader.uint64();
          break;
        case 6:
          message.vaultBatchSwapStep = reader.uint64();
          break;
        case 7:
          message.createWeightedPool = reader.uint64();
          break;
        case 8:
          message.submitOrder = reader.uint64();
          break;
        case 9:
          message.proposalMatchOrder = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GasParameters {
    return {
      vaultSwap: isSet(object.vaultSwap) ? BigInt(object.vaultSwap.toString()) : BigInt(0),
      vaultInitializePool: isSet(object.vaultInitializePool) ? BigInt(object.vaultInitializePool.toString()) : BigInt(0),
      vaultJoin: isSet(object.vaultJoin) ? BigInt(object.vaultJoin.toString()) : BigInt(0),
      vaultExit: isSet(object.vaultExit) ? BigInt(object.vaultExit.toString()) : BigInt(0),
      vaultRecoveryExit: isSet(object.vaultRecoveryExit) ? BigInt(object.vaultRecoveryExit.toString()) : BigInt(0),
      vaultBatchSwapStep: isSet(object.vaultBatchSwapStep) ? BigInt(object.vaultBatchSwapStep.toString()) : BigInt(0),
      createWeightedPool: isSet(object.createWeightedPool) ? BigInt(object.createWeightedPool.toString()) : BigInt(0),
      submitOrder: isSet(object.submitOrder) ? BigInt(object.submitOrder.toString()) : BigInt(0),
      proposalMatchOrder: isSet(object.proposalMatchOrder) ? BigInt(object.proposalMatchOrder.toString()) : BigInt(0)
    };
  },
  toJSON(message: GasParameters): unknown {
    const obj: any = {};
    message.vaultSwap !== undefined && (obj.vaultSwap = (message.vaultSwap || BigInt(0)).toString());
    message.vaultInitializePool !== undefined && (obj.vaultInitializePool = (message.vaultInitializePool || BigInt(0)).toString());
    message.vaultJoin !== undefined && (obj.vaultJoin = (message.vaultJoin || BigInt(0)).toString());
    message.vaultExit !== undefined && (obj.vaultExit = (message.vaultExit || BigInt(0)).toString());
    message.vaultRecoveryExit !== undefined && (obj.vaultRecoveryExit = (message.vaultRecoveryExit || BigInt(0)).toString());
    message.vaultBatchSwapStep !== undefined && (obj.vaultBatchSwapStep = (message.vaultBatchSwapStep || BigInt(0)).toString());
    message.createWeightedPool !== undefined && (obj.createWeightedPool = (message.createWeightedPool || BigInt(0)).toString());
    message.submitOrder !== undefined && (obj.submitOrder = (message.submitOrder || BigInt(0)).toString());
    message.proposalMatchOrder !== undefined && (obj.proposalMatchOrder = (message.proposalMatchOrder || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<GasParameters>): GasParameters {
    const message = createBaseGasParameters();
    message.vaultSwap = object.vaultSwap !== undefined && object.vaultSwap !== null ? BigInt(object.vaultSwap.toString()) : BigInt(0);
    message.vaultInitializePool = object.vaultInitializePool !== undefined && object.vaultInitializePool !== null ? BigInt(object.vaultInitializePool.toString()) : BigInt(0);
    message.vaultJoin = object.vaultJoin !== undefined && object.vaultJoin !== null ? BigInt(object.vaultJoin.toString()) : BigInt(0);
    message.vaultExit = object.vaultExit !== undefined && object.vaultExit !== null ? BigInt(object.vaultExit.toString()) : BigInt(0);
    message.vaultRecoveryExit = object.vaultRecoveryExit !== undefined && object.vaultRecoveryExit !== null ? BigInt(object.vaultRecoveryExit.toString()) : BigInt(0);
    message.vaultBatchSwapStep = object.vaultBatchSwapStep !== undefined && object.vaultBatchSwapStep !== null ? BigInt(object.vaultBatchSwapStep.toString()) : BigInt(0);
    message.createWeightedPool = object.createWeightedPool !== undefined && object.createWeightedPool !== null ? BigInt(object.createWeightedPool.toString()) : BigInt(0);
    message.submitOrder = object.submitOrder !== undefined && object.submitOrder !== null ? BigInt(object.submitOrder.toString()) : BigInt(0);
    message.proposalMatchOrder = object.proposalMatchOrder !== undefined && object.proposalMatchOrder !== null ? BigInt(object.proposalMatchOrder.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GasParametersAmino): GasParameters {
    const message = createBaseGasParameters();
    if (object.vault_swap !== undefined && object.vault_swap !== null) {
      message.vaultSwap = BigInt(object.vault_swap);
    }
    if (object.vault_initialize_pool !== undefined && object.vault_initialize_pool !== null) {
      message.vaultInitializePool = BigInt(object.vault_initialize_pool);
    }
    if (object.vault_join !== undefined && object.vault_join !== null) {
      message.vaultJoin = BigInt(object.vault_join);
    }
    if (object.vault_exit !== undefined && object.vault_exit !== null) {
      message.vaultExit = BigInt(object.vault_exit);
    }
    if (object.vault_recovery_exit !== undefined && object.vault_recovery_exit !== null) {
      message.vaultRecoveryExit = BigInt(object.vault_recovery_exit);
    }
    if (object.vault_batch_swap_step !== undefined && object.vault_batch_swap_step !== null) {
      message.vaultBatchSwapStep = BigInt(object.vault_batch_swap_step);
    }
    if (object.create_weighted_pool !== undefined && object.create_weighted_pool !== null) {
      message.createWeightedPool = BigInt(object.create_weighted_pool);
    }
    if (object.submit_order !== undefined && object.submit_order !== null) {
      message.submitOrder = BigInt(object.submit_order);
    }
    if (object.proposal_match_order !== undefined && object.proposal_match_order !== null) {
      message.proposalMatchOrder = BigInt(object.proposal_match_order);
    }
    return message;
  },
  toAmino(message: GasParameters, useInterfaces: boolean = true): GasParametersAmino {
    const obj: any = {};
    obj.vault_swap = message.vaultSwap ? message.vaultSwap.toString() : undefined;
    obj.vault_initialize_pool = message.vaultInitializePool ? message.vaultInitializePool.toString() : undefined;
    obj.vault_join = message.vaultJoin ? message.vaultJoin.toString() : undefined;
    obj.vault_exit = message.vaultExit ? message.vaultExit.toString() : undefined;
    obj.vault_recovery_exit = message.vaultRecoveryExit ? message.vaultRecoveryExit.toString() : undefined;
    obj.vault_batch_swap_step = message.vaultBatchSwapStep ? message.vaultBatchSwapStep.toString() : undefined;
    obj.create_weighted_pool = message.createWeightedPool ? message.createWeightedPool.toString() : undefined;
    obj.submit_order = message.submitOrder ? message.submitOrder.toString() : undefined;
    obj.proposal_match_order = message.proposalMatchOrder ? message.proposalMatchOrder.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GasParametersAminoMsg): GasParameters {
    return GasParameters.fromAmino(object.value);
  },
  fromProtoMsg(message: GasParametersProtoMsg, useInterfaces: boolean = true): GasParameters {
    return GasParameters.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GasParameters): Uint8Array {
    return GasParameters.encode(message).finish();
  },
  toProtoMsg(message: GasParameters): GasParametersProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.GasParameters",
      value: GasParameters.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GasParameters.typeUrl, GasParameters);
function createBaseParams(): Params {
  return {
    generalPoolParameters: GeneralPoolParameters.fromPartial({}),
    yammParameters: YammParameters.fromPartial({}),
    orderParameters: OrderParameters.fromPartial({}),
    authorizationParameters: AuthorizationParameters.fromPartial({}),
    gasParameters: GasParameters.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/pryzm.amm.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || GeneralPoolParameters.is(o.generalPoolParameters) && YammParameters.is(o.yammParameters) && OrderParameters.is(o.orderParameters) && AuthorizationParameters.is(o.authorizationParameters) && GasParameters.is(o.gasParameters));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || GeneralPoolParameters.isSDK(o.general_pool_parameters) && YammParameters.isSDK(o.yamm_parameters) && OrderParameters.isSDK(o.order_parameters) && AuthorizationParameters.isSDK(o.authorization_parameters) && GasParameters.isSDK(o.gas_parameters));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || GeneralPoolParameters.isAmino(o.general_pool_parameters) && YammParameters.isAmino(o.yamm_parameters) && OrderParameters.isAmino(o.order_parameters) && AuthorizationParameters.isAmino(o.authorization_parameters) && GasParameters.isAmino(o.gas_parameters));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.generalPoolParameters !== undefined) {
      GeneralPoolParameters.encode(message.generalPoolParameters, writer.uint32(10).fork()).ldelim();
    }
    if (message.yammParameters !== undefined) {
      YammParameters.encode(message.yammParameters, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderParameters !== undefined) {
      OrderParameters.encode(message.orderParameters, writer.uint32(26).fork()).ldelim();
    }
    if (message.authorizationParameters !== undefined) {
      AuthorizationParameters.encode(message.authorizationParameters, writer.uint32(34).fork()).ldelim();
    }
    if (message.gasParameters !== undefined) {
      GasParameters.encode(message.gasParameters, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.generalPoolParameters = GeneralPoolParameters.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.yammParameters = YammParameters.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.orderParameters = OrderParameters.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.authorizationParameters = AuthorizationParameters.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.gasParameters = GasParameters.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      generalPoolParameters: isSet(object.generalPoolParameters) ? GeneralPoolParameters.fromJSON(object.generalPoolParameters) : undefined,
      yammParameters: isSet(object.yammParameters) ? YammParameters.fromJSON(object.yammParameters) : undefined,
      orderParameters: isSet(object.orderParameters) ? OrderParameters.fromJSON(object.orderParameters) : undefined,
      authorizationParameters: isSet(object.authorizationParameters) ? AuthorizationParameters.fromJSON(object.authorizationParameters) : undefined,
      gasParameters: isSet(object.gasParameters) ? GasParameters.fromJSON(object.gasParameters) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.generalPoolParameters !== undefined && (obj.generalPoolParameters = message.generalPoolParameters ? GeneralPoolParameters.toJSON(message.generalPoolParameters) : undefined);
    message.yammParameters !== undefined && (obj.yammParameters = message.yammParameters ? YammParameters.toJSON(message.yammParameters) : undefined);
    message.orderParameters !== undefined && (obj.orderParameters = message.orderParameters ? OrderParameters.toJSON(message.orderParameters) : undefined);
    message.authorizationParameters !== undefined && (obj.authorizationParameters = message.authorizationParameters ? AuthorizationParameters.toJSON(message.authorizationParameters) : undefined);
    message.gasParameters !== undefined && (obj.gasParameters = message.gasParameters ? GasParameters.toJSON(message.gasParameters) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.generalPoolParameters = object.generalPoolParameters !== undefined && object.generalPoolParameters !== null ? GeneralPoolParameters.fromPartial(object.generalPoolParameters) : undefined;
    message.yammParameters = object.yammParameters !== undefined && object.yammParameters !== null ? YammParameters.fromPartial(object.yammParameters) : undefined;
    message.orderParameters = object.orderParameters !== undefined && object.orderParameters !== null ? OrderParameters.fromPartial(object.orderParameters) : undefined;
    message.authorizationParameters = object.authorizationParameters !== undefined && object.authorizationParameters !== null ? AuthorizationParameters.fromPartial(object.authorizationParameters) : undefined;
    message.gasParameters = object.gasParameters !== undefined && object.gasParameters !== null ? GasParameters.fromPartial(object.gasParameters) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.general_pool_parameters !== undefined && object.general_pool_parameters !== null) {
      message.generalPoolParameters = GeneralPoolParameters.fromAmino(object.general_pool_parameters);
    }
    if (object.yamm_parameters !== undefined && object.yamm_parameters !== null) {
      message.yammParameters = YammParameters.fromAmino(object.yamm_parameters);
    }
    if (object.order_parameters !== undefined && object.order_parameters !== null) {
      message.orderParameters = OrderParameters.fromAmino(object.order_parameters);
    }
    if (object.authorization_parameters !== undefined && object.authorization_parameters !== null) {
      message.authorizationParameters = AuthorizationParameters.fromAmino(object.authorization_parameters);
    }
    if (object.gas_parameters !== undefined && object.gas_parameters !== null) {
      message.gasParameters = GasParameters.fromAmino(object.gas_parameters);
    }
    return message;
  },
  toAmino(message: Params, useInterfaces: boolean = true): ParamsAmino {
    const obj: any = {};
    obj.general_pool_parameters = message.generalPoolParameters ? GeneralPoolParameters.toAmino(message.generalPoolParameters, useInterfaces) : undefined;
    obj.yamm_parameters = message.yammParameters ? YammParameters.toAmino(message.yammParameters, useInterfaces) : undefined;
    obj.order_parameters = message.orderParameters ? OrderParameters.toAmino(message.orderParameters, useInterfaces) : undefined;
    obj.authorization_parameters = message.authorizationParameters ? AuthorizationParameters.toAmino(message.authorizationParameters, useInterfaces) : undefined;
    obj.gas_parameters = message.gasParameters ? GasParameters.toAmino(message.gasParameters, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg, useInterfaces: boolean = true): Params {
    return Params.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);