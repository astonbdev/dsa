Boggle
======

This is a recursive problem: when looking for the word `NOON`, we first
scan the board looking for `N` and, when we find one, start there looking
for the word `OON`, and, once we find an `O`, start there, scanning for the
word `ON`, and so on.

We keep track of the letters we've seen, so we don't re-use them in a path.
Note that we do this by creating a new set for each path,
so when we backtrack to a previous call frame, we're back to the original
list of seen letters.

.. literalinclude:: boggle.ts
  :language: ts
  :caption:
  :start-at: /**
  :end-before: export
