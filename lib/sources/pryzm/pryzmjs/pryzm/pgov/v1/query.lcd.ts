import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetStakedPAssetRequest, QueryGetStakedPAssetResponseSDKType, QueryAllStakedPAssetRequest, QueryAllStakedPAssetResponseSDKType, QueryGetTotalStakedPAssetRequest, QueryGetTotalStakedPAssetResponseSDKType, QueryAllTotalStakedPAssetRequest, QueryAllTotalStakedPAssetResponseSDKType, QueryGetVoteRequest, QueryGetVoteResponseSDKType, QueryAllVoteRequest, QueryAllVoteResponseSDKType, QueryGetProposalRequest, QueryGetProposalResponseSDKType, QueryAllProposalRequest, QueryAllProposalResponseSDKType, QueryTallyResultRequest, QueryTallyResultResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.stakedPAsset = this.stakedPAsset.bind(this);
    this.stakedPAssetAll = this.stakedPAssetAll.bind(this);
    this.totalStakedPAsset = this.totalStakedPAsset.bind(this);
    this.totalStakedPAssetAll = this.totalStakedPAssetAll.bind(this);
    this.vote = this.vote.bind(this);
    this.voteAll = this.voteAll.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalAll = this.proposalAll.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pryzm/pgov/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a StakedPAsset by index. */
  async stakedPAsset(params: QueryGetStakedPAssetRequest): Promise<QueryGetStakedPAssetResponseSDKType> {
    const endpoint = `pryzm/pgov/v1/staked_p_asset/${params.account}/${params.pAsset}`;
    return await this.req.get<QueryGetStakedPAssetResponseSDKType>(endpoint);
  }
  /* Queries a list of StakedPAsset items. */
  async stakedPAssetAll(params: QueryAllStakedPAssetRequest): Promise<QueryAllStakedPAssetResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.account !== "undefined") {
      options.params.account = params.account;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/pgov/v1/staked_p_asset`;
    return await this.req.get<QueryAllStakedPAssetResponseSDKType>(endpoint, options);
  }
  /* TotalStakedPAsset */
  async totalStakedPAsset(params: QueryGetTotalStakedPAssetRequest): Promise<QueryGetTotalStakedPAssetResponseSDKType> {
    const endpoint = `pryzm/pgov/v1/total_staked_p_asset/${params.account}/${params.asset}`;
    return await this.req.get<QueryGetTotalStakedPAssetResponseSDKType>(endpoint);
  }
  /* TotalStakedPAssetAll */
  async totalStakedPAssetAll(params: QueryAllTotalStakedPAssetRequest): Promise<QueryAllTotalStakedPAssetResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.account !== "undefined") {
      options.params.account = params.account;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/pgov/v1/total_staked_p_asset`;
    return await this.req.get<QueryAllTotalStakedPAssetResponseSDKType>(endpoint, options);
  }
  /* Queries a Vote by index. */
  async vote(params: QueryGetVoteRequest): Promise<QueryGetVoteResponseSDKType> {
    const endpoint = `pryzm/pgov/v1/vote/${params.asset}/${params.proposal}/${params.voter}`;
    return await this.req.get<QueryGetVoteResponseSDKType>(endpoint);
  }
  /* Queries a list of Vote items. */
  async voteAll(params: QueryAllVoteRequest): Promise<QueryAllVoteResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/pgov/v1/vote/${params.asset}/${params.proposal}`;
    return await this.req.get<QueryAllVoteResponseSDKType>(endpoint, options);
  }
  /* Queries a Proposal by index. */
  async proposal(params: QueryGetProposalRequest): Promise<QueryGetProposalResponseSDKType> {
    const endpoint = `pryzm/pgov/v1/proposal/${params.asset}/${params.proposalId}`;
    return await this.req.get<QueryGetProposalResponseSDKType>(endpoint);
  }
  /* Queries a list of Proposal items. */
  async proposalAll(params: QueryAllProposalRequest): Promise<QueryAllProposalResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.asset !== "undefined") {
      options.params.asset = params.asset;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/pgov/v1/proposal`;
    return await this.req.get<QueryAllProposalResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Proposal items. */
  async tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> {
    const endpoint = `pryzm/pgov/v1/tally_result/${params.asset}/${params.proposal}`;
    return await this.req.get<QueryTallyResultResponseSDKType>(endpoint);
  }
}