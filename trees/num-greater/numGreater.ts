import { TreeNodeNum } from "../common/tree";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum , lowerBound: number): number {
  // the gt-bound count of self + their children, recursively
  let count = node.val > lowerBound ? 1 : 0;

  for (let child of node.children) {
    count += numGreater(child, lowerBound);
  }

  return count;
}

export { numGreater };