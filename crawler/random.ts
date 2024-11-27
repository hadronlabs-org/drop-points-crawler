import seedrandom from 'seedrandom';
import * as os from 'os';
import * as crypto from 'crypto';

const getTrueRandom = () => Math.random();

const getPseudoRandom = (batchId: number) => {
  const hostname = os.hostname();
  const seed = crypto
    .createHash('sha256')
    .update(`${hostname}_${batchId}`)
    .digest('hex');

  const rng = seedrandom(seed);
  return rng();
};

export { getTrueRandom, getPseudoRandom };
