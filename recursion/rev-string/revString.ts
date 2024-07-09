/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {
  // base case
  if (str === "") return "";

  return revString(str.slice(1)) + str[0];
}

export { revString };