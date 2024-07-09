Split Square
============

Task 1: Dump
------------

We use recursion to print a square. If the square is simple, we can just print it.

Otherwise, we loop over the squares in the split square, and use our same function
to print each of those.

.. literalinclude:: splitSquare.ts
  :language: ts
  :caption:
  :start-at: /** dump
  :end-before: //<

Task 2: Validate
----------------

This solution has the same general structure as `dump`. Our function will use
a simple square as a base case (either returning True or False if it's a valid
simple square). For split squares, it checks each quadrant and returns True only
if all four are valid.

.. literalinclude:: splitSquare.ts
  :language: ts
  :caption:
  :start-at: /** isValid
  :end-before: //<


Task 3: Simplify
----------------

This one is more tricky.

Our base case is still a simple square (we can't simplify that any further!).

For split squares, we'll first ask to recurse-simplify each of their component quadrants
and then see if the resulting quadrants are the same and, if so, simplify those
by returning a simple square.

.. literalinclude:: splitSquare.ts
  :language: ts
  :caption:
  :start-at: /** simplify
  :end-before: //<

If you got this, give yourself a big compliment. It's a hard problem!

Task 4: Add
-----------

This one is also tricky, especially when the squares are unevenly nested.

It uses the same general base case as before: once we are trying to add two
simple squares, we can just add them together.

If they are *both* split squares, it pairs up the quadrants and recursive-adds
those pairs (recursive-add the top-left quadrants of both split squares, then
the top-right, and so one, returning the list of those four adds).

The interesting (and hard!) part is handling the unevenly nested --- where
one square is split and one is simple. In this case, before the adding,
it turns the simple square into a split square composed of four squares that
are the same as the simple square. Then, it has "compatible split squares" and
they can be added together. Neat!

.. literalinclude:: splitSquare.ts
  :language: ts
  :caption:
  :start-at: /** add
  :end-before: //<

This is definitely hard. If you got this, you're a recursion master!

If you got stuck, be kind to yourself --- it's definitely tricky. Go back
and practice re-writing the earlier parts of the exercise to get a good
feel for how recursion works through the parts of this problem.


Python
------

Dump
++++

.. literalinclude:: split_square.py
  :language: py
  :caption:
  :pyobject: dump


Valid?
++++++

.. literalinclude:: split_square.py
  :language: py
  :caption:
  :pyobject: is_valid


Simplify
++++++++

.. literalinclude:: split_square.py
  :language: py
  :caption:
  :pyobject: simplify


Add
+++

.. literalinclude:: split_square.py
  :language: py
  :caption:
  :pyobject: add
