import { it, expect } from "vitest";
import { findIndex } from "./findIndex";

const nums = [1, 2, 3];

it("returns first index", function () {
  expect(findIndex(nums, 1)).toBe(0);
  expect(findIndex(nums, 2)).toBe(1);
  expect(findIndex(nums, 3)).toBe(2);
});

it("returns -1 if the value does not exist", function () {
  expect(findIndex(nums, 0)).toBe(-1);
});
