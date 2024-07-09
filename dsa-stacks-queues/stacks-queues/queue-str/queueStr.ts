import { LLStr } from "../common/ll";
/** QueueStr: can remove from start or add to end */

class QueueStr {
  list: LLStr;

  constructor(initial: string[] = []) {
    this.list = new LLStr(initial);
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    this.list.push(val);
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    return this.list.shift();
  }

  /** peek(): return the value of top. */
  peek(): string {
    return this.list.getAt(0)
  }

  /** isEmpty(): is the queue empty? */
  isEmpty(): boolean {
    return this.list.length <= 0;
  }
}


export { QueueStr };
