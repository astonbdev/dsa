============
Split Square
============

.. tip:: You can do this in JS or Python; we have tests and starter code for both.


In this challenge, you'll be writing code to handle squares and "split squares".

A square can be a "simple square", where it's either *empty* or *filled*:

.. aafig::
  :scale: 90

  +--+     +--+
  |  |     |XX|
  |  |     |XX|
  +--+     +--+

A square can be divided into a "split square" of exactly four squares:

.. aafig::
  :scale: 90

  +-----+
  |  |XX|
  |  |XX|
  |--+--|
  |  |  |
  |  |  |
  +-----+

Any or all of these can also be further split, so this is a legal square:

.. aafig::
  :scale: 90

  +-----------+
  |     |  |XX|
  |     |  |XX|
  |     |--+--|
  |     |XX|XX|
  |     |XX|XX|
  |-----+-----|
  |     |     |
  |     |     |
  |     |     |
  |     |     |
  |     |     |
  +-----------+

This splitting can be arbitrarily deep.

Representing Squares
--------------------

We need a code-friendly way to represent these squares.

We'll represent a simple square with ``1`` *(filled)* or ``0`` *(empty)*\ :

.. aafig::
  :scale: 90

  +--+              +--+
  |  |  0           |XX|  1
  |  |              |XX|
  +--+              +--+

A split square will be represented with a list of squares,
with each item in the list being the (top-left, top-right,
bottom-left, bottom-right) parts:

.. aafig::
  :scale: 90

  +-----+
  |  |XX|
  |  |XX|
  |--+--|  [0, 1, 0, 0]
  |  |  |
  |  |  |
  +-----+

These lists can be nested as needed so we can represent further divided squares:

.. aafig::
  :scale: 90

  +-----------+
  |     |  |XX|
  |     |  |XX|
  |     |--+--|
  |     |XX|XX|
  |     |XX|XX|
  |-----+-----|  [0, [0, 1, 1, 1], 0, 0]
  |     |     |
  |     |     |
  |     |     |
  |     |     |
  |     |     |
  +-----------+

You could think of this structure as a kind of "recursive list" --- any square can
contain four squares, so any list item could be another list of four list items.

*Make sure you understand this data structural representation before you move
forward.* You may find it helpful to draw a few squares and write down what the
JavaScript list-based representation would be, so that it's clear in your head.


Task 1: Dumping Squares
-----------------------

Squares can be "dumped", which is returning a string of the square:
a ``1`` or ``0`` space-separated.

For a simple square, this would just print ``0`` or ``1``.

For this split square:

.. aafig::
  :scale: 90

  +-----+
  |  |XX|
  |  |XX|
  |--+--|
  |  |  |
  |  |  |
  +-----+

Its dump would be::

  0 1 0 0

For this split square:

.. aafig::
  :scale: 90

  +-----------+
  |     |  |XX|
  |     |  |XX|
  |     |--+--|
  |     |XX|XX|
  |     |XX|XX|
  |-----+-----|
  |     |     |
  |     |     |
  |     |     |
  |     |     |
  |     |     |
  +-----------+

Its dump would be::

  0 0 1 1 1 0 0

We want to write a function, `dump(square)`, which will dump out a square.

For example, a simple square will only be one line::

    dump(0);  // 0

    dump(1);  // 1

A split square will use four lines::

    dump([0, 1, 0, 1]);  // 0 1 0 1

A nested split square will use one line per square::

    dump([0, 0, 0, [1, 1, 1, 1]]);  // 0 0 0 1 1 1 1

Of course, these can nested deeply and still work::

    dump([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]]);
      // 0 0 0 1 1 1 0 0 0 1 1 1 1

As a hint, you'll want to use recursion here. This first task, of dumping things,
will give you a good "skeleton" for the later tasks, as they'll all need some of the
same ideas of "navigating an arbitrarily nested data structure".


Task 2: Validating Squares
--------------------------

Given our data structures, described above, write a function,
`validate(square)`, which takes a square/split square, and returns true
if it is valid, and false if it is not.

