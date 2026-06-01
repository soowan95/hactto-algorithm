import { WeightsType } from '../enums/weights-type';
import { WeightsComplexityMap } from '../metadata/weights-complexity-map';
import { FrequencyType } from '../enums/frequency-type';
import { FrequencyComplexityMap } from '../metadata/frequency-complexity-map';

export function getAlgorithm(): { type: string; complexity: number }[] {
  const weightsTypes: WeightsType[] = Object.values(WeightsType);
  const weightsTypesData = weightsTypes.map((type) => ({
    type,
    complexity: WeightsComplexityMap[type].complexity,
  }));
  const frequencyTypes: FrequencyType[] = Object.values(FrequencyType);
  const frequencyTypesData = frequencyTypes.map((type) => ({
    type,
    complexity: FrequencyComplexityMap[type].complexity,
  }));
  return [...weightsTypesData, ...frequencyTypesData];
}
