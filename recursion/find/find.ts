/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {
  // base cases:
  if (arr.length === 0) return false;  // never found
  if (arr[0] === val) return true;  // found it!

  return find(arr.slice(1), val);
}

export { find };