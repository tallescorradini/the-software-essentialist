export function isPalindrome(input: string) {
  if (
    input.toLowerCase().replace(/\s/g, '') ===
    input.split('').reverse().join('').toLocaleLowerCase().replace(/\s/g, '')
  )
    return true;

  return false;
}
