import { AlgorithmType } from '../enums/algorithm-type';
import { algorithmRegistry } from '../registry/algorithm-registry';
import { AlgorithmFunction } from '../algorithms/algorithm-function';

export function hacttoExecute(type: AlgorithmType, data: number[][]): number[] {
  const algorithm: AlgorithmFunction = algorithmRegistry[type];

  if (!algorithm) throw new Error(`Unsupported algorithm: ${type}`);

  return algorithm(data);
}
