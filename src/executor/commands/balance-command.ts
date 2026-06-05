import { ExecutableCommand } from './executable-command';
import { BalanceType } from '../../enums/balance-type';
import { sumBalance } from '../../algorithms/balance/sum-balance';

export class BalanceCommand implements ExecutableCommand {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  private static registry: Record<BalanceType, Function> = {
    [BalanceType.SUM_BALANCE]: sumBalance,
  };

  constructor(
    private type: `${BalanceType}`,
    private data: number[][],
  ) {}

  async execute(): Promise<number[]> {
    const algorithm = BalanceCommand.registry[this.type as BalanceType];
    if (!algorithm) throw new Error(`Unsupported algorithm: ${this.type}`);
    return await algorithm(this.data);
  }
}
