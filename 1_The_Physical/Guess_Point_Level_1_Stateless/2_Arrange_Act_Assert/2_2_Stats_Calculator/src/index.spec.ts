import { StatsCalculator } from './index';

describe('stats calculator', () => {
  it('should return the minimum value in sequence of integers, such as 4 in [5, 4, 9]', () => {
    expect(StatsCalculator.process([5, 4, 9])).toStrictEqual(
      expect.objectContaining({
        minValue: 4,
      })
    );
  });
});
