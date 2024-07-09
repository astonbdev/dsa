/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {
  // base cases:
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;  // we found it at "position 0"

  const got = findIndex(arr.slice(1), val);
  // subtle part: since we didn't find it here, add 1 to where the next func
  // found it, which will keep track of how many times we "climbed down"
  // once we got the answer
  return got === -1 ? -1 : got + 1;
}

export { findIndex };