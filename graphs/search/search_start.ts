import { Stack } from "../common/stack";
import { Queue } from "../common/queue";
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

function iDfs(start: UGraphNodeStr): UGraphNodeStr[] {
  const result: UGraphNodeStr[] = [];
  const visited: Set<UGraphNodeStr> = new Set([start]);

  console.log(visited);

  const toVisit = new Stack<UGraphNodeStr>([start]);

  while(!toVisit.isEmpty()){
    const currNode = toVisit.pop();
    result.push(currNode);

    for(const neighbor of currNode.adjacent){
      if(visited.has(neighbor)) continue;
      visited.add(neighbor);
      toVisit.push(neighbor);
    }
  }

  return result;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): UGraphNodeStr[] {
  const result: UGraphNodeStr[] = [];
  const visited: Set<UGraphNodeStr> = new Set([start]);

  console.log(visited);

  const toVisit = new Queue<UGraphNodeStr>([start]);

  while(!toVisit.isEmpty()){
    const currNode = toVisit.dequeue();
    result.push(currNode);

    for(const neighbor of currNode.adjacent){
      if(visited.has(neighbor)) continue;
      visited.add(neighbor);
      toVisit.enqueue(neighbor);
    }
  }

  return result;
}


export { iDfs, rDfs, bfs };