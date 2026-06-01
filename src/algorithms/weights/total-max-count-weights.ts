import { WeightsFunction } from './weights-function';

export const totalMaxCountWeights: WeightsFunction = (
  data: number[][],
  weights: number[],
): Promise<number[]> => {
  if (data.length === 0) return Promise.resolve([]);

  const NUMBER_OF_POSITION = 7;
  const MAX_LOTTO_NUMBER = 45;

  const mainPlacer: { num: number; score: number }[] = [];
  const bonusPlacer: { num: number; score: number }[] = [];

  for (let i = 1; i <= MAX_LOTTO_NUMBER; i++) {
    mainPlacer.push({ num: i, score: 0 });
    bonusPlacer.push({ num: i, score: 0 });
  }

  const positionOrder = weights
    .map((weight, index) => ({ pos: index, weight }))
    .sort((a, b) => b.weight - a.weight);

  const mainNumbers: number[] = new Array(NUMBER_OF_POSITION - 1).fill(0);
  const usedNumbers = new Set<number>();
  let rankOfBonus = 0;

  for (let rank = 0; rank < positionOrder.length; rank++) {
    const i = positionOrder[rank].pos;
    if (i === 6) rankOfBonus = rank;

    for (let episode = 0; episode < data.length; episode++) {
      const num = data[episode][i];
      if (num < 1 || num > MAX_LOTTO_NUMBER) continue;

      if (i === 6) {
        bonusPlacer[num - 1].score++;
      } else {
        mainPlacer[num - 1].score += (positionOrder.length - rank) * 0.01 + 1;
      }
    }
  }

  const sortedMain = mainPlacer
    .filter((placer) => placer.score > 0)
    .sort((a, b) => b.score - a.score);

  const sortedBonus = bonusPlacer
    .filter((placer) => placer.score > 0)
    .sort((a, b) => b.score - a.score);

  let bonusNumber = 0;
  let mainIdx = 0;
  let bonusIdx = 0;

  for (let i = 0; i < NUMBER_OF_POSITION; i++) {
    if (i < rankOfBonus) {
      const choice = sortedMain[mainIdx++];
      if (choice) {
        mainNumbers[i] = choice.num;
        usedNumbers.add(choice.num);
      }
    } else if (i === rankOfBonus) {
      while (
        bonusIdx < sortedBonus.length &&
        usedNumbers.has(sortedBonus[bonusIdx].num)
      ) {
        bonusIdx++;
      }
      const choice = sortedBonus[bonusIdx] || sortedMain[mainIdx++];
      if (choice) {
        bonusNumber = choice.num;
        usedNumbers.add(choice.num);
      }
    } else {
      while (
        mainIdx < sortedMain.length &&
        usedNumbers.has(sortedMain[mainIdx].num)
      ) {
        mainIdx++;
      }
      const choice = sortedMain[mainIdx++];
      if (choice) {
        mainNumbers[i - 1] = choice.num;
        usedNumbers.add(choice.num);
      }
    }
  }

  mainNumbers.sort((a, b) => a - b);

  return Promise.resolve([...mainNumbers, bonusNumber]);
};
