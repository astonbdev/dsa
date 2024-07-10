import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  if(node!.children.length === 0) return 1;

  let sum = 0;
  let max = -1;

  for(let child of node!.children){
    const currSum = maxDepth(child);
    max = Math.max(max, currSum);
  }

  return sum + max + 1;
}

export { maxDepth };


