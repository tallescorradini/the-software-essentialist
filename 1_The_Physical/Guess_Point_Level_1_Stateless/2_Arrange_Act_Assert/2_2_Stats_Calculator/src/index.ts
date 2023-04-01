export class StatsCalculator {
  static process(sequenceOfIntegers: number[]) {
    const { sum, ...stats } = sequenceOfIntegers.reduce(
      (
        accumulator: {
          minValue: number | undefined;
          maxValue: number | undefined;
          numberOfElements: number | undefined;
          sum: number;
          average: number | undefined;
        },
        currentInteger,
        currentIndex
      ) => {
        return {
          minValue:
            accumulator.minValue === undefined
              ? currentInteger
              : accumulator.minValue < currentInteger
              ? accumulator.minValue
              : currentInteger,
          maxValue:
            accumulator.maxValue === undefined
              ? currentInteger
              : accumulator.maxValue > currentInteger
              ? accumulator.maxValue
              : currentInteger,
          numberOfElements: sequenceOfIntegers.length,
          sum: accumulator.sum + currentInteger,
          average: Number(
            ((accumulator.sum + currentInteger) / (currentIndex + 1)).toFixed(
              12
            )
          ),
        };
      },
      {
        minValue: undefined,
        maxValue: undefined,
        numberOfElements: undefined,
        sum: 0,
        average: undefined,
      }
    );

    return stats;
  }
}
