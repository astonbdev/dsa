import { describe, it, expect } from "vitest";
import { largeTree, smallTree } from "../common/tree.test";
import { numGreater} from "./numGreater";

describe("numGreater", function () {
  it("counts nodes in small trees", function () {
    expect(numGreater(smallTree.root!, 0)).toEqual(2);
    expect(numGreater(smallTree.root!,1)).toEqual(1);
    expect(numGreater(smallTree.root!, 2)).toEqual(0);
    expect(numGreater(smallTree.root!, 3)).toEqual(0);
  });

  it("counts nodes in larger trees", function () {
    expect(numGreater(largeTree.root!, 0)).toEqual(8);
    expect(numGreater(largeTree.root!, 4)).toEqual(4);
    expect(numGreater(largeTree.root!, 8)).toEqual(0);
  });
});
