import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  it.each`
    input
    ${3}
    ${3 * 2}
    ${3 * 7}
  `(
    "should output 'Fizz' if input is $input because it is multiple of three",
    ({ input }) => {
      expect(fizzbuzz(input)).toBe('Fizz');
    }
  );

  it.each`
    input
    ${5}
    ${5 * 5}
    ${5 * 13}
  `(
    "should output 'Buzz' if input is $input because it is multiple of 5",
    ({ input }) => {
      expect(fizzbuzz(input)).toBe('Buzz');
    }
  );

  it.each`
    input
    ${3 * 5}
    ${3 * 5 * 2}
    ${3 * 5 * 5}
  `(
    "should output 'FizzBuzz' if input is $input because it is multiple of both 3 and 5",
    ({ input }) => {
      expect(fizzbuzz(input)).toBe('FizzBuzz');
    }
  );

  it('should output 4 back as string because it is not multiple of either 3 or 5', () => {
    expect(fizzbuzz(4)).toBe('4');
  });

  it('should not accept -1 because it is less than 1', () => {
    expect(() => fizzbuzz(-1)).toThrow('Input should be more than 1');
  });

  it('should not accept 102 because it is more than 100', () => {
    expect(() => fizzbuzz(102)).toThrow('Input should be less than 100');
  });
});
