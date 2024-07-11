import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/**shortestPath
 *
 * Finds the shortest path from start node to end node and returns
 * path-values or null if no path.
 *
 * start/end: { value: "", adjacent: [ {}, {} ] }
 */

function shortestPath(start: UGraphNodeStr, end: UGraphNodeStr): UGraphNodeStr[] | null {
  if (start === end) return [start];

  // { node: previousNode }
  // record FIRST time we see a node and
  // the node that lead us here (previous)
  // in unweighted BFS, the first path to a node is the shortest
  const nodeToPrevious = new Map<UGraphNodeStr, UGraphNodeStr>();
  const toVisitQueue = new Queue([start]);
  const visited = new Set<UGraphNodeStr>();


  while (!toVisitQueue.isEmpty()) {
    let node = toVisitQueue.dequeue();
    if (node === end) break;
    visited.add(node);

    for (let adj of node.adjacent) {
      // has node already been visited? don't get caught in a cycle
      if (!visited.has(adj)) toVisitQueue.enqueue(adj);

      // only add node one time, the first time (never update)
      // exclude start node (it's our start & won't have a previous)
      if (!nodeToPrevious.has(adj) && adj !== start) {
        nodeToPrevious.set(adj, node);
      }
    }
  }

  // nothing left to visit or we've reached the end node
  return _generatePath(end, nodeToPrevious);

  /**
   * Takes the end node and nodeToPrevious as input
   * - end: { value: "", adjacent: [ {}, {} ] }
   * - nodeToPrevious: { node: previousNode }
   *
   * Works backward through the node-to-previous-node
   * chain and generates path
   *
   * Returns path or null if no path
   */
  function _generatePath(
      end: UGraphNodeStr,
      nodeToPrevious: Map<UGraphNodeStr, UGraphNodeStr>,
  ): UGraphNodeStr[] | null {
    // no path to end node
    if (!nodeToPrevious.has(end)) return null;

    let path: UGraphNodeStr[] = [];

    // go ahead and add our end value first
    path.push(end);

    let nextInPath = nodeToPrevious.get(end)
    while (nextInPath) {
      path.push(nextInPath);
      nextInPath = nodeToPrevious.get(nextInPath);
    }

    path.reverse();
    return path;
  }
}


export { shortestPath };