// eslint-disable-next-line require-await
export const getAssetPrice = async (asset: string): Promise<number> =>
  Promise.resolve(asset === 'dATOM' ? 10 : 7);
