Gather Strings
--------------

Given an object, return an array of all the values in the object that are strings::

  const nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz"
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: "you made it!"
          }
        }
      },
      favoriteString: "nice!"
    }
  };

  gatherStrings(nestedObj); // ["Lester", "Testowitz", "you made it!", "nice!"];