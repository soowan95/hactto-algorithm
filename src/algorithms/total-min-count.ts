import { AlgorithmFunction } from './algorithm-function';

export const totalMinCount: AlgorithmFunction = (
  data: number[][],
): Promise<number[]> => {
  if (data.length === 0) return Promise.resolve([]);

  const MAX_LOTTO_NUMBER = 45;

  const mainHitCounts = new Array(MAX_LOTTO_NUMBER + 1).fill(0);
  const mainLastHit = new Array(MAX_LOTTO_NUMBER + 1).fill(-1);

  const bonusHitCounts = new Array(MAX_LOTTO_NUMBER + 1).fill(0);
  const bonusLastHit = new Array(MAX_LOTTO_NUMBER + 1).fill(-1);

  for (let i = 0; i < data.length; i++) {
    const winningNumbers = data[i];

    for (let j = 0; j < 6; j++) {
      const num = winningNumbers[j];
      if (num >= 1 && num <= MAX_LOTTO_NUMBER) {
        mainHitCounts[num]++;
        mainLastHit[num] = i;
      }
    }

    const bonusNum = winningNumbers[6];
    if (bonusNum >= 1 && bonusNum <= MAX_LOTTO_NUMBER) {
      bonusHitCounts[bonusNum]++;
      bonusLastHit[bonusNum] = i;
    }
  }

  const mainNumbers: number[] = [];

  for (let step = 0; step < 6; step++) {
    let minCount = Infinity;
    let oldestEpisode = Infinity;
    let minNum = -1;

    for (let num = 1; num <= MAX_LOTTO_NUMBER; num++) {
      if (mainNumbers.includes(num)) continue;

      const currentCount = mainHitCounts[num];
      const currentLastHit = mainLastHit[num];

      if (currentCount < minCount) {
        minCount = currentCount;
        oldestEpisode = currentLastHit;
        minNum = num;
      } else if (currentCount === minCount) {
        if (currentLastHit < oldestEpisode) {
          oldestEpisode = currentLastHit;
          minNum = num;
        }
      }
    }
    if (minNum !== -1) mainNumbers.push(minNum);
  }

  mainNumbers.sort((a, b) => a - b);

  let bonusNumber = -1;
  let minCount = Infinity;
  let oldestEpisode = Infinity;

  for (let num = 1; num <= MAX_LOTTO_NUMBER; num++) {
    const currentCount = bonusHitCounts[num];
    const currentLastHit = bonusLastHit[num];

    if (currentCount < minCount) {
      minCount = currentCount;
      oldestEpisode = currentLastHit;
      bonusNumber = num;
    } else if (currentCount === minCount) {
      if (currentLastHit < oldestEpisode) {
        oldestEpisode = currentLastHit;
        bonusNumber = num;
      }
    }
  }

  return Promise.resolve([...mainNumbers, bonusNumber]);
};
