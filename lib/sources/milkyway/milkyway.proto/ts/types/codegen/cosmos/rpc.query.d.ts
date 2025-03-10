import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    cosmos: {
        app: {
            v1alpha1: {
                config(request?: import("./app/v1alpha1/query").QueryConfigRequest): Promise<import("./app/v1alpha1/query").QueryConfigResponse>;
            };
        };
        auth: {
            v1beta1: {
                accounts(request?: import("./auth/v1beta1/query").QueryAccountsRequest): Promise<import("./auth/v1beta1/query").QueryAccountsResponse>;
                account(request: import("./auth/v1beta1/query").QueryAccountRequest): Promise<import("./auth/v1beta1/query").QueryAccountResponse>;
                accountAddressByID(request: import("./auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("./auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                params(request?: import("./auth/v1beta1/query").QueryParamsRequest): Promise<import("./auth/v1beta1/query").QueryParamsResponse>;
                moduleAccounts(request?: import("./auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("./auth/v1beta1/query").QueryModuleAccountsResponse>;
                moduleAccountByName(request: import("./auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("./auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: import("./auth/v1beta1/query").Bech32PrefixRequest): Promise<import("./auth/v1beta1/query").Bech32PrefixResponse>;
                addressBytesToString(request: import("./auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("./auth/v1beta1/query").AddressBytesToStringResponse>;
                addressStringToBytes(request: import("./auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("./auth/v1beta1/query").AddressStringToBytesResponse>;
                accountInfo(request: import("./auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("./auth/v1beta1/query").QueryAccountInfoResponse>;
            };
        };
        authz: {
            v1beta1: {
                grants(request: import("./authz/v1beta1/query").QueryGrantsRequest): Promise<import("./authz/v1beta1/query").QueryGrantsResponse>;
                granterGrants(request: import("./authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("./authz/v1beta1/query").QueryGranterGrantsResponse>;
                granteeGrants(request: import("./authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("./authz/v1beta1/query").QueryGranteeGrantsResponse>;
            };
        };
        autocli: {
            v1: {
                appOptions(request?: import("./autocli/v1/query").AppOptionsRequest): Promise<import("./autocli/v1/query").AppOptionsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("./bank/v1beta1/query").QueryBalanceRequest): Promise<import("./bank/v1beta1/query").QueryBalanceResponse>;
                allBalances(request: import("./bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("./bank/v1beta1/query").QueryAllBalancesResponse>;
                spendableBalances(request: import("./bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("./bank/v1beta1/query").QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: import("./bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("./bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: import("./bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("./bank/v1beta1/query").QueryTotalSupplyResponse>;
                supplyOf(request: import("./bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("./bank/v1beta1/query").QuerySupplyOfResponse>;
                params(request?: import("./bank/v1beta1/query").QueryParamsRequest): Promise<import("./bank/v1beta1/query").QueryParamsResponse>;
                denomMetadata(request: import("./bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("./bank/v1beta1/query").QueryDenomMetadataResponse>;
                denomMetadataByQueryString(request: import("./bank/v1beta1/query").QueryDenomMetadataByQueryStringRequest): Promise<import("./bank/v1beta1/query").QueryDenomMetadataByQueryStringResponse>;
                denomsMetadata(request?: import("./bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("./bank/v1beta1/query").QueryDenomsMetadataResponse>;
                denomOwners(request: import("./bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("./bank/v1beta1/query").QueryDenomOwnersResponse>;
                denomOwnersByQuery(request: import("./bank/v1beta1/query").QueryDenomOwnersByQueryRequest): Promise<import("./bank/v1beta1/query").QueryDenomOwnersByQueryResponse>;
                sendEnabled(request: import("./bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("./bank/v1beta1/query").QuerySendEnabledResponse>;
            };
        };
        base: {
            node: {
                v1beta1: {
                    config(request?: import("./base/node/v1beta1/query").ConfigRequest): Promise<import("./base/node/v1beta1/query").ConfigResponse>;
                    status(request?: import("./base/node/v1beta1/query").StatusRequest): Promise<import("./base/node/v1beta1/query").StatusResponse>;
                };
            };
            tendermint: {
                v1beta1: {
                    getNodeInfo(request?: import("./base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("./base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                    getSyncing(request?: import("./base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("./base/tendermint/v1beta1/query").GetSyncingResponse>;
                    getLatestBlock(request?: import("./base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("./base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                    getBlockByHeight(request: import("./base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("./base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: import("./base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("./base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: import("./base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("./base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: import("./base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("./base/tendermint/v1beta1/query").ABCIQueryResponse>;
                };
            };
        };
        circuit: {
            v1: {
                account(request: import("./circuit/v1/query").QueryAccountRequest): Promise<import("./circuit/v1/query").AccountResponse>;
                accounts(request?: import("./circuit/v1/query").QueryAccountsRequest): Promise<import("./circuit/v1/query").AccountsResponse>;
                disabledList(request?: import("./circuit/v1/query").QueryDisabledListRequest): Promise<import("./circuit/v1/query").DisabledListResponse>;
            };
        };
        consensus: {
            v1: {
                params(request?: import("./consensus/v1/query").QueryParamsRequest): Promise<import("./consensus/v1/query").QueryParamsResponse>;
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("./distribution/v1beta1/query").QueryParamsRequest): Promise<import("./distribution/v1beta1/query").QueryParamsResponse>;
                validatorDistributionInfo(request: import("./distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("./distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: import("./distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("./distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: import("./distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("./distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                validatorSlashes(request: import("./distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("./distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                delegationRewards(request: import("./distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("./distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: import("./distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("./distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: import("./distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("./distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: import("./distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("./distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: import("./distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("./distribution/v1beta1/query").QueryCommunityPoolResponse>;
            };
        };
        evidence: {
            v1beta1: {
                evidence(request: import("./evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("./evidence/v1beta1/query").QueryEvidenceResponse>;
                allEvidence(request?: import("./evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("./evidence/v1beta1/query").QueryAllEvidenceResponse>;
            };
        };
        feegrant: {
            v1beta1: {
                allowance(request: import("./feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("./feegrant/v1beta1/query").QueryAllowanceResponse>;
                allowances(request: import("./feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("./feegrant/v1beta1/query").QueryAllowancesResponse>;
                allowancesByGranter(request: import("./feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("./feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
            };
        };
        gov: {
            v1: {
                constitution(request?: import("./gov/v1/query").QueryConstitutionRequest): Promise<import("./gov/v1/query").QueryConstitutionResponse>;
                proposal(request: import("./gov/v1/query").QueryProposalRequest): Promise<import("./gov/v1/query").QueryProposalResponse>;
                proposals(request: import("./gov/v1/query").QueryProposalsRequest): Promise<import("./gov/v1/query").QueryProposalsResponse>;
                vote(request: import("./gov/v1/query").QueryVoteRequest): Promise<import("./gov/v1/query").QueryVoteResponse>;
                votes(request: import("./gov/v1/query").QueryVotesRequest): Promise<import("./gov/v1/query").QueryVotesResponse>;
                params(request: import("./gov/v1/query").QueryParamsRequest): Promise<import("./gov/v1/query").QueryParamsResponse>;
                deposit(request: import("./gov/v1/query").QueryDepositRequest): Promise<import("./gov/v1/query").QueryDepositResponse>;
                deposits(request: import("./gov/v1/query").QueryDepositsRequest): Promise<import("./gov/v1/query").QueryDepositsResponse>;
                tallyResult(request: import("./gov/v1/query").QueryTallyResultRequest): Promise<import("./gov/v1/query").QueryTallyResultResponse>;
            };
            v1beta1: {
                proposal(request: import("./gov/v1beta1/query").QueryProposalRequest): Promise<import("./gov/v1beta1/query").QueryProposalResponse>;
                proposals(request: import("./gov/v1beta1/query").QueryProposalsRequest): Promise<import("./gov/v1beta1/query").QueryProposalsResponse>;
                vote(request: import("./gov/v1beta1/query").QueryVoteRequest): Promise<import("./gov/v1beta1/query").QueryVoteResponse>;
                votes(request: import("./gov/v1beta1/query").QueryVotesRequest): Promise<import("./gov/v1beta1/query").QueryVotesResponse>;
                params(request: import("./gov/v1beta1/query").QueryParamsRequest): Promise<import("./gov/v1beta1/query").QueryParamsResponse>;
                deposit(request: import("./gov/v1beta1/query").QueryDepositRequest): Promise<import("./gov/v1beta1/query").QueryDepositResponse>;
                deposits(request: import("./gov/v1beta1/query").QueryDepositsRequest): Promise<import("./gov/v1beta1/query").QueryDepositsResponse>;
                tallyResult(request: import("./gov/v1beta1/query").QueryTallyResultRequest): Promise<import("./gov/v1beta1/query").QueryTallyResultResponse>;
            };
        };
        group: {
            v1: {
                groupInfo(request: import("./group/v1/query").QueryGroupInfoRequest): Promise<import("./group/v1/query").QueryGroupInfoResponse>;
                groupPolicyInfo(request: import("./group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("./group/v1/query").QueryGroupPolicyInfoResponse>;
                groupMembers(request: import("./group/v1/query").QueryGroupMembersRequest): Promise<import("./group/v1/query").QueryGroupMembersResponse>;
                groupsByAdmin(request: import("./group/v1/query").QueryGroupsByAdminRequest): Promise<import("./group/v1/query").QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: import("./group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("./group/v1/query").QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: import("./group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("./group/v1/query").QueryGroupPoliciesByAdminResponse>;
                proposal(request: import("./group/v1/query").QueryProposalRequest): Promise<import("./group/v1/query").QueryProposalResponse>;
                proposalsByGroupPolicy(request: import("./group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("./group/v1/query").QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: import("./group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("./group/v1/query").QueryVoteByProposalVoterResponse>;
                votesByProposal(request: import("./group/v1/query").QueryVotesByProposalRequest): Promise<import("./group/v1/query").QueryVotesByProposalResponse>;
                votesByVoter(request: import("./group/v1/query").QueryVotesByVoterRequest): Promise<import("./group/v1/query").QueryVotesByVoterResponse>;
                groupsByMember(request: import("./group/v1/query").QueryGroupsByMemberRequest): Promise<import("./group/v1/query").QueryGroupsByMemberResponse>;
                tallyResult(request: import("./group/v1/query").QueryTallyResultRequest): Promise<import("./group/v1/query").QueryTallyResultResponse>;
                groups(request?: import("./group/v1/query").QueryGroupsRequest): Promise<import("./group/v1/query").QueryGroupsResponse>;
            };
        };
        mint: {
            v1beta1: {
                params(request?: import("./mint/v1beta1/query").QueryParamsRequest): Promise<import("./mint/v1beta1/query").QueryParamsResponse>;
                inflation(request?: import("./mint/v1beta1/query").QueryInflationRequest): Promise<import("./mint/v1beta1/query").QueryInflationResponse>;
                annualProvisions(request?: import("./mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("./mint/v1beta1/query").QueryAnnualProvisionsResponse>;
            };
        };
        nft: {
            v1beta1: {
                balance(request: import("./nft/v1beta1/query").QueryBalanceRequest): Promise<import("./nft/v1beta1/query").QueryBalanceResponse>;
                owner(request: import("./nft/v1beta1/query").QueryOwnerRequest): Promise<import("./nft/v1beta1/query").QueryOwnerResponse>;
                supply(request: import("./nft/v1beta1/query").QuerySupplyRequest): Promise<import("./nft/v1beta1/query").QuerySupplyResponse>;
                nFTs(request: import("./nft/v1beta1/query").QueryNFTsRequest): Promise<import("./nft/v1beta1/query").QueryNFTsResponse>;
                nFT(request: import("./nft/v1beta1/query").QueryNFTRequest): Promise<import("./nft/v1beta1/query").QueryNFTResponse>;
                class(request: import("./nft/v1beta1/query").QueryClassRequest): Promise<import("./nft/v1beta1/query").QueryClassResponse>;
                classes(request?: import("./nft/v1beta1/query").QueryClassesRequest): Promise<import("./nft/v1beta1/query").QueryClassesResponse>;
            };
        };
        orm: {
            query: {
                v1alpha1: {
                    get(request: import("./orm/query/v1alpha1/query").GetRequest): Promise<import("./orm/query/v1alpha1/query").GetResponse>;
                    list(request: import("./orm/query/v1alpha1/query").ListRequest): Promise<import("./orm/query/v1alpha1/query").ListResponse>;
                };
            };
        };
        params: {
            v1beta1: {
                params(request: import("./params/v1beta1/query").QueryParamsRequest): Promise<import("./params/v1beta1/query").QueryParamsResponse>;
                subspaces(request?: import("./params/v1beta1/query").QuerySubspacesRequest): Promise<import("./params/v1beta1/query").QuerySubspacesResponse>;
            };
        };
        slashing: {
            v1beta1: {
                params(request?: import("./slashing/v1beta1/query").QueryParamsRequest): Promise<import("./slashing/v1beta1/query").QueryParamsResponse>;
                signingInfo(request: import("./slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("./slashing/v1beta1/query").QuerySigningInfoResponse>;
                signingInfos(request?: import("./slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("./slashing/v1beta1/query").QuerySigningInfosResponse>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("./staking/v1beta1/query").QueryValidatorsRequest): Promise<import("./staking/v1beta1/query").QueryValidatorsResponse>;
                validator(request: import("./staking/v1beta1/query").QueryValidatorRequest): Promise<import("./staking/v1beta1/query").QueryValidatorResponse>;
                validatorDelegations(request: import("./staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("./staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: import("./staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("./staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: import("./staking/v1beta1/query").QueryDelegationRequest): Promise<import("./staking/v1beta1/query").QueryDelegationResponse>;
                unbondingDelegation(request: import("./staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("./staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: import("./staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("./staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: import("./staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("./staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: import("./staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("./staking/v1beta1/query").QueryRedelegationsResponse>;
                delegatorValidators(request: import("./staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("./staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: import("./staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("./staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                historicalInfo(request: import("./staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("./staking/v1beta1/query").QueryHistoricalInfoResponse>;
                pool(request?: import("./staking/v1beta1/query").QueryPoolRequest): Promise<import("./staking/v1beta1/query").QueryPoolResponse>;
                params(request?: import("./staking/v1beta1/query").QueryParamsRequest): Promise<import("./staking/v1beta1/query").QueryParamsResponse>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("./tx/v1beta1/service").SimulateRequest): Promise<import("./tx/v1beta1/service").SimulateResponse>;
                getTx(request: import("./tx/v1beta1/service").GetTxRequest): Promise<import("./tx/v1beta1/service").GetTxResponse>;
                broadcastTx(request: import("./tx/v1beta1/service").BroadcastTxRequest): Promise<import("./tx/v1beta1/service").BroadcastTxResponse>;
                getTxsEvent(request: import("./tx/v1beta1/service").GetTxsEventRequest): Promise<import("./tx/v1beta1/service").GetTxsEventResponse>;
                getBlockWithTxs(request: import("./tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("./tx/v1beta1/service").GetBlockWithTxsResponse>;
                txDecode(request: import("./tx/v1beta1/service").TxDecodeRequest): Promise<import("./tx/v1beta1/service").TxDecodeResponse>;
                txEncode(request: import("./tx/v1beta1/service").TxEncodeRequest): Promise<import("./tx/v1beta1/service").TxEncodeResponse>;
                txEncodeAmino(request: import("./tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("./tx/v1beta1/service").TxEncodeAminoResponse>;
                txDecodeAmino(request: import("./tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("./tx/v1beta1/service").TxDecodeAminoResponse>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("./upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("./upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                appliedPlan(request: import("./upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("./upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                upgradedConsensusState(request: import("./upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("./upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: import("./upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("./upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                authority(request?: import("./upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("./upgrade/v1beta1/query").QueryAuthorityResponse>;
            };
        };
    };
}>;
