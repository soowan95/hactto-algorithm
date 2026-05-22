import { AlgorithmType } from '../enums/algorithm-type';

export function getAlgorithm(): AlgorithmType[] {
  return Object.values(AlgorithmType);
}
