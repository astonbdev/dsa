/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  //base case the string is empty, return an empty string
  //make a recursive call to is Palindrome, appending the next character to the current string
  //compare the output with the current string and return T/F

  if(str.length <= 1) return true;

  if(str[0] !== str[str.length - 1]) return false;
  
  const characters = str.split("");
  characters.pop();
  characters.shift();
  const newStr = characters.join("");
  console.log(newStr);

  return isPalindrome(newStr);
}

export { isPalindrome };