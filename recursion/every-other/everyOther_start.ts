/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {
  function _getEveryOther(str:string, count: number): string{
    if(str.length === 0) return str;
    const characters = str.split("");
    let result;

    if(count % 2 !== 0){
      characters.shift();
    }

    result = _getEveryOther(characters.join(""), count + 1);
    return result; 
  }
  
  return _getEveryOther(str, 0);

  //BASE CASE: There is no more string
  //start our new string
  //append to it the result of getting the next string
  //otherwise append an empty string
}

export { everyOther };