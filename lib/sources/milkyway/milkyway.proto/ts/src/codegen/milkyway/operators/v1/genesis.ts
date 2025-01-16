import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Operator, OperatorAmino, OperatorSDKType, OperatorParams, OperatorParamsAmino, OperatorParamsSDKType } from "./models";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/** GenesisState defines the operators module's genesis state. */
export interface GenesisState {
  /** Params defines the parameters of the module. */
  params: Params;
  /**
   * NextOperatorID defines the ID that will be assigned to the
   * next operator that gets created.
   */
  nextOperatorId: number;
  /** Operators defines the list of operators. */
  operators: Operator[];
  /**
   * UnbondingOperators defines the list of operators that are currently being
   * unbonded.
   */
  unbondingOperators: UnbondingOperator[];
  /** OperatorsParams defines the list of operators params. */
  operatorsParams: OperatorParamsRecord[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/milkyway.operators.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the operators module's genesis state. */
export interface GenesisStateAmino {
  /** Params defines the parameters of the module. */
  params?: ParamsAmino;
  /**
   * NextOperatorID defines the ID that will be assigned to the
   * next operator that gets created.
   */
  next_operator_id?: number;
  /** Operators defines the list of operators. */
  operators?: OperatorAmino[];
  /**
   * UnbondingOperators defines the list of operators that are currently being
   * unbonded.
   */
  unbonding_operators?: UnbondingOperatorAmino[];
  /** OperatorsParams defines the list of operators params. */
  operators_params?: OperatorParamsRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/milkyway.operators.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the operators module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  next_operator_id: number;
  operators: OperatorSDKType[];
  unbonding_operators: UnbondingOperatorSDKType[];
  operators_params: OperatorParamsRecordSDKType[];
}
/**
 * UnbondingOperator contains the data about an operator that is currently being
 * unbonded.
 */
export interface UnbondingOperator {
  /** OperatorID is the ID of the operator that is being unbonded. */
  operatorId: number;
  /**
   * UnbondingCompletionTime is the time at which the unbonding of the operator
   * will be completed
   */
  unbondingCompletionTime: Date;
}
export interface UnbondingOperatorProtoMsg {
  typeUrl: "/milkyway.operators.v1.UnbondingOperator";
  value: Uint8Array;
}
/**
 * UnbondingOperator contains the data about an operator that is currently being
 * unbonded.
 */
export interface UnbondingOperatorAmino {
  /** OperatorID is the ID of the operator that is being unbonded. */
  operator_id?: number;
  /**
   * UnbondingCompletionTime is the time at which the unbonding of the operator
   * will be completed
   */
  unbonding_completion_time?: string;
}
export interface UnbondingOperatorAminoMsg {
  type: "/milkyway.operators.v1.UnbondingOperator";
  value: UnbondingOperatorAmino;
}
/**
 * UnbondingOperator contains the data about an operator that is currently being
 * unbonded.
 */
export interface UnbondingOperatorSDKType {
  operator_id: number;
  unbonding_completion_time: Date;
}
/**
 * OperatorParamsRecord represents the params that have been set for an
 * individual operator.
 */
export interface OperatorParamsRecord {
  /** OperatorID is the ID of the operator. */
  operatorId: number;
  /** Params defines the parameters for the operators module. */
  params: OperatorParams;
}
export interface OperatorParamsRecordProtoMsg {
  typeUrl: "/milkyway.operators.v1.OperatorParamsRecord";
  value: Uint8Array;
}
/**
 * OperatorParamsRecord represents the params that have been set for an
 * individual operator.
 */
export interface OperatorParamsRecordAmino {
  /** OperatorID is the ID of the operator. */
  operator_id?: number;
  /** Params defines the parameters for the operators module. */
  params?: OperatorParamsAmino;
}
export interface OperatorParamsRecordAminoMsg {
  type: "/milkyway.operators.v1.OperatorParamsRecord";
  value: OperatorParamsRecordAmino;
}
/**
 * OperatorParamsRecord represents the params that have been set for an
 * individual operator.
 */
export interface OperatorParamsRecordSDKType {
  operator_id: number;
  params: OperatorParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    nextOperatorId: 0,
    operators: [],
    unbondingOperators: [],
    operatorsParams: []
  };
}
export const GenesisState = {
  typeUrl: "/milkyway.operators.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextOperatorId !== 0) {
      writer.uint32(16).uint32(message.nextOperatorId);
    }
    for (const v of message.operators) {
      Operator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.unbondingOperators) {
      UnbondingOperator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.operatorsParams) {
      OperatorParamsRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nextOperatorId = reader.uint32();
          break;
        case 3:
          message.operators.push(Operator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.unbondingOperators.push(UnbondingOperator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.operatorsParams.push(OperatorParamsRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.nextOperatorId = object.nextOperatorId ?? 0;
    message.operators = object.operators?.map(e => Operator.fromPartial(e)) || [];
    message.unbondingOperators = object.unbondingOperators?.map(e => UnbondingOperator.fromPartial(e)) || [];
    message.operatorsParams = object.operatorsParams?.map(e => OperatorParamsRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.next_operator_id !== undefined && object.next_operator_id !== null) {
      message.nextOperatorId = object.next_operator_id;
    }
    message.operators = object.operators?.map(e => Operator.fromAmino(e)) || [];
    message.unbondingOperators = object.unbonding_operators?.map(e => UnbondingOperator.fromAmino(e)) || [];
    message.operatorsParams = object.operators_params?.map(e => OperatorParamsRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.next_operator_id = message.nextOperatorId === 0 ? undefined : message.nextOperatorId;
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
    if (message.unbondingOperators) {
      obj.unbonding_operators = message.unbondingOperators.map(e => e ? UnbondingOperator.toAmino(e) : undefined);
    } else {
      obj.unbonding_operators = message.unbondingOperators;
    }
    if (message.operatorsParams) {
      obj.operators_params = message.operatorsParams.map(e => e ? OperatorParamsRecord.toAmino(e) : undefined);
    } else {
      obj.operators_params = message.operatorsParams;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseUnbondingOperator(): UnbondingOperator {
  return {
    operatorId: 0,
    unbondingCompletionTime: new Date()
  };
}
export const UnbondingOperator = {
  typeUrl: "/milkyway.operators.v1.UnbondingOperator",
  encode(message: UnbondingOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    if (message.unbondingCompletionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.unbondingCompletionTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        case 2:
          message.unbondingCompletionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UnbondingOperator>): UnbondingOperator {
    const message = createBaseUnbondingOperator();
    message.operatorId = object.operatorId ?? 0;
    message.unbondingCompletionTime = object.unbondingCompletionTime ?? undefined;
    return message;
  },
  fromAmino(object: UnbondingOperatorAmino): UnbondingOperator {
    const message = createBaseUnbondingOperator();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.unbonding_completion_time !== undefined && object.unbonding_completion_time !== null) {
      message.unbondingCompletionTime = fromTimestamp(Timestamp.fromAmino(object.unbonding_completion_time));
    }
    return message;
  },
  toAmino(message: UnbondingOperator): UnbondingOperatorAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.unbonding_completion_time = message.unbondingCompletionTime ? Timestamp.toAmino(toTimestamp(message.unbondingCompletionTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: UnbondingOperatorAminoMsg): UnbondingOperator {
    return UnbondingOperator.fromAmino(object.value);
  },
  fromProtoMsg(message: UnbondingOperatorProtoMsg): UnbondingOperator {
    return UnbondingOperator.decode(message.value);
  },
  toProto(message: UnbondingOperator): Uint8Array {
    return UnbondingOperator.encode(message).finish();
  },
  toProtoMsg(message: UnbondingOperator): UnbondingOperatorProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.UnbondingOperator",
      value: UnbondingOperator.encode(message).finish()
    };
  }
};
function createBaseOperatorParamsRecord(): OperatorParamsRecord {
  return {
    operatorId: 0,
    params: OperatorParams.fromPartial({})
  };
}
export const OperatorParamsRecord = {
  typeUrl: "/milkyway.operators.v1.OperatorParamsRecord",
  encode(message: OperatorParamsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    if (message.params !== undefined) {
      OperatorParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperatorParamsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorParamsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        case 2:
          message.params = OperatorParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OperatorParamsRecord>): OperatorParamsRecord {
    const message = createBaseOperatorParamsRecord();
    message.operatorId = object.operatorId ?? 0;
    message.params = object.params !== undefined && object.params !== null ? OperatorParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: OperatorParamsRecordAmino): OperatorParamsRecord {
    const message = createBaseOperatorParamsRecord();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = OperatorParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: OperatorParamsRecord): OperatorParamsRecordAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.params = message.params ? OperatorParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: OperatorParamsRecordAminoMsg): OperatorParamsRecord {
    return OperatorParamsRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorParamsRecordProtoMsg): OperatorParamsRecord {
    return OperatorParamsRecord.decode(message.value);
  },
  toProto(message: OperatorParamsRecord): Uint8Array {
    return OperatorParamsRecord.encode(message).finish();
  },
  toProtoMsg(message: OperatorParamsRecord): OperatorParamsRecordProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.OperatorParamsRecord",
      value: OperatorParamsRecord.encode(message).finish()
    };
  }
};