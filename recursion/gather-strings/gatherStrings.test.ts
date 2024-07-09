import { it, expect } from "vitest";
import { gatherStrings } from "./gatherStrings";

it("gathers all object string values into an array", function () {
  let whiskey: Record<string, any> = {
    name: "Whiskey",
    age: 5,
    favFood: "popcorn",
    color: "black",
    barks: false,
  };
  expect(gatherStrings(whiskey).sort()).toEqual(["Whiskey", "popcorn", "black"].sort());
});

it("handles nested objects", function () {
  let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz",
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: "you made it!",
          },
        },
      },
      favoriteString: "nice!",
    },
  };
  expect(gatherStrings(nestedObj).sort()).toEqual(["Lester", "Testowitz", "you made it!", "nice!"].sort());
});
