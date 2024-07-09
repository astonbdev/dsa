import { expect, it } from "vitest";
import { LLNum } from "../common/ll";
import { product } from "./product";

it("returns the product of all numbers in an linked list", function () {
  expect(product(new LLNum().head)).toBe(1);
  expect(product(new LLNum([10]).head)).toBe(10);
  expect(product(new LLNum([2, 3, 4]).head)).toBe(24);
});
