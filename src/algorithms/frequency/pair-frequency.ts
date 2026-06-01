import { FrequencyFunction } from './frequency-function';

export const pairFrequency: FrequencyFunction = (
  data: number[][],
): Promise<number[]> => {
  if (data.length === 0) return Promise.resolve([]);

  const MAX_LOTTO_NUMBER = 45;

  const ballScore: { number: number; score: number }[] = new Array(
    MAX_LOTTO_NUMBER + 1,
  ).fill({ number: 0, score: 0 });

  for (const draw of data) {
    const numbers = draw.slice(0, 6);

    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        ballScore[numbers[i]] = {
          number: numbers[i],
          score: ballScore[numbers[i]].score + 1,
        };
        ballScore[numbers[j]] = {
          number: numbers[j],
          score: ballScore[numbers[j]].score + 1,
        };
      }
    }
  }

  ballScore.sort((a, b) => b.score - a.score);

  const result = [
    ballScore[0].number,
    ballScore[1].number,
    ballScore[2].number,
    ballScore[3].number,
    ballScore[4].number,
    ballScore[5].number,
  ].sort((a, b) => a - b);

  return Promise.resolve([...result, 0]);
};
