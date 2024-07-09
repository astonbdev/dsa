/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  // base cases:
  if (str.length < 2) return true;  // we won!
  if (str[0] !== str[str.length - 1]) return false;  // we lost!

  // recursive case: keep checking
  return isPalindrome(str.slice(1, str.length - 1));
}

export { isPalindrome };