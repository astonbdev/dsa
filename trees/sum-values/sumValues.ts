import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {
  // the sum of self + their children, recursively
  let sum = node.val;

  for (let child of node.children) {
    sum += sumValues(child);
  }

  return sum;
}

export { sumValues };
