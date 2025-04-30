import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { PageRequest } from 'cosmjs-types/cosmos/base/query/v1beta1/pagination';
import {
  QueryAccountsRequest,
  QueryAccountsResponse,
} from 'cosmjs-types/cosmos/auth/v1beta1/query';

const client = await Tendermint34Client.connect(
  'https://initia-rpc.polkachu.com/',
);
const status = await client.status();
const height = status.syncInfo.latestBlockHeight;
console.log(height);
const path = '/cosmos.auth.v1beta1.Query/Accounts';
const request = {
  pagination: PageRequest.fromPartial({
    limit: BigInt(1000),
    offset: BigInt(5000),
    // countTotal: true,
  }),
};
const data = QueryAccountsRequest.encode(request).finish();
const response = await client.abciQuery({ path, data, height });
const accounts = QueryAccountsResponse.decode(response.value);
console.log(Object.keys(accounts));
// console.log(accounts);
console.log(accounts.accounts.length);
console.log(accounts.pagination);
