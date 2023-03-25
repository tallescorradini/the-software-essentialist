export function isPalindrome(input: string) {
  if (
    removeSpacing(input.toLowerCase()) ===
    removeSpacing(input.split('').reverse().join('').toLocaleLowerCase())
  )
    return true;

  return false;
}

function removeSpacing(string: string) {
  return string.replace(/\s/g, '');
}