For example, a simple square is valid::

    validate(0);  // true

A split square of four simple filled squares is valid::

    validate([1, 1, 1, 1]);  // true

We can nest split and simple squares::

    validate([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1]);  // true

    validate([1,
             [1, 0, 1, [0, [0, 0, 0, 0], 1, 1]],
             [1, 0, 1, 0],
             1]);  // true

Simple squares must be either 0 (empty) or 1 (filled)::

    validate(2);  // false

Split squares must contain exactly four parts::

    validate([1, 1, 1, 1, 1]);  // false

    validate([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1]);  // false

    validate([1, [1, 0, 1, [0, [0, 0, 0], 1, 1]], [1, 0, 1, 0], 1]);  // false


Task 3: Simplifying Squares
---------------------------

A split square that has all the same squares can be "simplified" into a simple square.

For example, this split square contains four filled squares, so we could simplify the
entire thing into one simple filled square:

.. aafig::
  :scale: 90

  +-----+    +-----+
  |XX|XX|    |XXXXX|
  |XX|XX|    |XXXXX|
  |--+--| -> |XXXXX|
  |XX|XX|    |XXXXX|
  |XX|XX|    |XXXXX|
  +-----+    +-----+

This works with nested split squares, too:

.. aafig::
  :scale: 90

  +-----------+    +-----------+
  |     |XX|XX|    |     |XXXXX|
  |     |XX|XX|    |     |XXXXX|
  |     |--+--|    |     |XXXXX|
  |     |XX|XX|    |     |XXXXX|
  |     |XX|XX|    |     |XXXXX|
  |-----+-----| -> |-----+-----|
  |     |     |    |     |     |
  |     |     |    |     |     |
  |     |     |    |     |     |
  |     |     |    |     |     |
  |     |     |    |     |     |
  +-----------+    +-----------+

If an inner simplification makes a simple square out of a split square,
this could simplify an outer split square:

.. aafig::
  :scale: 90

  +-----------+    +-----------+
  |XXXXX|XX|XX|    |XXXXXXXXXXX|
  |XXXXX|XX|XX|    |XXXXXXXXXXX|
  |XXXXX|--+--|    |XXXXXXXXXXX|
  |XXXXX|XX|XX|    |XXXXXXXXXXX|
  |XXXXX|XX|XX|    |XXXXXXXXXXX|
  |-----+-----| -> |XXXXXXXXXXX|
  |XXXXX|XXXXX|    |XXXXXXXXXXX|
  |XXXXX|XXXXX|    |XXXXXXXXXXX|
  |XXXXX|XXXXX|    |XXXXXXXXXXX|
  |XXXXX|XXXXX|    |XXXXXXXXXXX|
  |XXXXX|XXXXX|    |XXXXXXXXXXX|
  +-----------+    +-----------+

Write a function, `simplify(square)`, that takes in a square
and returns the maximally-simplified version of it.

For example, a simple square is already simplified::

    simplify(0) // 0

A split square containing four simple filled squares can be
simplified to a simple filled square::

    simplify([1, 1, 1, 1])  // 1

A split square containing four simple empty squares can be
simplified to a simple empty square::

    simplify([0, 0, 0, 0])   // 0

A split square containing mixed squares cannot be simplified::

    simplify([1, 0, 1, 0])  // [1, 0, 1, 0]

These can be simplified even when nested::

    simplify([1, 0, 1, [1, 1, 1, 1]])  // [1, 0, 1, 1]

Simplification should nest, so if we can simplify one split square
into a simple square and now an outer split square can be
simplified, it should::

    simplify([1, 1, 1, [1, 1, 1, 1]])  // 1

    simplify([[1, 1, 1, 1], [1, 1, 1, 1], 1, 1])  // 1

    simplify([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1])
    // [1, 0, [1, 0, 1, 1], 1]


Task 4: Adding Squares
----------------------

Squares can be added together, using the rule that if either
square is filled, the result is filled:

