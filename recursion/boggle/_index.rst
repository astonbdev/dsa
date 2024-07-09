Boggle
------

In this problem, you'll make a function that, given a 5x5 Boggle board,
can check if a given word is in it.

In Boggle, you can start with any letter, then move in any NEWS direction.
You can continue to change directions.

(In the real game of Boggle, you can also move diagonally, but in our
simplified version, you can only move NEWS directions).

So, for example:

.. csv-table::
  :class: table-unstriped td-padding-3 td-center-all

  N,C,A,N,E
  O,U,I,O,P
  Z,Q,Z,O,N
  F,A,D,P,L
  E,D,E,A,Z

In this grid, you could find `NOON` (start at the `N` in the top
row, head south, and turn east in the third row). You cannot find
the word `CANON` --- while you can find `CANO` by starting at the
top-left `C`, you can 't re-use the exact same `N` tile on the
front row, and there's no other `N` you can reach.

A convenient `make_board` function is provided, which returns a
list-of-rows, with each row being a list-of-letters::

    let board = makeBoard(`
        N C A N E
        O U I O P
        Z Q Z O N
        F A D P L
        E D E A Z
        `)

    board.length;   // 5
    5

    board[0];       // ['N', 'C', 'A', 'N', 'E']

`NOON` should be found *(0, 3 -> 1, 3 -> 2, 3 -> 2, 4)*::

    find(board, "NOON")  // true

`NOPE` should be found *(0, 3 -> 1, 3 -> 1, 4 -> 0, 4)*::

    find(board, "NOPE") // true


`CANON` can't be found (`CANO` starts at 0, 1 but can't find
the last `N` and can't re-use the N)::

    find(board, "CANON")  // false

You cannot travel diagonally in one move, which would be required
to find `QUINE`::

    find(board, "QUINE")  // false

We can recover if we start going down a false path *(start 3, 0)*::

    find(board, "FADED")  // true


.. hint:: Want a hint?

  .. container:: hover-reveal margin-top-4

    This is a **tough challenge** --- you may find it easier to make
    it a bit simpler as you get started.

    You can ignore the rule about "cannot re-use the same letter
    twice" and add that in later.
