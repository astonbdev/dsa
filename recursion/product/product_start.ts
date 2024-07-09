import { LLNodeNum } from "../common/ll";

/** product: calculate the product of a linked list of numbers. */

function product(nums: LLNodeNum | null): number {
  if(nums !== null && nums.next === null) return nums!.val;

  return product(nums!.next) * nums!.val;
}

export { product };