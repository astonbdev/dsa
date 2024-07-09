/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {
  //base case, array is empty, return false;
  //test if current last value is the thing we want
  //if it's not, pop it, and call recursively with new array
  //if it is, return true;

  if(arr.length === 0) return false;

  if(arr[length-1] === val) return true;

  arr.pop();

  return find(arr, val);
}

export { find };