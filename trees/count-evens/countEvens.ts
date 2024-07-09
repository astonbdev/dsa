import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {
  // the even-count of self + their children, recursively
  let count = node.val % 2 === 0 ? 1 : 0;

  for (let child of node.children) {
    count += countEvens(child);
  }

  return count;
}

export { countEvens };
