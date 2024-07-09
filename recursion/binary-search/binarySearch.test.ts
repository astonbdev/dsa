import { it, expect } from "vitest";
import { binarySearch } from "./binarySearch";

it("should find the index of a value in a sorted array", function () {
  expect(binarySearch([1, 2, 3, 4], 4)).toEqual(true);
  expect(binarySearch([1, 2], 1)).toEqual(true);
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 6)).toEqual(true);
});

it("should return false if the value is not found", function () {
  expect(binarySearch([], 0)).toEqual(false);
  expect(binarySearch([1, 2, 3, 4], 0)).toEqual(false);
  expect(binarySearch([1, 2], 11)).toEqual(false);
});