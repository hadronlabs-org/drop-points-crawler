import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryBondedAmountRequest, QueryBondedAmountResponseSDKType, QueryRewardRequest, QueryRewardResponseSDKType, QueryGetUserStakeStateRequest, QueryGetUserStakeStateResponseSDKType, QueryAllUserStakeStateRequest, QueryAllUserStakeStateResponseSDKType, QueryGetAssetPoolStateRequest, QueryGetAssetPoolStateResponseSDKType, QueryAllAssetPoolStateRequest, QueryAllAssetPoolStateResponseSDKType, QueryGetAssetMaturityPoolStateRequest, QueryGetAssetMaturityPoolStateResponseSDKType, QueryAllAssetMaturityPoolStateRequest, QueryAllAssetMaturityPoolStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.bondedAmount = this.bondedAmount.bind(this);
    this.reward = this.reward.bind(this);
    this.userStakeState = this.userStakeState.bind(this);
    this.userStakeStateAll = this.userStakeStateAll.bind(this);
    this.assetPoolState = this.assetPoolState.bind(this);
    this.assetPoolStateAll = this.assetPoolStateAll.bind(this);
    this.assetMaturityPoolState = this.assetMaturityPoolState.bind(this);
    this.assetMaturityPoolStateAll = this.assetMaturityPoolStateAll.bind(this);
  }
  /* Queries a list of BondedAmount items. */
  async bondedAmount(params: QueryBondedAmountRequest): Promise<QueryBondedAmountResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.maturity !== "undefined") {
      options.params.maturity = params.maturity;
    }
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    const endpoint = `pryzm/ystaking/v1/bonded_amount/${params.assetId}`;
    return await this.req.get<QueryBondedAmountResponseSDKType>(endpoint, options);
  }
  /* Reward */
  async reward(params: QueryRewardRequest): Promise<QueryRewardResponseSDKType> {
    const endpoint = `pryzm/ystaking/v1/reward/${params.denom}/${params.address}`;
    return await this.req.get<QueryRewardResponseSDKType>(endpoint);
  }
  /* UserStakeState */
  async userStakeState(params: QueryGetUserStakeStateRequest): Promise<QueryGetUserStakeStateResponseSDKType> {
    const endpoint = `pryzm/ystaking/v1/user_stake_state/${params.address}/${params.assetId}/${params.maturitySymbol}`;
    return await this.req.get<QueryGetUserStakeStateResponseSDKType>(endpoint);
  }
  /* Queries a list of UserStakeState items. */
  async userStakeStateAll(params: QueryAllUserStakeStateRequest): Promise<QueryAllUserStakeStateResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.assetId !== "undefined") {
      options.params.asset_id = params.assetId;
    }
    const endpoint = `pryzm/ystaking/v1/user_stake_state`;
    return await this.req.get<QueryAllUserStakeStateResponseSDKType>(endpoint, options);
  }
  /* AssetPoolState */
  async assetPoolState(params: QueryGetAssetPoolStateRequest): Promise<QueryGetAssetPoolStateResponseSDKType> {
    const endpoint = `pryzm/ystaking/v1/asset_pool_state/${params.assetId}`;
    return await this.req.get<QueryGetAssetPoolStateResponseSDKType>(endpoint);
  }
  /* AssetPoolStateAll */
  async assetPoolStateAll(params: QueryAllAssetPoolStateRequest = {
    pagination: undefined
  }): Promise<QueryAllAssetPoolStateResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/ystaking/v1/asset_pool_state`;
    return await this.req.get<QueryAllAssetPoolStateResponseSDKType>(endpoint, options);
  }
  /* AssetMaturityPoolState */
  async assetMaturityPoolState(params: QueryGetAssetMaturityPoolStateRequest): Promise<QueryGetAssetMaturityPoolStateResponseSDKType> {
    const endpoint = `pryzm/ystaking/v1/asset_maturity_pool_state/${params.assetId}/${params.maturitySymbol}`;
    return await this.req.get<QueryGetAssetMaturityPoolStateResponseSDKType>(endpoint);
  }
  /* AssetMaturityPoolStateAll */
  async assetMaturityPoolStateAll(params: QueryAllAssetMaturityPoolStateRequest = {
    pagination: undefined
  }): Promise<QueryAllAssetMaturityPoolStateResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/ystaking/v1/asset_maturity_pool_state`;
    return await this.req.get<QueryAllAssetMaturityPoolStateResponseSDKType>(endpoint, options);
  }
}