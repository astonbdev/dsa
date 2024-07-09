Binary Search
-------------

Given an array of sorted numbers and a value, return`true` if the value is found
in the array. If not found, return `false`.

This algorithm should run in |bigo-logn| time (where `n` is the number of
elements in the array).

.. code-block:: ts

  binarySearch([1,2,3,4], 1); // true
  binarySearch([1,2,3,4], 3); // true
  binarySearch([1,2,3,4], 5); // false
