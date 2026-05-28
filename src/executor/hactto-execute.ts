import { AlgorithmType } from '../enums/algorithm-type';
import { algorithmRegistry } from '../registry/algorithm-registry';
import { AlgorithmFunction } from '../algorithms/algorithm-function';

export async function hacttoExecute(
  type: AlgorithmType,
  data: number[][],
  weights: number[],
): Promise<number[]> {
  const algorithm: AlgorithmFunction = algorithmRegistry[type];

  if (!algorithm) throw new Error(`Unsupported algorithm: ${type}`);

  return await algorithm(data, weights);
}
