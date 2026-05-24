import { AlgorithmFunction } from './algorithm-function';

export const minCount: AlgorithmFunction = (
  data: number[][],
): Promise<number[]> => {
  if (data.length === 0) return Promise.resolve([]);

  const NUMBER_OF_POSITIONS = 7;
  const MAX_LOTTO_NUMBER = 45;

  const hitCounts: number[][] = Array.from(
    { length: NUMBER_OF_POSITIONS },
    () => new Array(MAX_LOTTO_NUMBER + 1).fill(0),
  );

  const lastHitEpisode: number[][] = Array.from(
    { length: NUMBER_OF_POSITIONS },
    () => new Array(MAX_LOTTO_NUMBER + 1).fill(-1),
  );

  for (let i = 0; i < data.length; i++) {
    const winningNumbers = data[i];
    for (let j = 0; j < NUMBER_OF_POSITIONS; j++) {
      const num = winningNumbers[j];
      if (num >= 1 && num <= MAX_LOTTO_NUMBER) {
        hitCounts[j][num]++;
        lastHitEpisode[j][num] = i;
      }
    }
  }

  const result: number[] = [];

  for (let i = 0; i < NUMBER_OF_POSITIONS; i++) {
    let minCount = Infinity;
    let oldestEpisode = Infinity;
    let minNum = -1;

    const startNum = i === 0 || i === 6 ? 1 : result[i - 1] + 1;

    for (let num = startNum; num <= MAX_LOTTO_NUMBER; num++) {
      if (i === 6 && result.slice(0, 6).includes(num)) continue;

      const currentHitCount = hitCounts[i][num];
      const currentLatHitEpisode = lastHitEpisode[i][num];

      if (currentHitCount < minCount) {
        minCount = currentHitCount;
        oldestEpisode = currentLatHitEpisode;
        minNum = num;
      } else if (currentHitCount === minCount) {
        if (currentLatHitEpisode < oldestEpisode) {
          oldestEpisode = currentLatHitEpisode;
          minNum = num;
        }
      }
    }

    if (minNum === -1 || minNum > MAX_LOTTO_NUMBER)
      return Promise.resolve([0, 0, 0, 0, 0, 0, 0]);

    result.push(minNum);
  }

  return Promise.resolve(result);
};
