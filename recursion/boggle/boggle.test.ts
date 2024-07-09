import { test, expect } from "vitest";
import { makeBoard, find } from "./boggle";

test("simple case", function () {
  const board = makeBoard(`
    N C A N E
    O U I O P
    Z Q Z O N
    F A D P L
    E D E A Z
  `);

// `NOON` should be found (0, 3) -> (1, 3) -> (2, 3) -> (2, 4)::
  expect(find(board, "NOON")).toBe(true);

// `NOPE` should be found (0, 3) -> (1, 3) -> (1, 4) -> (0, 4)::
  expect(find(board, "NOPE")).toBe(true);

// `CANON` can't be found (`CANO` starts at (0, 1) but can't find
// the last `N` and can't re-use the N)::
  expect(find(board, "CANON")).toBe(false);

// You cannot travel diagonally in one move, which would be required
// to find `QUINE`::
  expect(find(board, "QUINE")).toBe(false);

// We can recover if we start going down a false path (start 3, 0)::
  expect(find(board, "FADED")).toBe(true);

});

test("tricky case", function () {
  // An extra tricky case --- it needs to find the `N` toward the top right,
  // and then go down, left, up, up, right to find all four `O`s and the `S`::
  const board = makeBoard(`
    E D O S Z
    N S O N R
    O U O O P
    Z Q Z O R
    F A D P L
  `);
  expect(find(board, "NOOOOS")).toBe(true);
});
