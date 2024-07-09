import { expect, it } from "vitest";
import { TreeNum, TreeNodeNum } from "../common/tree";
import { areCousins } from "./cousins";


/** Given array, returns 2-permutations:
 *
 * [a, b, c] => [ [a,b], [a,c], [b,a], [b,c], [c,a], [c,b] ]
 */
function permutationsOf2<T>(arr: T[]): T[][] {
  const out: T[][] = [];
  for (const x of arr) {
    for (const y of arr) {
      if (x !== y) out.push([x, y]);
    }
  }
  return out;
}

//                    1
//                 /     \
//               2         3
//             /   \     /   \
//            4     5   6
//

const n4 = new TreeNodeNum(4);
const n5 = new TreeNodeNum(5);
const n6 = new TreeNodeNum(6);

const n2 = new TreeNodeNum(2, [n4, n5]);
const n3 = new TreeNodeNum(3, [n6]);

const n1 = new TreeNodeNum(1, [n2, n3]);
const tree = new TreeNum(n1);


it("finds cousins properly", function () {
  expect(areCousins(n1, n1, tree)).toBe(false);

  expect(areCousins(n2, n3, tree)).toBe(false);

  expect(areCousins(n4, n5, tree)).toBe(false);
  expect(areCousins(n4, n6, tree)).toBe(true);
  expect(areCousins(n5, n6, tree)).toBe(true);

  expect(areCousins(n1, n5, tree)).toBe(false);
  expect(areCousins(n1, n6, tree)).toBe(false);
});

it("checks all combinations to verify cousins", function () {
  const perms = permutationsOf2([n1, n2, n3, n4, n5, n6]);  // 30
  const cousins = perms.filter(([a, b]) => areCousins(a, b, tree));
  const cousinNames = cousins.map(([a, b]) => `${ a.val }-${ b.val }`);
  cousinNames.sort();
  expect(cousinNames).toEqual(["4-6", "5-6", "6-4", "6-5"]);
});
