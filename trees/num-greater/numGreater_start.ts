import { TreeNodeNum } from "../common/tree";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {
  if(node.children.length === 0) return (node.val > lowerBound) ? 1 : 0;

  let sum = (node.val > lowerBound) ? 1 : 0;

  for(let child of node.children){
    sum += numGreater(child, lowerBound);
  }

  return sum;
}

export { numGreater };