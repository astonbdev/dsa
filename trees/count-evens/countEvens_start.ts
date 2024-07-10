import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {
  if(node.children.length === 0) return (node.val % 2) === 0 ? 1 : 0;

  let sum = (node.val % 2) === 0 ? 1 : 0;

  for(let child of node.children){
    sum += countEvens(child);
  }

  return sum;
  
}

export { countEvens };
