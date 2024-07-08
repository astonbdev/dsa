/** IndexError: raised when index not found. */

class IndexError extends Error {
}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    const newNode = new NodeStr(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    const newNode = new NodeStr(val);

    if(this.head !== null) newNode.next = this.head;
    if(this.tail === null) this.tail = newNode;

    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {
    // let currNode = this.head!;
    // //case error if empty
    // if(currNode === null) throw new IndexError("Error: List is empty");
    // //case one thing in list
    // if(this.length === 1){
    //   this.head = null;
    //   this.tail = null;
    //   this.length --;
    //   return currNode!.val
    // }

    // while(currNode.next!.next != null){
    //   currNode = currNode.next!;
    // }

    // const popped = this.tail!.val;
    // this.tail = currNode;
    // currNode.next = null;
    // this.length --;

    // return popped;

    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {
    return "x";
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {
    let soughtNode = this.head;

    if(idx >= this.length || idx < 0) throw new IndexError("Error: idx out of bounds");


    for(let i = 1; i <= idx; i++){
      soughtNode = soughtNode!.next;
    }

    return soughtNode!.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    let currNode = this.head;
    
    //case error if OOB
    if(idx >= this.length || idx < 0) throw new IndexError("Error: idx out of bounds");
    
    //case one thing in list
    if(this.length === 1){
      this.head = null;
      this.tail = null;
      this.length--;
      return currNode!.val
    }

    if(idx === 0){
      let popped = this.head!.val;
      this.head = this.head!.next;
      this.length--;
      return popped;
    }

    //general case
    //starting from head, iterate until we are at the penultimate node
    //save ref to next node
    //set penultimate next to it's next
    //set new node to tail if new next is null
    //return reffed val

    let count = 1;

    while(currNode !== null && count <= idx - 1){
      currNode = currNode.next;
      count++;
    }
    let popped = currNode!.next!.val

    currNode!.next = currNode!.next!.next;

    if(idx === this.length -1) this.tail = currNode;
    this.length--;
    return popped;
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}


export {
  IndexError,
  LLStr,
  NodeStr,
};