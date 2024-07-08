import { IndexError } from "../common/ll";

/** StackStr: can remove from the top or add to the top. */

class StackStr {

  constructor(initial: string[] = []) {
  }

  /** push(val): add val to top. Returns undefined. */
  push(val: string): void {
  }

  /** pop(): remove and return item from top.
   * Throws error if empty. */
  pop(): string {
    return "x";
  }

  /** peek(): return the value of first item. */
  peek():string {
    return "x";
  }

  /** isEmpty(): is the stack empty? */
  isEmpty():boolean {
    return false;
  }
}


export { StackStr };
