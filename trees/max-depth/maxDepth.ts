import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  if (!node) return 0;
  const childVals = node.children.map(n => maxDepth(n));
  return childVals.length > 0 ? Math.max(...childVals) + 1 : 1;
}

export { maxDepth };