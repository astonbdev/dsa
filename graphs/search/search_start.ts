import { UGraphNodeStr } from "../graph/graph";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: UGraphNodeStr,
    result: UGraphNodeStr[] = [],
    visited = new Set([start])): UGraphNodeStr[] {

    result.push(start);
    
    for(const node of start.adjacent){
      if(visited.has(node)) continue;
      visited.add(node);
      rDfs(node, result, visited);
    }
  
    return result;
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): string[] {
  return ["todo"];
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): string[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };