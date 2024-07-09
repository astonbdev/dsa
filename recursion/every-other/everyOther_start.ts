/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {
  if(str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));

  //BASE CASE: There is no more string
  //start our new string
  //append to it the result of getting the next string
  //otherwise append an empty string
}

export { everyOther };