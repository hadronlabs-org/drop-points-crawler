import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryGetAssetStateRequest, QueryGetAssetStateResponseSDKType, QueryGetCPExchangeRateRequest, QueryGetCPExchangeRateResponseSDKType, QuerySimulateRefractRequest, QuerySimulateRefractResponseSDKType, QuerySimulateRedeemRequest, QuerySimulateRedeemResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.assetState = this.assetState.bind(this);
    this.cPExchangeRate = this.cPExchangeRate.bind(this);
    this.simulateRefract = this.simulateRefract.bind(this);
    this.simulateRedeem = this.simulateRedeem.bind(this);
  }
  /* AssetState */
  async assetState(params: QueryGetAssetStateRequest): Promise<QueryGetAssetStateResponseSDKType> {
    const endpoint = `pryzm/refractor/v1/asset_state/${params.assetId}`;
    return await this.req.get<QueryGetAssetStateResponseSDKType>(endpoint);
  }
  /* CPExchangeRate */
  async cPExchangeRate(params: QueryGetCPExchangeRateRequest): Promise<QueryGetCPExchangeRateResponseSDKType> {
    const endpoint = `pryzm/refractor/v1/c_p_exchange_rate/${params.assetId}`;
    return await this.req.get<QueryGetCPExchangeRateResponseSDKType>(endpoint);
  }
  /* SimulateRefract */
  async simulateRefract(params: QuerySimulateRefractRequest): Promise<QuerySimulateRefractResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.amount !== "undefined") {
      options.params.amount = params.amount;
    }
    if (typeof params?.maturity !== "undefined") {
      options.params.maturity = params.maturity;
    }
    const endpoint = `pryzm/refractor/v1/simulate_refract`;
    return await this.req.get<QuerySimulateRefractResponseSDKType>(endpoint, options);
  }
  /* SimulateRedeem */
  async simulateRedeem(params: QuerySimulateRedeemRequest): Promise<QuerySimulateRedeemResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pAmount !== "undefined") {
      options.params.p_amount = params.pAmount;
    }
    if (typeof params?.yAmount !== "undefined") {
      options.params.y_amount = params.yAmount;
    }
    const endpoint = `pryzm/refractor/v1/simulate_redeem`;
    return await this.req.get<QuerySimulateRedeemResponseSDKType>(endpoint, options);
  }
}