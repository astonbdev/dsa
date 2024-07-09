import { expect, it } from "vitest";
import { Tree, TreeNodeNum } from "./tree";

const emptyTree = new Tree();

//         1
//         |
//         2

const smallTree = new Tree(
    new TreeNodeNum(1, [
      new TreeNodeNum(2),
    ]));

//            1
//          / | \
//        2   3   4
//               / \
//              5   6
//                   \
//                    7
//                     \
//                      8

const largeTree = new Tree(
    new TreeNodeNum(1, [
      new TreeNodeNum(2),
      new TreeNodeNum(3),
      new TreeNodeNum(4, [
        new TreeNodeNum(5),
        new TreeNodeNum(6, [
          new TreeNodeNum(7, [
            new TreeNodeNum(8),
          ]),
        ]),
      ]),
    ]));

it("can create trees", function () {
  expect(largeTree.root!.val).toBe(1);
  expect(smallTree.root!.val).toBe(1);
});

export { smallTree, largeTree };