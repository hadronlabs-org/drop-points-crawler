import { bcs, RESTClient } from '@initia/initia.js';

async function main() {
  const rest = new RESTClient(
    'https://rest-echelon-testnet-1.anvil.asia-southeast.initia.xyz:443',
    {
      chainId: 'echelon-testnet-1',
      gasPrices: '0.15uinit',
      gasAdjustment: '2.0',
    },
  );
  const res = await rest.move.viewFunction(
    '0x6c7a7e7461d3971e77071c66d1cef02c8f089a2cadf41710350c6e59a9d51469',
    'lending',
    'account_coins',
    [],
    [
      bcs
        .address()
        .serialize('init1zhts8kw85mdltjl4570np79f4ajnqxsjjmyjah')
        .toBase64(),
      bcs
        .object()
        .serialize(
          '0xfd27433c0146752c2e79d8dda09c378b3c97dcdc258b62829b198c57fe11a46',
        )
        .toBase64(),
    ],
  );
  console.log(res);
}

main();
