export class StatsCalculator {
  static process(sequenceOfIntegers: number[]) {
    return sequenceOfIntegers.reduce(
      (
        accumulator: {
          minValue: number | undefined;
          maxValue: number | undefined;
        },
        currentInteger
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
        };
      },
      {
        minValue: undefined,
        maxValue: undefined,
      }
    );
  }
}
