import { AlgorithmType } from '../enums/algorithm-type';
import { AlgorithmFunction } from '../algorithms/algorithm-function';
import { minCount } from '../algorithms/serial/min-count';

export const algorithmRegistry: Record<AlgorithmType, AlgorithmFunction> = {
  [AlgorithmType.MIN_COUNT]: minCount,
};
