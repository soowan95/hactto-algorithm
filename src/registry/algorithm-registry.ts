import { AlgorithmType } from '../enums/algorithm-type';
import { AlgorithmFunction } from '../algorithms/algorithm-function';
import { minCount } from '../algorithms/min-count';
import { totalMinCount } from '../algorithms/total-min-count';

export const algorithmRegistry: Record<AlgorithmType, AlgorithmFunction> = {
  [AlgorithmType.MIN_COUNT]: minCount,
  [AlgorithmType.TOTAL_MIN_COUNT]: totalMinCount,
};
