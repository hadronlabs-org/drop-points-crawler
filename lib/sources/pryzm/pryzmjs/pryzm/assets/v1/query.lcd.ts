import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetRefractableAssetRequest, QueryGetRefractableAssetResponseSDKType, QueryAllRefractableAssetRequest, QueryAllRefractableAssetResponseSDKType, QueryGetMaturityLevelRequest, QueryGetMaturityLevelResponseSDKType, QueryAllMaturityLevelRequest, QueryAllMaturityLevelResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.refractableAsset = this.refractableAsset.bind(this);
    this.refractableAssetAll = this.refractableAssetAll.bind(this);
    this.maturityLevel = this.maturityLevel.bind(this);
    this.maturityLevelAll = this.maturityLevelAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pryzm/assets/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a RefractableAsset by index. */
  async refractableAsset(params: QueryGetRefractableAssetRequest): Promise<QueryGetRefractableAssetResponseSDKType> {
    const endpoint = `pryzm/assets/v1/refractable_asset/${params.assetId}`;
    return await this.req.get<QueryGetRefractableAssetResponseSDKType>(endpoint);
  }
  /* Queries a list of RefractableAsset items. */
  async refractableAssetAll(params: QueryAllRefractableAssetRequest): Promise<QueryAllRefractableAssetResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.enabled !== "undefined") {
      options.params.enabled = params.enabled;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/assets/v1/refractable_asset`;
    return await this.req.get<QueryAllRefractableAssetResponseSDKType>(endpoint, options);
  }
  /* Queries a MaturityLevel by index. */
  async maturityLevel(params: QueryGetMaturityLevelRequest): Promise<QueryGetMaturityLevelResponseSDKType> {
    const endpoint = `pryzm/assets/v1/maturity_level/${params.assetId}/${params.symbol}`;
    return await this.req.get<QueryGetMaturityLevelResponseSDKType>(endpoint);
  }
  /* Queries a list of MaturityLevel items. */
  async maturityLevelAll(params: QueryAllMaturityLevelRequest): Promise<QueryAllMaturityLevelResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.assetId !== "undefined") {
      options.params.asset_id = params.assetId;
    }
    if (typeof params?.assetEnabled !== "undefined") {
      options.params.asset_enabled = params.assetEnabled;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/assets/v1/maturity_level/${params.active}`;
    return await this.req.get<QueryAllMaturityLevelResponseSDKType>(endpoint, options);
  }
}