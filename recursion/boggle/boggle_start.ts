/** Boggle word check.

 Given a 5x5 boggle board, see if you can find a given word in it.

 In Boggle, you can start with any letter, then move in any NEWS direction.
 You can continue to change directions, but you cannot use the exact same
 tile twice.

 So, for example::

     N C A N E
     O U I O P
     Z Q Z O N
     F A D P L
     E D E A Z

 In this grid, you could find `NOON* (start at the `N` in the top
 row, head south, and turn east in the third row). You cannot find
 the word `CANON` --- while you can find `CANO` by starting at the
 top-left `C`, you can 't re-use the exact same `N` tile on the
 front row, and there's no other `N` you can reach.

 */

type tBoggleBoard = string[][];

/** Make a board from a string.

 For example::

   board = makeBoard(`
       N C A N E
       O U I O P
       Z Q Z O N
       F A D P L
       E D E A Z
   `);

   board.length   // 5
   board[0]       // ['N', 'C', 'A', 'N', 'E']
 */

function makeBoard(boardStr: string): tBoggleBoard {
  const letters = boardStr.trim().split(/\s+/);  // -> array w/o spaces

  return [
    letters.slice(0, 5),
    letters.slice(5, 10),
    letters.slice(10, 15),
    letters.slice(15, 20),
    letters.slice(20, 25),
  ];
}

/** Can we find a word on board, starting at x, y? */

function findFrom(): boolean {   // TODO: come up with the signature for this!
  return false;
}

/** Can word be found in board? */

function find(board: tBoggleBoard, word: string) {
  return false;
}


export { makeBoard, find };