/** TreeNodeNum: node for a general tree. */

class TreeNode<T> {
  val: T;
  children: TreeNode<T>[];

  constructor(val: T, children: TreeNode<T>[] = []) {
    this.val = val;
    this.children = children;
  }
}

/** General tree class. */

class Tree<T> {
  root: TreeNode<T> | null;

  constructor(root: TreeNode<T> | null = null) {
    this.root = root;
  }
}

// Convenience classes for people who aren't as familiar with generics

class TreeNodeNum extends TreeNode<number> {}

class TreeNodeStr extends TreeNode<string> {}

class TreeNum extends Tree<number> {}

class TreeStr extends Tree<string> {}

export { Tree, TreeNodeNum, TreeNum, TreeNode, TreeStr, TreeNodeStr };
