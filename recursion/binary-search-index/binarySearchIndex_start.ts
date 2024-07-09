/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(
    arr: number[],
    val: number,
    left = 0,
    right = arr.length): number {
      if(left > right) return -1;
      const mid = Math.floor((left + right) / 2);
      if(arr[mid] === val) return mid;

      if(arr[mid] > val) return binarySearchIndex(arr, val, left, mid - 1);
      return binarySearchIndex(arr, val, mid + 1, right);
}

export { binarySearchIndex };