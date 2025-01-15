import telescope from "@cosmology/telescope";
import { join } from "path";

const outPath = join(__dirname, "../src/codegen");

telescope({
  protoDirs: [join(__dirname, "proto")],
  outPath,
  options: {
    prototypes: {
      parser: {
        keepCase: false,
      },
      includePackageVar: false,
      typingsFormat: {
        useExact: false,
        timestamp: "date",
        duration: "duration",
        customTypes: {
          useCosmosSDKDec: true,
        },
        num64: "bigint", // change to "long" if getting compilationg issues (usually with react-native)
        useTelescopeGeneratedType: true,
      },
    },
    interfaces: {
      useUnionTypes: true,
    },
    aminoEncoding: {
      enabled: true,
      exceptions: {
      },
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
    },
  },
})
  .then(() => {
    console.log("✨ all done!");
  })
  .catch((e) => {
    console.error(e);
  });
