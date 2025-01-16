import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryOperatorRequest, QueryOperatorResponse, QueryOperatorParamsRequest, QueryOperatorParamsResponse, QueryOperatorsRequest, QueryOperatorsResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Operator defines a gRPC query method that returns the operator by the given
   * operator id.
   */
  operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse>;
  /**
   * OperatorParams defines a gRPC query method that returns the operator's
   * params by the given operator id.
   */
  operatorParams(request: QueryOperatorParamsRequest): Promise<QueryOperatorParamsResponse>;
  /** Operators defines a gRPC query method that returns the list of operators. */
  operators(request?: QueryOperatorsRequest): Promise<QueryOperatorsResponse>;
  /**
   * Params defines a gRPC query method that returns the parameters of the
   * module.
   */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.operator = this.operator.bind(this);
    this.operatorParams = this.operatorParams.bind(this);
    this.operators = this.operators.bind(this);
    this.params = this.params.bind(this);
  }
  operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse> {
    const data = QueryOperatorRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.operators.v1.Query", "Operator", data);
    return promise.then(data => QueryOperatorResponse.decode(new BinaryReader(data)));
  }
  operatorParams(request: QueryOperatorParamsRequest): Promise<QueryOperatorParamsResponse> {
    const data = QueryOperatorParamsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.operators.v1.Query", "OperatorParams", data);
    return promise.then(data => QueryOperatorParamsResponse.decode(new BinaryReader(data)));
  }
  operators(request: QueryOperatorsRequest = {
    pagination: undefined
  }): Promise<QueryOperatorsResponse> {
    const data = QueryOperatorsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.operators.v1.Query", "Operators", data);
    return promise.then(data => QueryOperatorsResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.operators.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse> {
      return queryService.operator(request);
    },
    operatorParams(request: QueryOperatorParamsRequest): Promise<QueryOperatorParamsResponse> {
      return queryService.operatorParams(request);
    },
    operators(request?: QueryOperatorsRequest): Promise<QueryOperatorsResponse> {
      return queryService.operators(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};