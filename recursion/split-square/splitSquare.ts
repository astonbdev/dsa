type tSS = [tSS, tSS, tSS, tSS] | 0 | 1;


/** dump(s) - returns split square as string */

function dump(s: tSS): string {
  if (s === 0 || s === 1) {
    return s.toString();
  } else {
    return s.map(dump).join(" ");
  }
}
//<


/** isValid(s) - is this a valid split square? */

function isValid(s: tSS): boolean {
  if (s === 0 || s === 1) return true;

  if (Array.isArray(s) && s.length === 4) {
    return s.every(isValid);
  }

  return false;
}
//<


/** simplify(s) - simplify redundant splits in a split square */

function simplify(s: tSS): tSS {
  // base case: is already just an integer
  if (s === 0 || s === 1) return s;

  // recursively simplify all quadrants
  s = s.map(simplify) as tSS;

  // if all four are the same integer, we can simplify
  if (Array.isArray(s)
      && (typeof s[0] === "number")
      && s.every((q, _, s) => q === s[0])) return s[0];

  return s;
}
//<


/** add(s1, s2) - add two split squares */

function add(s1: tSS, s2: tSS): tSS {
  if (typeof s1 === "number" && typeof s2 === "number") {
    return (s1 === 0 && s2 === 0) ? 0 : 1;
  }

  if (!Array.isArray(s2)) s2 = [s2, s2, s2, s2];
  if (!Array.isArray(s1)) s1 = [s1, s1, s1, s1];

  return [
    add(s1[0], s2[0]),
    add(s1[1], s2[1]),
    add(s1[2], s2[2]),
    add(s1[3], s2[3]),
  ];
}
//<


export { dump, isValid, simplify, add };
