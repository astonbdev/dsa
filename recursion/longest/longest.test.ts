import { it, expect } from "vitest";
import { longest } from "./longest";
import { LLStr } from "../common/ll";

it("returns the length of the longest word in a list of words", function () {
  expect(longest(new LLStr().head)).toBe(0);
  expect(longest(new LLStr(["hello"]).head)).toBe(5);
  expect(longest(new LLStr(["hi", "hello", "hola"]).head)).toBe(5);
});
