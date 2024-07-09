import { it, expect } from "vitest";
import { binarySearchIndex } from "./binarySearchIndex";

it("should find the index of a value in a sorted array", function () {
  expect(binarySearchIndex([1, 2, 3, 4], 4)).toEqual(3);
  expect(binarySearchIndex([1, 2], 1)).toEqual(0);
  expect(binarySearchIndex([1, 2, 3, 4, 5, 6, 7], 6)).toEqual(5);
});

it("should return -1 if the value is not found", function () {
  expect(binarySearchIndex([], 0)).toEqual(-1);
  expect(binarySearchIndex([1, 2, 3, 4], 0)).toEqual(-1);
  expect(binarySearchIndex([1, 2], 11)).toEqual(-1);
});