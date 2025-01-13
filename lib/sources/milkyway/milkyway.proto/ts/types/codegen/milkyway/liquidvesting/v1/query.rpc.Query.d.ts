import { TxRpc } from "../../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryUserInsuranceFundRequest, QueryUserInsuranceFundResponse, QueryUserInsuranceFundsRequest, QueryUserInsuranceFundsResponse, QueryUserRestakableAssetsRequest, QueryUserRestakableAssetsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * UserInsuranceFund defines a gRPC query method that returns the user's
     * insurance fund balance given their address.
     */
    userInsuranceFund(request: QueryUserInsuranceFundRequest): Promise<QueryUserInsuranceFundResponse>;
    /**
     * UserInsuranceFunds defines a gRPC query method that returns all user's
     * insurance fund balance.
     */
    userInsuranceFunds(request?: QueryUserInsuranceFundsRequest): Promise<QueryUserInsuranceFundsResponse>;
    /**
     * UserRestakableAssets defines a gRPC query method that returns
     * the amount of assets that can be restaked from the one minted by this
     * module.
     */
    userRestakableAssets(request: QueryUserRestakableAssetsRequest): Promise<QueryUserRestakableAssetsResponse>;
    /**
     * InsuranceFund defines a gRPC query method that returns the amount of tokens
     * that are in the insurance fund.
     */
    insuranceFund(request?: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse>;
    /**
     * Params defines a gRPC query method that returns the parameters of the
     * module.
     */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    userInsuranceFund(request: QueryUserInsuranceFundRequest): Promise<QueryUserInsuranceFundResponse>;
    userInsuranceFunds(request?: QueryUserInsuranceFundsRequest): Promise<QueryUserInsuranceFundsResponse>;
    userRestakableAssets(request: QueryUserRestakableAssetsRequest): Promise<QueryUserRestakableAssetsResponse>;
    insuranceFund(request?: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    userInsuranceFund(request: QueryUserInsuranceFundRequest): Promise<QueryUserInsuranceFundResponse>;
    userInsuranceFunds(request?: QueryUserInsuranceFundsRequest): Promise<QueryUserInsuranceFundsResponse>;
    userRestakableAssets(request: QueryUserRestakableAssetsRequest): Promise<QueryUserRestakableAssetsResponse>;
    insuranceFund(request?: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
