export function isPalindrome(input: string) {
  if (input === input.split('').reverse().join('')) return true;

  return false;
}
