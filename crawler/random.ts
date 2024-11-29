import seedrandom from 'seedrandom';
import * as crypto from 'crypto';

const getTrueRandom = () => Math.random();

const getPseudoRandom = (batchId: number) => {
  const seed = crypto
    .createHash('sha256')
    .update(batchId.toString())
    .digest('hex');

  const rng = seedrandom(seed);
  return rng();
};

export { getTrueRandom, getPseudoRandom };
