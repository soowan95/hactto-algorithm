import { ExecutableCommand } from './executable-command';
import { FrequencyType } from '../../enums/frequency-type';
import { pairFrequency } from '../../algorithms/frequency/pair-frequency';

export class FrequencyCommand implements ExecutableCommand {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  private static registry: Record<FrequencyType, Function> = {
    [FrequencyType.PAIR_FREQUENCY]: pairFrequency,
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