.. aafig::
  :scale: 90

  +--+   +--+   +--+
  |  | ＋|  | → |  |
  |  |   |  |   |  |
  +--+   +--+   +--+

  +--+   +--+   +--+
  |  | ＋|XX| → |XX|
  |  |   |XX|   |XX|
  +--+   +--+   +--+

  +--+   +--+   +--+
  |XX| ＋|  | → |XX|
  |XX|   |  |   |XX|
  +--+   +--+   +--+

  +--+   +--+   +--+
  |XX| ＋|XX| → |XX|
  |XX|   |XX|   |XX|
  +--+   +--+   +--+


Split squares can be added with the same rules: for each part, if that part is filled,
that part in the result is filled:

.. aafig::
  :scale: 90

  +-----+   +-----+   +-----+
  |  |XX|   |XX|  |   |XX|XX|
  |  |XX| ＋|XX|  | → |XX|XX|
  |--+--|   |--+--|   |--+--|
  |  |  |   |  |  |   |  |  |
  |  |  |   |  |  |   |  |  |
  +-----+   +-----+   +-----+

Even if one given square is more nested than another, the two squares can still
be added. Any part of either square that is filled will be filled in the result square.

For example, if we add a simple empty square and a split square, we'll get a split square
with those same splits filled:

.. aafig::
  :scale: 90

  +-----+   +-----+   +-----+
  |     |   |XX|  |   |XX|  |
  |     | ＋|XX|  | → |XX|  |
  |     |   |--+--|   |--+--|
  |     |   |  |  |   |  |  |
  |     |   |  |  |   |  |  |
  +-----+   +-----+   +-----+

Or, as a more complex version of that same idea:

.. aafig::
  :scale: 90

  +-----------+   +-----------+   +-----------+
  |     |  |XX|   |  |  |     |   |  |  |  |XX|
  |     |  |XX|   |  |  |     |   |  |  |  |XX|
  |     |--+--|   |--+--|     |   |--+--|--+--|
  |     |  |  |   |  |XX|     |   |  |XX|  |  |
  |     |  |  |   |  |XX|     |   |  |XX|  |  |
  |-----+-----| ＋|-----+-----| → |-----+-----|
  |XX|  |     |   |XX|  |     |   |XX|  |     |
  |XX|  |     |   |XX|  |     |   |XX|  |     |
  |--+--|     |   |--+--|     |   |--+--|     |
  |  |  |     |   |  |XX|     |   |  |XX|     |
  |  |  |     |   |  |XX|     |   |  |XX|     |
  +-----------+   +-----------+   +-----------+

Write a function, `add(square, square)`, that adds together two squares.

For example, two simple squares can be added::

    const s1 = 0;
    const s2 = 1;

    add(s1, s2);   // 1

A simple square and a split square can be added::

    const s1 = 0;
    const s2 = [1, 0, 1, 0];

    add(s1, s2);  // [1, 0, 1, 0]

Two split squares can be added::

    const s1 = [0, 0, 0, 1];
    const s2 = [0, 1, 0, 1];

    add(s1, s2)   // [0, 1, 0, 1];

Nested squares can be added::

    const s1 = [0, [1, 1, 1, [0, 0, 0, 0]], [0, 0, 0, 0], 1];
    const s2 = [1, [1, 0, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1];

    add(s1, s2);
    // [1, [1, 1, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]


Unevenly-nested squares can be added::

    const s1 = [0, [1, 1, 1, 0           ], [0, 0, 0, 0], 1];
    const s2 = [1, [1, 0, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1];

    add(s1, s2)
    // [1, [1, 1, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1];

    const s1 = [0, [1, 1, 1, 1                      ], [0, 0, 0, 0], 1];
    const s2 = [1, [1, 0, 1, [0, [0, 0, 0, 0], 1, 1]], [1, 0, 1, 0], 1];

    add(s1, s2);
    // [1, [1, 1, 1, [1, [1, 1, 1, 1], 1, 1]], [1, 0, 1, 0], 1]


