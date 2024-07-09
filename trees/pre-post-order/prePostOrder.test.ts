import { describe, expect, it } from "vitest";
import { postOrder, preOrder } from "./prePostOrder";
import { largeTree as lg, smallTree as sm } from "../common/tree.test";

//            1
//          / | \
//        2   3   4
//               / \
//              5   6
//                   \
//                    7
//                     \
//                      8

describe("dfsPreOrder", function () {
  it("returns values found pre-order", function () {
    expect(preOrder(sm.root)).toEqual([1, 2]);
    expect(preOrder(lg.root)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(preOrder(null)).toEqual([]);
  });
});


describe("dfsPostOrder", function () {
  it("returns values found in-order", function () {
    expect(postOrder(sm.root)).toEqual([2, 1]);
    expect(postOrder(lg.root)).toEqual([2, 3, 5, 8, 7, 6, 4, 1]);
    expect(postOrder(null)).toEqual([]);
  });
});
