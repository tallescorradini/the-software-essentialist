export function fizzbuzz(input: number) {
  if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';

  if (input % 3 === 0) return 'Fizz';

  if (input % 5 === 0) return 'Buzz';

  if (input < 1) throw new Error('Input should be more than 1');

  return String(input);
}
