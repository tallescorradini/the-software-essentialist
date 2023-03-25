import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  it("should output 'Fizz' if input is 3 because it is multiple of three", () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });
});
