import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    alliance: {
      alliance: new (await import("../alliance/alliance/query.lcd")).LCDQueryClient({
        requestClient
      })
    },
    cosmos: {
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      base: {
        node: {
          v1beta1: new (await import("../cosmos/base/node/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      consensus: {
        v1: new (await import("../cosmos/consensus/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    ibc: {
      applications: {
        interchain_accounts: {
          controller: {
            v1: new (await import("../ibc/applications/interchain_accounts/controller/v1/query.lcd")).LCDQueryClient({
              requestClient
            })
          },
          host: {
            v1: new (await import("../ibc/applications/interchain_accounts/host/v1/query.lcd")).LCDQueryClient({
              requestClient
            })
          }
        },
        transfer: {
          v1: new (await import("../ibc/applications/transfer/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      core: {
        channel: {
          v1: new (await import("../ibc/core/channel/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        client: {
          v1: new (await import("../ibc/core/client/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        connection: {
          v1: new (await import("../ibc/core/connection/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      }
    },
    osmosis: {
      epochs: {
        v1beta1: new (await import("../osmosis/epochs/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tokenfactory: {
        v1beta1: new (await import("../osmosis/tokenfactory/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    pryzm: {
      amm: {
        v1: new (await import("./amm/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      assets: {
        v1: new (await import("./assets/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      icstaking: {
        v1: new (await import("./icstaking/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      incentives: {
        v1: new (await import("./incentives/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1: new (await import("./mint/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      pgov: {
        v1: new (await import("./pgov/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      refractor: {
        v1: new (await import("./refractor/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      treasury: {
        v1: new (await import("./treasury/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      ystaking: {
        v1: new (await import("./ystaking/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};