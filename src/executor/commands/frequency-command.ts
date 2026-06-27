import { ExecutableCommand } from './executable-command';
import { FrequencyType } from '../../enums/frequency-type';
import { pairFrequency } from '../../algorithms/frequency/pair-frequency';
import { tripletFrequency } from '../../algorithms/frequency/triplet-frequency';
import { recentTripletFrequency } from '../../algorithms/frequency/recent-triplet-frequency';
import { recentPairFrequency } from '../../algorithms/frequency/recent-pair-frequency';

export class FrequencyCommand implements ExecutableCommand {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  private static registry: Record<FrequencyType, Function> = {
    [FrequencyType.PAIR_FREQUENCY]: pairFrequency,
    [FrequencyType.RECENT_PAIR_FREQUENCY]: recentPairFrequency,
    [FrequencyType.TRIPLET_FREQUENCY]: tripletFrequency,
    [FrequencyType.RECENT_TRIPLET_FREQUENCY]: recentTripletFrequency,
  };

  constructor(
    private type: `${FrequencyType}`,
    private data: number[][],
  ) {}

  async execute(): Promise<number[]> {
    const algorithm = FrequencyCommand.registry[this.type as FrequencyType];
    if (!algorithm) throw new Error(`Unsupported algorithm: ${this.type}`);
    return await algorithm(this.data);
  }
}
