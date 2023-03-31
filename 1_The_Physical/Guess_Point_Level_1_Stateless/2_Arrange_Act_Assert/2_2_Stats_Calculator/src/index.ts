export class StatsCalculator {
  static process(sequenceOfIntegers: number[]) {
    return sequenceOfIntegers.reduce(
      (
        accumulator: {
          minValue: number | undefined;
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
        };
      },
      {
        minValue: undefined,
      }
    );
  }
}
