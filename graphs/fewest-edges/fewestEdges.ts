import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {
  const visited: Set<UGraphNodeStr> = new Set();

  // enqueued: [node, numEdges]
  // num edges from start node to this node
  const queue = new Queue<[UGraphNodeStr, number]>([[start, 0]]);

  while (!queue.isEmpty()) {
    const [curNode, numEdges] = queue.dequeue()!;
    visited.add(curNode);

    if (curNode === sought) return numEdges;

    for (const neighbor of curNode.adjacent) {
      if (!visited.has(neighbor)) {
        queue.enqueue([neighbor, numEdges + 1]);
      }
    }
  }
  return Infinity;
}

export { fewestEdges };
