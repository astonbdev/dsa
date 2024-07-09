import { it, expect } from "vitest";
import { isPalindrome } from "./isPalindrome";

it("returns true if the string is a palindrome", function () {
  expect(isPalindrome("")).toBe(true);
  expect(isPalindrome("x")).toBe(true);
  expect(isPalindrome("noon")).toBe(true);
  expect(isPalindrome("tacocat")).toBe(true);

});

it("returns false if the string is not a palindrome", function () {
  expect(isPalindrome("az")).toBe(false);
  expect(isPalindrome("tacodog")).toBe(false);
});
