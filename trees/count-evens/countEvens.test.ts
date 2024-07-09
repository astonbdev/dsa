import { describe, it, expect } from "vitest";
import { largeTree, smallTree } from "../common/tree.test";
import { countEvens } from "./countEvens";

describe("countEvens", function () {
  it("counts nodes in simple trees", function () {
    expect(countEvens(smallTree.root!)).toEqual(1);
  });

  it("counts TreeNodeNums in more complicated trees", function () {
    expect(countEvens(largeTree.root!)).toEqual(4);
  });
});
