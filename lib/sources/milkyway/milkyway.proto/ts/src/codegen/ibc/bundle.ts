import * as _140 from "./applications/fee/v1/ack";
import * as _141 from "./applications/fee/v1/fee";
import * as _142 from "./applications/fee/v1/genesis";
import * as _143 from "./applications/fee/v1/metadata";
import * as _144 from "./applications/fee/v1/query";
import * as _145 from "./applications/fee/v1/tx";
import * as _146 from "./applications/interchain_accounts/controller/v1/controller";
import * as _147 from "./applications/interchain_accounts/controller/v1/query";
import * as _148 from "./applications/interchain_accounts/controller/v1/tx";
import * as _149 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _150 from "./applications/interchain_accounts/host/v1/host";
import * as _151 from "./applications/interchain_accounts/host/v1/query";
import * as _152 from "./applications/interchain_accounts/host/v1/tx";
import * as _153 from "./applications/interchain_accounts/v1/account";
import * as _154 from "./applications/interchain_accounts/v1/metadata";
import * as _155 from "./applications/interchain_accounts/v1/packet";
import * as _156 from "./applications/transfer/v1/authz";
import * as _157 from "./applications/transfer/v1/genesis";
import * as _158 from "./applications/transfer/v1/query";
import * as _159 from "./applications/transfer/v1/transfer";
import * as _160 from "./applications/transfer/v1/tx";
import * as _161 from "./applications/transfer/v2/packet";
import * as _162 from "./core/channel/v1/channel";
import * as _163 from "./core/channel/v1/genesis";
import * as _164 from "./core/channel/v1/query";
import * as _165 from "./core/channel/v1/tx";
import * as _166 from "./core/channel/v1/upgrade";
import * as _167 from "./core/client/v1/client";
import * as _168 from "./core/client/v1/genesis";
import * as _169 from "./core/client/v1/query";
import * as _170 from "./core/client/v1/tx";
import * as _171 from "./core/commitment/v1/commitment";
import * as _172 from "./core/connection/v1/connection";
import * as _173 from "./core/connection/v1/genesis";
import * as _174 from "./core/connection/v1/query";
import * as _175 from "./core/connection/v1/tx";
import * as _176 from "./core/types/v1/genesis";
import * as _177 from "./lightclients/localhost/v2/localhost";
import * as _178 from "./lightclients/solomachine/v2/solomachine";
import * as _179 from "./lightclients/solomachine/v3/solomachine";
import * as _180 from "./lightclients/tendermint/v1/tendermint";
import * as _181 from "./lightclients/wasm/v1/genesis";
import * as _182 from "./lightclients/wasm/v1/query";
import * as _183 from "./lightclients/wasm/v1/tx";
import * as _184 from "./lightclients/wasm/v1/wasm";
import * as _305 from "./applications/fee/v1/tx.amino";
import * as _306 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _307 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _308 from "./applications/transfer/v1/tx.amino";
import * as _309 from "./core/channel/v1/tx.amino";
import * as _310 from "./core/client/v1/tx.amino";
import * as _311 from "./core/connection/v1/tx.amino";
import * as _312 from "./lightclients/wasm/v1/tx.amino";
import * as _313 from "./applications/fee/v1/tx.registry";
import * as _314 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _315 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _316 from "./applications/transfer/v1/tx.registry";
import * as _317 from "./core/channel/v1/tx.registry";
import * as _318 from "./core/client/v1/tx.registry";
import * as _319 from "./core/connection/v1/tx.registry";
import * as _320 from "./lightclients/wasm/v1/tx.registry";
import * as _321 from "./applications/fee/v1/query.rpc.Query";
import * as _322 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _323 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _324 from "./applications/transfer/v1/query.rpc.Query";
import * as _325 from "./core/channel/v1/query.rpc.Query";
import * as _326 from "./core/client/v1/query.rpc.Query";
import * as _327 from "./core/connection/v1/query.rpc.Query";
import * as _328 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _329 from "./applications/fee/v1/tx.rpc.msg";
import * as _330 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _331 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _332 from "./applications/transfer/v1/tx.rpc.msg";
import * as _333 from "./core/channel/v1/tx.rpc.msg";
import * as _334 from "./core/client/v1/tx.rpc.msg";
import * as _335 from "./core/connection/v1/tx.rpc.msg";
import * as _336 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _364 from "./rpc.query";
import * as _365 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._140,
        ..._141,
        ..._142,
        ..._143,
        ..._144,
        ..._145,
        ..._305,
        ..._313,
        ..._321,
        ..._329
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._146,
          ..._147,
          ..._148,
          ..._306,
          ..._314,
          ..._322,
          ..._330
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._149
        };
      }
      export namespace host {
        export const v1 = {
          ..._150,
          ..._151,
          ..._152,
          ..._307,
          ..._315,
          ..._323,
          ..._331
        };
      }
      export const v1 = {
        ..._153,
        ..._154,
        ..._155
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._156,
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._308,
        ..._316,
        ..._324,
        ..._332
      };
      export const v2 = {
        ..._161
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._162,
        ..._163,
        ..._164,
        ..._165,
        ..._166,
        ..._309,
        ..._317,
        ..._325,
        ..._333
      };
    }
    export namespace client {
      export const v1 = {
        ..._167,
        ..._168,
        ..._169,
        ..._170,
        ..._310,
        ..._318,
        ..._326,
        ..._334
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._171
      };
    }
    export namespace connection {
      export const v1 = {
        ..._172,
        ..._173,
        ..._174,
        ..._175,
        ..._311,
        ..._319,
        ..._327,
        ..._335
      };
    }
    export namespace types {
      export const v1 = {
        ..._176
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._177
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._178
      };
      export const v3 = {
        ..._179
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._180
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._181,
        ..._182,
        ..._183,
        ..._184,
        ..._312,
        ..._320,
        ..._328,
        ..._336
      };
    }
  }
  export const ClientFactory = {
    ..._364,
    ..._365
  };
}