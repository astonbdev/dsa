type tRecurNumArray = (number | tRecurNumArray)[];

/** Does array contain item? (recursive search) */

function arrayContains(nums: tRecurNumArray, sought: number): boolean {
  for (const n of nums) {
    if (n === sought) return true;
    if (Array.isArray(n) && arrayContains(n, sought)) return true;
  }

  return false;
}

export { arrayContains };
