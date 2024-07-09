/** everyOther: return a string with every other letter. */

function everyOther(str: string) : string{
  if (str === "") return "";

  return str[0] + everyOther(str.slice(2));
}

export { everyOther };