import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetActionRequest, QueryGetActionResponseSDKType, QueryGetFlowTradeRequest, QueryGetFlowTradeResponseSDKType, QueryAllFlowTradeRequest, QueryAllFlowTradeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.action = this.action.bind(this);
    this.flowTrade = this.flowTrade.bind(this);
    this.flowTradeAll = this.flowTradeAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pryzm/treasury/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Action by index. */
  async action(_params: QueryGetActionRequest = {}): Promise<QueryGetActionResponseSDKType> {
    const endpoint = `pryzm/treasury/v1/action`;
    return await this.req.get<QueryGetActionResponseSDKType>(endpoint);
  }
  /* Queries a FlowTrade by index. */
  async flowTrade(params: QueryGetFlowTradeRequest): Promise<QueryGetFlowTradeResponseSDKType> {
    const endpoint = `pryzm/treasury/v1/flow_trade/${params.flowId}`;
    return await this.req.get<QueryGetFlowTradeResponseSDKType>(endpoint);
  }
  /* Queries a list of FlowTrade items. */
  async flowTradeAll(params: QueryAllFlowTradeRequest = {
    pagination: undefined
  }): Promise<QueryAllFlowTradeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/treasury/v1/flow_trade`;
    return await this.req.get<QueryAllFlowTradeResponseSDKType>(endpoint, options);
  }
}