import { TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if (!node) return [];
  const out = [node.val];
  for (const c of node.children) {
    out.push(...preOrder(c));
  }
  return out;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  if (!node) return [];
  const out = [];
  for (const c of node.children) {
    out.push(...postOrder(c));
  }
  out.push(node.val);
  return out;
}

export { preOrder, postOrder };