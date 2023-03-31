import { StatsCalculator } from './index';

describe('stats calculator', () => {
  it('should return the minimum value in sequence of integers, such as 4 in [5, 4, 9]', () => {
    expect(StatsCalculator.process([5, 4, 9])).toStrictEqual(
      expect.objectContaining({
        minValue: 4,
      })
    );
  });

  it('should return the maximum value in a sequence of integers, such as 123 in [102, 123, 0]', () => {
    expect(StatsCalculator.process([102, 123, 1])).toStrictEqual(
      expect.objectContaining({
        maxValue: 123,
      })
    );
  });

  it('should return the number of elements in a sequence of integers, such as 6 elements in [2, 4, 21, -8, 53, 40]', () => {
    expect(StatsCalculator.process([2, 4, 21, -8, 53, 40])).toStrictEqual(
      expect.objectContaining({
        numberOfElements: 6,
      })
    );
  });
});
