const OPEN_TO_CLOSE = new Map(
    [["{", "}"], ["(", ")"], ["[", "]"], ["<", ">"]]);
const ALL_BRACKETS = new Set([
  ...OPEN_TO_CLOSE.keys(),
  ...OPEN_TO_CLOSE.values(),
]);


/** Are brackets balanced? */

function isBalanced(s: string): boolean {
  //  index of where we are in string --- this will be used & changed in _bal
  let i = 0;

  function _bal(expr: string, seeking: string | null = null) {
    while (i < expr.length) {
      // base case: closing right thing
      if (expr[i] == seeking) {
        i += 1;
        return true;
      }

      // not a bracket; just move forward
      else if (!ALL_BRACKETS.has(expr[i])) {
        i += 1;
      }

      // found opener; check it!
      else if (OPEN_TO_CLOSE.has(expr[i])) {
        if (!_bal(expr, OPEN_TO_CLOSE.get(expr[i++]))) {
          return false;
        }
      }

      // base case: is closer, but not one we were looking for
      else {
        return false;
      }
    }
    return seeking == null;
  }

  return _bal(s);
}


export { isBalanced };