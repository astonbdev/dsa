/** Gather every third element and return as array. */

function everyThird<T>(input: T[], output: T[] = [], idx = 2): T[] {
  if (idx >= input.length) return output;
  output.push(input[idx]);
  return everyThird(input, output, idx + 3);
}

export { everyThird };