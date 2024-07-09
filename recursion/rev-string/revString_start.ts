/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {
  //taking a bottom up approach
  //break the string apart until we reach the end
  //append the result to a new string that is the current str
  //for above, you need to make sure to add them together in the right order

  if(str === "") return "";

  return revString(str.slice(0,1)) + str
}

export { revString };