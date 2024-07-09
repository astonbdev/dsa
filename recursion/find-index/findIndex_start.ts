/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {
  //base case: array is empty, value not found return -1
  //conditional where if return is -1, continue to return -1
  //start a count at 0, test if the 0th index is the value, if it is, return count

  //if it's not, make recursive call and add 1 to return value;

  if(arr.length === 0) return -1;

  if(arr[0] === val){
    return 0;
  }

  let newArr = arr.slice()
  newArr.shift();

  let result = findIndex(newArr, val)
  if(result === -1) return -1;
  
  return result + 1;
}

export { findIndex };