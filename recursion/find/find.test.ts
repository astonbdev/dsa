import { it, expect } from "vitest";
import { find } from "./find";

const nums = [1, 2, 3];

it("returns true if the value exists", function () {
  expect(find(nums, 1)).toBe(true);
  expect(find(nums, 2)).toBe(true);
  expect(find(nums, 3)).toBe(true);
});

it("returns false if value does not exist", function () {
  expect(find(nums, 0)).toBe(false);
});