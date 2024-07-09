/** gatherStrings: given an object, return array of all the string values. */

function gatherStrings(obj: Record<string, any>): string[] {
  let strings = [];
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "string") strings.push(value);
    if (typeof value === "object") strings.push(...gatherStrings(value));
  }
  return strings;
}

export { gatherStrings };
