import { describe, it } from 'vitest';
import { WeightsCommand } from './commands/weights-command';
import { hacttoExecute } from './hactto-execute';
import { FrequencyCommand } from './commands/frequency-command';

const data = [
  [6, 13, 18, 28, 30, 36, 9],
  [4, 11, 17, 22, 32, 41, 34],
  [16, 17, 20, 32, 33, 39, 26],
  [9, 18, 21, 27, 44, 45, 28],
  [8, 9, 19, 25, 41, 42, 33],
  [4, 6, 13, 17, 26, 28, 41],
];
const weights = [25, 20, 15, 15, 10, 10, 5];

describe('Hactto 알고리즘 실행 결과 확인', () => {
  it('==================================================', () => {});
  it('- Weights 알고리즘', () => {});
  it('==================================================', () => {});

  it('1. MIN_COUNT 결과', async () => {
    const command = new WeightsCommand('MIN_COUNT_WEIGHTS', data, weights);

    const result = await hacttoExecute(command);

    console.log('👉 [MIN_COUNT] 결과:', result);
    console.log('--------------------------------------------------');
  });

  it('2. TOTAL_MIN_COUNT 결과', async () => {
    const command = new WeightsCommand(
      'TOTAL_MIN_COUNT_WEIGHTS',
      data,
      weights,
    );

    const result = await hacttoExecute(command);

    console.log('👉 [TOTAL_MIN_COUNT] 결과:', result);
    console.log('--------------------------------------------------');
  });

  it('3. RECENT_MIN_COUNT 결과', async () => {
    const command = new WeightsCommand(
      'RECENT_MIN_COUNT_WEIGHTS',
      data,
      weights,
    );

    const result = await hacttoExecute(command);

    console.log('👉 [RECENT_MIN_COUNT] 결과:', result);
    console.log('--------------------------------------------------');
  });

  it('4. MAX_COUNT 결과', async () => {
    const command = new WeightsCommand('MAX_COUNT_WEIGHTS', data, weights);

    const result = await hacttoExecute(command);

    console.log('👉 [MAX_COUNT] 결과:', result);
    console.log('--------------------------------------------------');
  });

  it('5. TOTAL_MAX_COUNT 결과', async () => {
    const command = new WeightsCommand(
      'TOTAL_MAX_COUNT_WEIGHTS',
      data,
      weights,
    );

    const result = await hacttoExecute(command);

    console.log('👉 [TOTAL_MAX_COUNT] 결과:', result);
    console.log('--------------------------------------------------');
  });

  it('6. RECENT_MAX_COUNT 결과', async () => {
    const command = new WeightsCommand(
      'RECENT_MAX_COUNT_WEIGHTS',
      data,
      weights,
    );

    const result = await hacttoExecute(command);

    console.log('👉 [RECENT_MAX_COUNT] 결과:', result);
    console.log('--------------------------------------------------');
  });

  it('==================================================', () => {});
  it('- Frequency 알고리즘', () => {});
  it('==================================================', () => {});

  it('1. PAIR_FREQUENCY 결과', async () => {
    const command = new FrequencyCommand('PAIR_FREQUENCY', data);

    const result = await hacttoExecute(command);

    console.log('👉 [PAIR_FREQUENCY] 결과:', result);
    console.log('--------------------------------------------------');
  });
});
