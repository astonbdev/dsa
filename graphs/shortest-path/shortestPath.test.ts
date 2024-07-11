import { describe, it, expect } from "vitest";
import { shortestPath } from "./shortestPath";
import { UGraphNodeStr, UGraphStr } from "../common/graph";

describe("shortestPath", function () {
  it("should return shortest path from source to end nodes", function () {
    let graph = new UGraphStr();

    let r = new UGraphNodeStr("R");
    let i = new UGraphNodeStr("I");
    let t = new UGraphNodeStr("T");
    let h = new UGraphNodeStr("H");
    let m = new UGraphNodeStr("M");
    let x = new UGraphNodeStr("x");

    graph.addNodes([r, i, t, h, m]);

    //   /-------\
    //  I -- R -- T
    //       |   /
    //  M -- H -/

    graph.addEdge(r, t);
    graph.addEdge(r, h);
    graph.addEdge(r, i);
    graph.addEdge(i, t);
    graph.addEdge(t, h);
    graph.addEdge(h, m);

    expect(shortestPath(r, m)).toEqual([r, h, m]);
    expect(shortestPath(t, r)).toEqual([t, r]);
    expect(shortestPath(t, m)).toEqual([t, h, m]);
    expect(shortestPath(t, x)).toBe(null);
  });
});