import { TreeNodeNum, TreeNum } from "../common/tree";

/** Are `n1` and `n2` "cousins" in the `tree`?
 *
 * Nodes are cousins if they are the same level, but have different parents.
 *
 *         1          root is not a cousin of itself!
 *       /  \
 *      2    3        2 and 3 are not cousins; they're siblings
 *     /    / \
 *    4        5      4 and 5 are cousins
 *   / \      / \
 *  6            7    6 and 7 are cousins
 */

function areCousins(n1: TreeNodeNum, n2: TreeNodeNum, tree: TreeNum): boolean {
  return true;
}

export { areCousins };
