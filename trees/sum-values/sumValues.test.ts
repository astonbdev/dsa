import { describe, it, expect } from "vitest";
import { largeTree, smallTree } from "../common/tree.test";
import { sumValues } from "./sumValues";

describe("sumValues", function () {
  it("sums simple trees", function () {
    expect(sumValues(smallTree.root!)).toEqual(3);
  });

  it("sums more complicated trees", function () {
    expect(sumValues(largeTree.root!)).toEqual(36);
  });
});
