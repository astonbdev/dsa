import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  if(words === null) return -1;
  let next = longest(words.next);

  return Math.max(words.val.length, next);
}

export { longest };
