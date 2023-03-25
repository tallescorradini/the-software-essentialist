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
});
