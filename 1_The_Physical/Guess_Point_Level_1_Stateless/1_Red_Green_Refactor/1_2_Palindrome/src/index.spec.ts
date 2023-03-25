import { isPalindrome } from './index';

describe('palindrome checker', () => {
  it("should know 'mom' is a palindrome", () => {
    expect(isPalindrome('mom')).toBe(true);
  });

  it("should know 'wow' is a palindrome", () => {
    expect(isPalindrome('wow')).toBe(true);
  });

  it("should know 'bill' is not a palindrome", () => {
    expect(isPalindrome('bill')).toBe(false);
  });

  it("should identify a palindrome regardless of casing such as 'Mom'", () => {
    expect(isPalindrome('Mom')).toBe(true);
  });
});
