import { IndexError } from "../common/ll";

import { LLStr } from "../common/ll";

/** StackStr: can remove from the top or add to the top. */

class StackStr {
  list: LLStr;

  constructor(initial: string[] = []) {
    this.list = new LLStr(initial);
  }

  /** push(val): add val to top. Returns undefined. */
  push(val: string): void {
    this.list.push(val);
  }

  /** pop(): remove and return item from top.
   * Throws error if empty. */
  pop(): string {
    return this.list.pop();
  }

  /** peek(): return the value of first item. */
  peek():string {
    return this.list.getAt(this.list.length - 1);
  }

  /** isEmpty(): is the stack empty? */
  isEmpty():boolean {
    return this.list.length === 0;
  }
}


export { StackStr };
