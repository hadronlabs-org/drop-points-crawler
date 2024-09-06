import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetHostChainRequest, QueryGetHostChainResponseSDKType, QueryAllHostChainRequest, QueryAllHostChainResponseSDKType, QueryGetHostChainStateRequest, QueryGetHostChainStateResponseSDKType, QueryAllHostChainStateRequest, QueryAllHostChainStateResponseSDKType, QueryGetUndelegationRequest, QueryGetUndelegationResponseSDKType, QueryAllUndelegationRequest, QueryAllUndelegationResponseSDKType, QueryIncompleteUndelegationRequest, QueryIncompleteUndelegationResponseSDKType, QueryGetChannelUndelegationRequest, QueryGetChannelUndelegationResponseSDKType, QueryAllChannelUndelegationRequest, QueryAllChannelUndelegationResponseSDKType, QueryDelegationQueueBalanceRequest, QueryDelegationQueueBalanceResponseSDKType, QueryEpochInfoRequest, QueryEpochInfoResponseSDKType, QueryAllReplyDataRequest, QueryAllReplyDataResponseSDKType, QueryAllRedeemableLsmRequest, QueryAllRedeemableLsmResponseSDKType, QueryAllFailedLsmTransferRequest, QueryAllFailedLsmTransferResponseSDKType, QueryGetMultiSigConnectionRequest, QueryGetMultiSigConnectionResponseSDKType, QueryAllMultiSigConnectionRequest, QueryAllMultiSigConnectionResponseSDKType, QueryGetMultiSigPacketRequest, QueryGetMultiSigPacketResponseSDKType, QueryAllMultiSigPacketRequest, QueryAllMultiSigPacketResponseSDKType, QueryAllSweepTransferRequest, QueryAllSweepTransferResponseSDKType, QuerySimulateStakeRequest, QuerySimulateStakeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.hostChain = this.hostChain.bind(this);
    this.hostChainAll = this.hostChainAll.bind(this);
    this.hostChainState = this.hostChainState.bind(this);
    this.hostChainStateAll = this.hostChainStateAll.bind(this);
    this.undelegation = this.undelegation.bind(this);
    this.undelegationAll = this.undelegationAll.bind(this);
    this.incompleteUndelegationAll = this.incompleteUndelegationAll.bind(this);
    this.channelUndelegation = this.channelUndelegation.bind(this);
    this.channelUndelegationAll = this.channelUndelegationAll.bind(this);
    this.delegationQueueBalance = this.delegationQueueBalance.bind(this);
    this.epochInfo = this.epochInfo.bind(this);
    this.replyDataAll = this.replyDataAll.bind(this);
    this.redeemableLsmAll = this.redeemableLsmAll.bind(this);
    this.failedLsmTransferAll = this.failedLsmTransferAll.bind(this);
    this.multiSigConnection = this.multiSigConnection.bind(this);
    this.multiSigConnectionAll = this.multiSigConnectionAll.bind(this);
    this.multiSigPacket = this.multiSigPacket.bind(this);
    this.multiSigPacketAll = this.multiSigPacketAll.bind(this);
    this.sweepTransferAll = this.sweepTransferAll.bind(this);
    this.simulateStake = this.simulateStake.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pryzm/icstaking/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a HostChain by index. */
  async hostChain(params: QueryGetHostChainRequest): Promise<QueryGetHostChainResponseSDKType> {
    const endpoint = `pryzm/icstaking/v1/host_chain/${params.hostChainId}`;
    return await this.req.get<QueryGetHostChainResponseSDKType>(endpoint);
  }
  /* Queries a list of HostChain items. */
  async hostChainAll(params: QueryAllHostChainRequest = {
    pagination: undefined
  }): Promise<QueryAllHostChainResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/icstaking/v1/host_chain`;
    return await this.req.get<QueryAllHostChainResponseSDKType>(endpoint, options);
  }
  /* Queries a HostChainState by index. */
  async hostChainState(params: QueryGetHostChainStateRequest): Promise<QueryGetHostChainStateResponseSDKType> {
    const endpoint = `pryzm/icstaking/v1/host_chain_state/${params.hostChainId}`;
    return await this.req.get<QueryGetHostChainStateResponseSDKType>(endpoint);
  }
  /* Queries a list of HostChainState items. */
  async hostChainStateAll(params: QueryAllHostChainStateRequest = {
    pagination: undefined
  }): Promise<QueryAllHostChainStateResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/icstaking/v1/host_chain_state`;
    return await this.req.get<QueryAllHostChainStateResponseSDKType>(endpoint, options);
  }
  /* Queries a Undelegation by index. */
  async undelegation(params: QueryGetUndelegationRequest): Promise<QueryGetUndelegationResponseSDKType> {
    const endpoint = `pryzm/icstaking/v1/undelegation/${params.hostChain}/${params.epoch}`;
    return await this.req.get<QueryGetUndelegationResponseSDKType>(endpoint);
  }
  /* Queries a list of Undelegation items. */
  async undelegationAll(params: QueryAllUndelegationRequest): Promise<QueryAllUndelegationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.hostChain !== "undefined") {
      options.params.host_chain = params.hostChain;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/icstaking/v1/undelegation`;
    return await this.req.get<QueryAllUndelegationResponseSDKType>(endpoint, options);
  }
  /* Queries a list of incomplete undelegations sorted by completion time. */
  async incompleteUndelegationAll(params: QueryIncompleteUndelegationRequest): Promise<QueryIncompleteUndelegationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/icstaking/v1/undelegation/${params.hostChain}`;
    return await this.req.get<QueryIncompleteUndelegationResponseSDKType>(endpoint, options);
  }
  /* Queries a ChannelUndelegation by index. */
  async channelUndelegation(params: QueryGetChannelUndelegationRequest): Promise<QueryGetChannelUndelegationResponseSDKType> {
    const endpoint = `pryzm/icstaking/v1/channel_undelegation/${params.hostChain}/${params.epoch}/${params.transferChannel}`;
    return await this.req.get<QueryGetChannelUndelegationResponseSDKType>(endpoint);
  }
  /* Queries a list of ChannelUndelegation items. */
  async channelUndelegationAll(params: QueryAllChannelUndelegationRequest): Promise<QueryAllChannelUndelegationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.hostChain !== "undefined") {
      options.params.host_chain = params.hostChain;
    }
    if (typeof params?.epoch !== "undefined") {
      options.params.epoch = params.epoch;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/icstaking/v1/channel_undelegation`;
    return await this.req.get<QueryAllChannelUndelegationResponseSDKType>(endpoint, options);
  }
  /* Queries the balance of the delegation queue. */
  async delegationQueueBalance(params: QueryDelegationQueueBalanceRequest): Promise<QueryDelegationQueueBalanceResponseSDKType> {
    const endpoint = `pryzm/icstaking/v1/delegation_queue_balance/${params.hostChain}/${params.transferChannel}`;
    return await this.req.get<QueryDelegationQueueBalanceResponseSDKType>(endpoint);
  }
  /* Queries the information about last delegation and undelegation times */
  async epochInfo(params: QueryEpochInfoRequest): Promise<QueryEpochInfoResponseSDKType> {
    const endpoint = `pryzm/icstaking/v1/epoch_info/${params.hostChain}`;
    return await this.req.get<QueryEpochInfoResponseSDKType>(endpoint);
  }
  /* Queries the list of reply data */
  async replyDataAll(params: QueryAllReplyDataRequest = {
    pagination: undefined
  }): Promise<QueryAllReplyDataResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/icstaking/v1/reply_data`;
    return await this.req.get<QueryAllReplyDataResponseSDKType>(endpoint, options);
  }
  /* Queries a list of FailedLsmTransfer items. */
  async redeemableLsmAll(params: QueryAllRedeemableLsmRequest): Promise<QueryAllRedeemableLsmResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.hostChain !== "undefined") {
      options.params.host_chain = params.hostChain;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/icstaking/v1/redeemable_lsm`;
    return await this.req.get<QueryAllRedeemableLsmResponseSDKType>(endpoint, options);
  }
  /* Queries a list of FailedLsmTransfer items. */
  async failedLsmTransferAll(params: QueryAllFailedLsmTransferRequest): Promise<QueryAllFailedLsmTransferResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.hostChain !== "undefined") {
      options.params.host_chain = params.hostChain;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/icstaking/v1/failed_lsm_transfer`;
    return await this.req.get<QueryAllFailedLsmTransferResponseSDKType>(endpoint, options);
  }
  /* Queries a MultiSigConnection by index. */
  async multiSigConnection(params: QueryGetMultiSigConnectionRequest): Promise<QueryGetMultiSigConnectionResponseSDKType> {
    const endpoint = `pryzm/icstaking/v1/multi_sig_connection/${params.id}`;
    return await this.req.get<QueryGetMultiSigConnectionResponseSDKType>(endpoint);
  }
  /* Queries a list of MultiSigConnection items. */
  async multiSigConnectionAll(params: QueryAllMultiSigConnectionRequest = {
    pagination: undefined
  }): Promise<QueryAllMultiSigConnectionResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/icstaking/v1/multi_sig_connection`;
    return await this.req.get<QueryAllMultiSigConnectionResponseSDKType>(endpoint, options);
  }
  /* Queries a MultiSigPacket by index. */
  async multiSigPacket(params: QueryGetMultiSigPacketRequest): Promise<QueryGetMultiSigPacketResponseSDKType> {
    const endpoint = `pryzm/icstaking/v1/multi_sig_packet/${params.connectionId}/${params.sequence}`;
    return await this.req.get<QueryGetMultiSigPacketResponseSDKType>(endpoint);
  }
  /* Queries a list of MultiSigPacket items. */
  async multiSigPacketAll(params: QueryAllMultiSigPacketRequest): Promise<QueryAllMultiSigPacketResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.connectionId !== "undefined") {
      options.params.connection_id = params.connectionId;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/icstaking/v1/multi_sig_packet`;
    return await this.req.get<QueryAllMultiSigPacketResponseSDKType>(endpoint, options);
  }
  /* Queries the list of sweep transfer */
  async sweepTransferAll(params: QueryAllSweepTransferRequest = {
    pagination: undefined
  }): Promise<QueryAllSweepTransferResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/icstaking/v1/sweep_transfer`;
    return await this.req.get<QueryAllSweepTransferResponseSDKType>(endpoint, options);
  }
  /* Simulates the stake message */
  async simulateStake(params: QuerySimulateStakeRequest): Promise<QuerySimulateStakeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.hostChain !== "undefined") {
      options.params.host_chain = params.hostChain;
    }
    if (typeof params?.transferChannel !== "undefined") {
      options.params.transfer_channel = params.transferChannel;
    }
    if (typeof params?.amountIn !== "undefined") {
      options.params.amount_in = params.amountIn;
    }
    if (typeof params?.amountOut !== "undefined") {
      options.params.amount_out = params.amountOut;
    }
    const endpoint = `pryzm/icstaking/v1/simulate_stake`;
    return await this.req.get<QuerySimulateStakeResponseSDKType>(endpoint, options);
  }
}