import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

const main = async () => {
  console.log("[BUILD] esbuild starting");

  await Promise.all([
    esbuild.build({
      entryPoints: ["./src/**/*.ts"],
      bundle: false,
      platform: "node",
      minify: false,
      format: "esm",
      outdir: "dist/esm",
      plugins: [nodeExternalsPlugin()],
    }),

    esbuild.build({
      entryPoints: ["./src/**/*.ts"],
      bundle: false,
      platform: "node",
      minify: false,
      format: "cjs",
      outdir: "dist/cjs",
      plugins: [nodeExternalsPlugin()],
    }),
  ]);

  console.log("[BUILD] esbuild complete");
};

main();
