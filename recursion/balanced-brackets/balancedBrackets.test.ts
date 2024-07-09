import { it, expect} from "vitest";
import { isBalanced } from "./balancedBrackets";

it("succeeds", function () {
  expect(isBalanced("")).toBe(true);
  expect(isBalanced("<>")).toBe(true);
  expect(isBalanced("(hi)")).toBe(true);
  expect(isBalanced("<<[{}]>>")).toBe(true);
});

it("fails", function () {
  expect(isBalanced("<")).toBe(false);
  expect(isBalanced(">")).toBe(false);
  expect(isBalanced("<<>")).toBe(false);
  expect(isBalanced("<<(hi)>")).toBe(false);
  expect(isBalanced("<}")).toBe(false);
});
