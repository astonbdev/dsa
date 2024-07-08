import { expect, it } from "vitest";
import { stringReversal} from "./stringReversal";

it("reverses the input string", function () {
  expect(stringReversal("hello")).toBe("olleh");
  expect(stringReversal("hello there")).toBe("ereht olleh");
  expect(stringReversal("1234")).toBe("4321");
});
