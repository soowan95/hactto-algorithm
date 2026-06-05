import { BalanceType } from '../enums/balance-type';
import { AlgorithmMetadata } from './algorithm-metadata';

export const BalanceComplexityMap: Record<BalanceType, AlgorithmMetadata> = {
  [BalanceType.SUM_BALANCE]: { complexity: 1 },
};
