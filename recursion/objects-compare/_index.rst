Objects Compare?
----------------

Given two objects (they could either be arrays of objects, or objects), 
return `true` if the objects contain the same values, otherwise return
`false`. 

There can be nested arrays inside of objects and nested objects inside of arrays.

.. code-block:: js

  const obj1 = { 1: [1, 3, 2, [4, { a: [1] }]] };
  const obj2 = { 1: [1, 2, 3, [4, { a: [1] }]] };
  objectCompare(obj1, obj2);   // false

  const obj3 = { 1: [1, 2, 3, [4, { a: [1, 2] }]] };
  const obj4 = { 1: [1, 2, 3, [4, { a: [1] }]] };
  objectCompare(obj3, obj4);   // false

.. hint:: Want a hint?

  .. container:: hover-reveal margin-top-4

    It might help to see the signature of two helper functions we used for
    the solution:

    .. code-block:: ts
      :class: code-cols-77

      /** Are arrays deeply equal? */

      function areSameArrays(a: any[], b: any[]): boolean {
        return false;
      }

      /** Are objects deeply equal? */

      function areSameObjs(
          a: Record<string, any>,
          b: Record<string, any>): boolean {
        return false;
      }
