import { it, expect } from "vitest";
import { balancedBrackets } from "./balancedBrackets";

it("returns true when the brackets are balanced", function () {
  expect(balancedBrackets("")).toBe(true);
  expect(balancedBrackets("hello")).toBe(true);
  expect(balancedBrackets("(hi)[there]")).toBe(true);
  expect(balancedBrackets("[()][(a)(b)]()")).toBe(true);
});

it("returns false when the brackets are not balanced", function () {
  expect(balancedBrackets("((a)")).toBe(false);
  expect(balancedBrackets("(] (b)")).toBe(false);
  expect(balancedBrackets("((a) ([)] (c)")).toBe(false);
  expect(balancedBrackets("(((hi)))))")).toBe(false);
  expect(balancedBrackets("[]][[]")).toBe(false);
});
