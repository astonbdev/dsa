import { TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];

  let values = [node.val];

  for(let child of node.children){
    values = [...values, ...preOrder(child)];
  }

  return values;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];

  let values: number[] = [];
  
  for(let child of node.children){
    values = [...values, ...postOrder(child) ];
  }

  values.push(node.val);

  return [...values];
}

export { preOrder, postOrder };
