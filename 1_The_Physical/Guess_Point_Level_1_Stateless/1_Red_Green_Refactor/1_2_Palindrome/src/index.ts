export function isPalindrome(input: string) {
  if (
    input.toLowerCase() ===
    input.split('').reverse().join('').toLocaleLowerCase()
  )
    return true;

  return false;
}
