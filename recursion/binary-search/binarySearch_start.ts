/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {
  //base case array is empty, value not found
  const mid = Math.floor((left + right)/2);
  if (left > right) return false;
  if(arr[mid] === val) return true;
  if(arr[mid] > val) return binarySearch(arr, val, left, mid - 1);
  return binarySearch(arr, val, mid + 1, right);
}

export { binarySearch };