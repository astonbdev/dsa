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
  function levelAndParent(
      sought: TreeNodeNum,
      curr: TreeNodeNum | null,
      level = 0,
      parent: TreeNodeNum | null = null,
  ): { level: number, parent: TreeNodeNum | null } | undefined {
    if (!curr) return;
    if (curr === sought) return { level, parent };
    for (const c of curr.children) {
      const lvlP = levelAndParent(sought, c, level + 1, curr);
      if (lvlP) return lvlP;
    }
  }

  // the same node isn't a cousin of itself
  if (n1 === n2) return false;

  // find depth and parent for each
  const n1LP = levelAndParent(n1, tree.root!);
  const n2LP = levelAndParent(n2, tree.root!);

  // if either node wasn't found, they're not cousins
  if (!n1LP || !n2LP) return false;

  return (n1LP.level === n2LP.level) && (n1LP.parent !== n2LP.parent);
}

export { areCousins };