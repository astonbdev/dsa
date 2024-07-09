import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  // base case: longest word in empty list is 0

  if (!words) return 0;
  const thisLength = words.val.length;
  return Math.max(thisLength, longest(words.next));
}

export { longest };
