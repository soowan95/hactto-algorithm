import { AlgorithmFunction } from './algorithm-function';

export const maxCount: AlgorithmFunction = (
  data: number[][],
): Promise<number[]> => {
  if (data.length === 0) return Promise.resolve([]);

  const NUMBER_OF_POSITIONS = 7;
  const MAX_LOTTO_NUMBER = 45;

  const hitCounts: number[][] = Array.from(
    { length: NUMBER_OF_POSITIONS },
    () => new Array(MAX_LOTTO_NUMBER + 1).fill(0),
  );

  const recentHitEpisode: number[][] = Array.from(
    { length: NUMBER_OF_POSITIONS },
    () => new Array(MAX_LOTTO_NUMBER + 1).fill(-1),
  );

  for (let i = 0; i < data.length; i++) {
    const winningNumbers = data[i];
    for (let j = 0; j < NUMBER_OF_POSITIONS; j++) {
      const num = winningNumbers[j];
      if (num >= 1 && num <= MAX_LOTTO_NUMBER) {
        hitCounts[j][num]++;
        recentHitEpisode[j][num] = i;
      }
    }
  }

  const result: number[] = [];

  for (let i = 0; i < NUMBER_OF_POSITIONS; i++) {
    let maxCount = 0;
    let mostRecentEpisode = 0;
    let maxNum = -1;

    for (let num = 1; num <= MAX_LOTTO_NUMBER; num++) {

      const currentHitCount = hitCounts[i][num];
      if (currentHitCount === 0) continue;
      const currentHitEpisode = recentHitEpisode[i][num];

      if (currentHitCount > maxCount) {
        maxCount = currentHitCount;
        mostRecentEpisode = currentHitEpisode;
        maxNum = num;
      } else if (currentHitCount === maxCount) {
        if (currentHitEpisode > mostRecentEpisode) {
          mostRecentEpisode = currentHitEpisode;
          maxNum = num;
        }
      }
    }

    if (maxNum === -1 || maxNum > MAX_LOTTO_NUMBER)
      return Promise.resolve([0, 0, 0, 0, 0, 0, 0]);

    result.push(maxNum);
  }

  const finalNumbers = result.slice(0, 6).sort((a, b) => a - b);
  if (result[6]) finalNumbers.push(result[6]);

  return Promise.resolve(finalNumbers);
};
