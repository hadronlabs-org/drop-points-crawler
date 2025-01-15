import * as _185 from "./assets/v1/genesis";
import * as _186 from "./assets/v1/messages";
import * as _187 from "./assets/v1/models";
import * as _188 from "./assets/v1/query";
import * as _189 from "./liquidvesting/v1/genesis";
import * as _190 from "./liquidvesting/v1/messages";
import * as _191 from "./liquidvesting/v1/models";
import * as _192 from "./liquidvesting/v1/params";
import * as _193 from "./liquidvesting/v1/query";
import * as _194 from "./operators/v1/genesis";
import * as _195 from "./operators/v1/messages";
import * as _196 from "./operators/v1/models";
import * as _197 from "./operators/v1/params";
import * as _198 from "./operators/v1/query";
import * as _199 from "./pools/v1/genesis";
import * as _200 from "./pools/v1/models";
import * as _201 from "./pools/v1/query";
import * as _202 from "./restaking/v1/genesis";
import * as _203 from "./restaking/v1/messages";
import * as _204 from "./restaking/v1/models";
import * as _205 from "./restaking/v1/params";
import * as _206 from "./restaking/v1/query";
import * as _207 from "./rewards/v1/genesis";
import * as _208 from "./rewards/v1/messages";
import * as _209 from "./rewards/v1/models";
import * as _210 from "./rewards/v1/params";
import * as _211 from "./rewards/v1/query";
import * as _212 from "./services/v1/genesis";
import * as _213 from "./services/v1/messages";
import * as _214 from "./services/v1/models";
import * as _215 from "./services/v1/params";
import * as _216 from "./services/v1/query";
import * as _337 from "./assets/v1/messages.amino";
import * as _338 from "./liquidvesting/v1/messages.amino";
import * as _339 from "./operators/v1/messages.amino";
import * as _340 from "./restaking/v1/messages.amino";
import * as _341 from "./rewards/v1/messages.amino";
import * as _342 from "./services/v1/messages.amino";
import * as _343 from "./assets/v1/messages.registry";
import * as _344 from "./liquidvesting/v1/messages.registry";
import * as _345 from "./operators/v1/messages.registry";
import * as _346 from "./restaking/v1/messages.registry";
import * as _347 from "./rewards/v1/messages.registry";
import * as _348 from "./services/v1/messages.registry";
import * as _349 from "./assets/v1/query.rpc.Query";
import * as _350 from "./liquidvesting/v1/query.rpc.Query";
import * as _351 from "./operators/v1/query.rpc.Query";
import * as _352 from "./pools/v1/query.rpc.Query";
import * as _353 from "./restaking/v1/query.rpc.Query";
import * as _354 from "./rewards/v1/query.rpc.Query";
import * as _355 from "./services/v1/query.rpc.Query";
import * as _356 from "./assets/v1/messages.rpc.msg";
import * as _357 from "./liquidvesting/v1/messages.rpc.msg";
import * as _358 from "./operators/v1/messages.rpc.msg";
import * as _359 from "./restaking/v1/messages.rpc.msg";
import * as _360 from "./rewards/v1/messages.rpc.msg";
import * as _361 from "./services/v1/messages.rpc.msg";
import * as _366 from "./rpc.query";
import * as _367 from "./rpc.tx";
export namespace milkyway {
  export namespace assets {
    export const v1 = {
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._337,
      ..._343,
      ..._349,
      ..._356
    };
  }
  export namespace liquidvesting {
    export const v1 = {
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._338,
      ..._344,
      ..._350,
      ..._357
    };
  }
  export namespace operators {
    export const v1 = {
      ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._339,
      ..._345,
      ..._351,
      ..._358
    };
  }
  export namespace pools {
    export const v1 = {
      ..._199,
      ..._200,
      ..._201,
      ..._352
    };
  }
  export namespace restaking {
    export const v1 = {
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._206,
      ..._340,
      ..._346,
      ..._353,
      ..._359
    };
  }
  export namespace rewards {
    export const v1 = {
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._341,
      ..._347,
      ..._354,
      ..._360
    };
  }
  export namespace services {
    export const v1 = {
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._342,
      ..._348,
      ..._355,
      ..._361
    };
  }
  export const ClientFactory = {
    ..._366,
    ..._367
  };
}