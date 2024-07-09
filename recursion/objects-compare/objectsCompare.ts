/** Are arrays deeply equal? */

function areSameArrays(a: any[], b: any[]): boolean {
  if (a.length !== b.length) return false;

  return a.every((val, idx) => {
    if (Array.isArray(val) && Array.isArray(b[idx])) {
      return areSameArrays(val, b[idx]);
    } else if (val instanceof Object && b[idx] instanceof Object) {
      return areSameObjs(val, b[idx]);
    } else {
      return val === b[idx];
    }
  });
}

/** Are objects deeply equal? */

function areSameObjs(a: Record<string, any>, b: Record<string, any>): boolean {
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (const key in a) {
    // if (!(key in obj2)) return false;

    if (Array.isArray(a[key]) && Array.isArray(b[key])) {
      if (!areSameArrays(a[key], b[key])) return false;
    } else if (a[key] instanceof Object && b[key] instanceof Object) {
      if (!areSameObjs(a[key], b[key])) return false;
    } else if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

/** Are arrays/objects deeply equal? */

function objectsCompare(
    a: Record<string, any> | any[],
    b: Record<string, any> | any[]): boolean {
  const bothArrays = Array.isArray(a) && Array.isArray(b);
  return bothArrays ? areSameArrays(a, b) : areSameObjs(a, b);
}


export { objectsCompare, areSameArrays, areSameObjs };