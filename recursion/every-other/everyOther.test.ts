import { it, expect } from "vitest";
import { everyOther } from "./everyOther";

it("returns a string with every other character in the input", function () {
  expect(everyOther("")).toBe("");
  expect(everyOther("h")).toBe("h");
  expect(everyOther("hello")).toBe("hlo");
});