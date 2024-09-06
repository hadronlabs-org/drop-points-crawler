import * as _160 from "./amm/v1/event";
import * as _161 from "./amm/v1/genesis";
import * as _162 from "./amm/v1/operations";
import * as _163 from "./amm/v1/oracle_payload";
import * as _164 from "./amm/v1/oracle_price_pair";
import * as _165 from "./amm/v1/order";
import * as _166 from "./amm/v1/pair_match_proposal";
import * as _167 from "./amm/v1/params";
import * as _168 from "./amm/v1/pending_token_introduction";
import * as _169 from "./amm/v1/pool_token";
import * as _170 from "./amm/v1/pool";
import * as _171 from "./amm/v1/query";
import * as _172 from "./amm/v1/route_step";
import * as _173 from "./amm/v1/schedule_order_count";
import * as _174 from "./amm/v1/schedule_order";
import * as _175 from "./amm/v1/token_circuit_breaker_settings";
import * as _176 from "./amm/v1/token_weight";
import * as _177 from "./amm/v1/tx";
import * as _178 from "./amm/v1/virtual_balance_pool_token";
import * as _179 from "./amm/v1/weight_update_timing";
import * as _180 from "./amm/v1/weighted_token";
import * as _181 from "./amm/v1/whitelisted_route";
import * as _182 from "./amm/v1/yamm_configuration";
import * as _183 from "./amm/v2/pair_match_proposal";
import * as _184 from "./amm/v2/tx";
import * as _185 from "./assets/v1/event";
import * as _186 from "./assets/v1/genesis";
import * as _187 from "./assets/v1/maturity_level";
import * as _188 from "./assets/v1/oracle_payload";
import * as _189 from "./assets/v1/params";
import * as _190 from "./assets/v1/query";
import * as _191 from "./assets/v1/refractable_asset";
import * as _192 from "./assets/v1/tx";
import * as _193 from "./icstaking/v1/event";
import * as _194 from "./icstaking/v1/genesis";
import * as _195 from "./icstaking/v1/host_chain";
import * as _196 from "./icstaking/v1/loopback";
import * as _197 from "./icstaking/v1/lsm";
import * as _198 from "./icstaking/v1/multisig";
import * as _199 from "./icstaking/v1/oracle_payload";
import * as _200 from "./icstaking/v1/params";
import * as _201 from "./icstaking/v1/query";
import * as _202 from "./icstaking/v1/reply";
import * as _203 from "./icstaking/v1/sweep";
import * as _204 from "./icstaking/v1/tx";
import * as _205 from "./icstaking/v1/undelegation";
import * as _206 from "./incentives/v1/bond";
import * as _207 from "./incentives/v1/event";
import * as _208 from "./incentives/v1/genesis";
import * as _209 from "./incentives/v1/params";
import * as _210 from "./incentives/v1/pool";
import * as _211 from "./incentives/v1/query";
import * as _212 from "./incentives/v1/tx";
import * as _213 from "./incentives/v1/unbonding";
import * as _214 from "./mint/v1/event";
import * as _215 from "./mint/v1/genesis";
import * as _216 from "./mint/v1/minter";
import * as _217 from "./mint/v1/params";
import * as _218 from "./mint/v1/query";
import * as _219 from "./mint/v1/tx";
import * as _220 from "./pgov/v1/event";
import * as _221 from "./pgov/v1/genesis";
import * as _222 from "./pgov/v1/params";
import * as _223 from "./pgov/v1/proposal";
import * as _224 from "./pgov/v1/query";
import * as _225 from "./pgov/v1/reply";
import * as _226 from "./pgov/v1/staked_p_asset";
import * as _227 from "./pgov/v1/tx";
import * as _228 from "./pgov/v1/vote";
import * as _229 from "./refractor/v1/asset_state";
import * as _230 from "./refractor/v1/event";
import * as _231 from "./refractor/v1/genesis";
import * as _232 from "./refractor/v1/query";
import * as _233 from "./refractor/v1/tx";
import * as _234 from "./treasury/v1/action";
import * as _235 from "./treasury/v1/event";
import * as _236 from "./treasury/v1/flow_trade";
import * as _237 from "./treasury/v1/genesis";
import * as _238 from "./treasury/v1/params";
import * as _239 from "./treasury/v1/query";
import * as _240 from "./treasury/v1/tx";
import * as _241 from "./ystaking/v1/asset_pool_state";
import * as _242 from "./ystaking/v1/event";
import * as _243 from "./ystaking/v1/genesis";
import * as _244 from "./ystaking/v1/query";
import * as _245 from "./ystaking/v1/tx";
import * as _246 from "./ystaking/v1/user_stake_state";
import * as _382 from "./amm/v1/tx.amino";
import * as _383 from "./amm/v2/tx.amino";
import * as _384 from "./assets/v1/tx.amino";
import * as _385 from "./icstaking/v1/tx.amino";
import * as _386 from "./incentives/v1/tx.amino";
import * as _387 from "./mint/v1/tx.amino";
import * as _388 from "./pgov/v1/tx.amino";
import * as _389 from "./refractor/v1/tx.amino";
import * as _390 from "./treasury/v1/tx.amino";
import * as _391 from "./ystaking/v1/tx.amino";
import * as _392 from "./amm/v1/tx.registry";
import * as _393 from "./amm/v2/tx.registry";
import * as _394 from "./assets/v1/tx.registry";
import * as _395 from "./icstaking/v1/tx.registry";
import * as _396 from "./incentives/v1/tx.registry";
import * as _397 from "./mint/v1/tx.registry";
import * as _398 from "./pgov/v1/tx.registry";
import * as _399 from "./refractor/v1/tx.registry";
import * as _400 from "./treasury/v1/tx.registry";
import * as _401 from "./ystaking/v1/tx.registry";
import * as _402 from "./amm/v1/query.lcd";
import * as _403 from "./assets/v1/query.lcd";
import * as _404 from "./icstaking/v1/query.lcd";
import * as _405 from "./incentives/v1/query.lcd";
import * as _406 from "./mint/v1/query.lcd";
import * as _407 from "./pgov/v1/query.lcd";
import * as _408 from "./refractor/v1/query.lcd";
import * as _409 from "./treasury/v1/query.lcd";
import * as _410 from "./ystaking/v1/query.lcd";
import * as _411 from "./amm/v1/query.rpc.Query";
import * as _412 from "./assets/v1/query.rpc.Query";
import * as _413 from "./icstaking/v1/query.rpc.Query";
import * as _414 from "./incentives/v1/query.rpc.Query";
import * as _415 from "./mint/v1/query.rpc.Query";
import * as _416 from "./pgov/v1/query.rpc.Query";
import * as _417 from "./refractor/v1/query.rpc.Query";
import * as _418 from "./treasury/v1/query.rpc.Query";
import * as _419 from "./ystaking/v1/query.rpc.Query";
import * as _420 from "./amm/v1/tx.rpc.msg";
import * as _421 from "./amm/v2/tx.rpc.msg";
import * as _422 from "./assets/v1/tx.rpc.msg";
import * as _423 from "./icstaking/v1/tx.rpc.msg";
import * as _424 from "./incentives/v1/tx.rpc.msg";
import * as _425 from "./mint/v1/tx.rpc.msg";
import * as _426 from "./pgov/v1/tx.rpc.msg";
import * as _427 from "./refractor/v1/tx.rpc.msg";
import * as _428 from "./treasury/v1/tx.rpc.msg";
import * as _429 from "./ystaking/v1/tx.rpc.msg";
export namespace pryzm {
  export namespace amm {
    export const v1 = {
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._382,
      ..._392,
      ..._402,
      ..._411,
      ..._420
    };
    export const v2 = {
      ..._183,
      ..._184,
      ..._383,
      ..._393,
      ..._421
    };
  }
  export namespace assets {
    export const v1 = {
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._384,
      ..._394,
      ..._403,
      ..._412,
      ..._422
    };
  }
  export namespace icstaking {
    export const v1 = {
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._385,
      ..._395,
      ..._404,
      ..._413,
      ..._423
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._386,
      ..._396,
      ..._405,
      ..._414,
      ..._424
    };
  }
  export namespace mint {
    export const v1 = {
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._387,
      ..._397,
      ..._406,
      ..._415,
      ..._425
    };
  }
  export namespace pgov {
    export const v1 = {
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._388,
      ..._398,
      ..._407,
      ..._416,
      ..._426
    };
  }
  export namespace refractor {
    export const v1 = {
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._233,
      ..._389,
      ..._399,
      ..._408,
      ..._417,
      ..._427
    };
  }
  export namespace treasury {
    export const v1 = {
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._390,
      ..._400,
      ..._409,
      ..._418,
      ..._428
    };
  }
  export namespace ystaking {
    export const v1 = {
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._391,
      ..._401,
      ..._410,
      ..._419,
      ..._429
    };
  }
}