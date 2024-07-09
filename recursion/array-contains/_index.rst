Array Contains?
---------------

Write a function that takes an array and a value, and returns `true` or `false`
if the array contains that value.

However: this needs to work even if the value is in the array anywhere, even
in a nested subarray. Do this **using recursion**, not by using any built-in
flattening methods or libraries.

For example:

.. code-block:: js

  const nums = [1, 2, 3, 7, 9];
  arrayContains(nums, 7);              // true

  const nums = [1, 2, 3, 9];
  arrayContains(nums, 7);              // false

  const nums = [1, [1, [1, 7], 1]];
  arrayContains(nums, 7);              // true

  const nums = [1, [1, 2, [1, 2]]];
  arrayContains(nums, 7);              // false
