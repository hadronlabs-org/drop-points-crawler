# @milkywaylabs/milkyway.proto

JavaScript/TypeScript MilkyWay Protobuf Definitions

## How to generate the definitions

In order to generate the Protobuf definitions for MilkyWay, you will need to have the following dependencies installed.
You can do that by running the following command:

```bash
yarn install
```

Then, you will have to select the version of the MilkyWay Protobuf definitions you want to generate.
You can do this by editing the `rev` field inside the [`clone_repo.ts`](scripts/clone_repos.ts) file.

Finally, once you have selected the version you want to generate, you can run the following command:

```bash
yarn run build
```

## Deploy on NPM

After generating the definitions, you may want to publish them to [NPM](https://www.npmjs.com/).
To do this, you can run:

```bash
yarn publish
```


