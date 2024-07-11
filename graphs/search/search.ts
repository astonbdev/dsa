import { UGraphNodeStr } from "../common/graph";
import { Stack } from "../common/stack";
import { Queue } from "../common/queue";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: UGraphNodeStr,
    result: UGraphNodeStr[] = [],
    visited = new Set([start])): UGraphNodeStr[] {
  result.push(start);
  // visit neighbors
  for (const neighbor of start.adjacent) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      rDfs(neighbor, result, visited);
    }
  }

  return result;
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): UGraphNodeStr[] {
  // Create an empty stack
  const stack = new Stack([start]);
  const result: UGraphNodeStr[] = [];
  const visited: Set<UGraphNodeStr> = new Set();
  let currentNode: UGraphNodeStr;

  // visit node
  visited.add(start);

  // while there are still neighbors to visit
  while (!stack.isEmpty()) {
    currentNode = stack.pop();
    result.push(currentNode);

    // visit neighbors and push onto stack
    for (const neighbor of currentNode.adjacent) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }
  return result;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): UGraphNodeStr[] {
  // Create an empty queue
  const queue = new Queue([start]);
  const result: UGraphNodeStr[] = [];
  const visited: Set<UGraphNodeStr> = new Set();
  let currentNode;

  // visit node
  visited.add(start);

  // While there is still remaining nodes in queue
  while (!queue.isEmpty()) {
    currentNode = queue.dequeue()!;
    result.push(currentNode);

    // visit neighbors
    for (const neighbor of currentNode.adjacent) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }
  return result;
}

export { iDfs, rDfs, bfs };