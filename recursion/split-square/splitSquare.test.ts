import { describe, test, expect } from "vitest";
import { dump, isValid, add, simplify } from "./splitSquare";


describe("dump", function () {
  test("should dump ints", function () {
    expect(dump(0)).toEqual("0");
    expect(dump(1)).toEqual("1");
  });

  test("should dump arrays", function () {
    expect(dump([0, 1, 0, 1])).toEqual("0 1 0 1");
  });

  test("should handle nesting", function () {
    expect(dump([0, 0, 0, [1, 1, [0, 0, 0, 0], 1]])).toEqual(
      "0 0 0 1 1 0 0 0 0 1");
  })
});


describe("isValid", function () {
  test("should allow correct ints", function () {
    expect(isValid(0)).toEqual(true);
    expect(isValid(1)).toEqual(true);
  });

  test("should reject wrong ints", function () {
    // @ts-expect-error
    expect(isValid(3)).toEqual(false);
  });

  test("should reject wrong types", function () {
    // @ts-expect-error
    expect(isValid({ "hey": "there" })).toEqual(false);
    // @ts-expect-error
    expect(isValid("yo")).toEqual(false);
    // @ts-expect-error
    expect(isValid("1")).toEqual(false);
  });

  test("should disallow wrong-length arrays", function () {
    // @ts-expect-error
    expect(isValid([0, 0, 0, 0, 0])).toEqual(false);
  });

  test("should allow good arrays", function () {
    expect(isValid([0, 0, 0, 0])).toEqual(true);
  });

  test("should handle nesting properly", function () {
    expect(isValid([0, 0, 0, [1, 1, 1, [0, 0, 0, 0]]])).toEqual(true);
    // @ts-expect-error
    expect(isValid([0, 0, 0, [1, 1, 1, 1, [0, 0, 0, 0]]])).toEqual(false);
  });
});


describe("simplify", function () {
  test("should be a no-op for ints", function () {
    expect(simplify(1)).toEqual(1);
    expect(simplify(0)).toEqual(0);
  });

  test("should not simplify non-matching arrays", function () {
    expect(simplify([1, 0, 1, 0])).toEqual([1, 0, 1, 0]);
  });

  test("should simplify matching arrays", function () {
    expect(simplify([1, 1, 1, 1])).toEqual(1);
  });

  test("should handle nesting", function () {
    expect(simplify([0, 0, 0, [0, 0, 0, [0, 0, 0, 0]]])).toEqual(0);
  });
});


describe("add", function () {
  test("should add ints", function () {
    expect(add(0, 0)).toEqual(0);
    expect(add(1, 1)).toEqual(1);
    expect(add(1, 0)).toEqual(1);
    expect(add(0, 1)).toEqual(1);
  });

  test("should add arrays", function () {
    expect(add([1, 0, 1, 0], [0, 0, 0, 1])).toEqual([1, 0, 1, 1]);
  });

  test("should handle nesting", function () {
    expect(add(0, [1, 0, 1, 0])).toEqual([1, 0, 1, 0]);
    expect(add(1, [1, 0, 1, 0])).toEqual([1, 1, 1, 1]);
  });
});
