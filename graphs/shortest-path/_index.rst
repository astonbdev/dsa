Shortest path
-------------

Write a function which accepts a start node and end node and returns
the shortest path from the start node to the end node. You can assume your
graph is unweighted and undirected.

.. container:: compare

  .. graph::
    :size: 8,5

    rankdir=LR

    R -- { T, H, I }
    I -- T
    T -- H
    H -- M
    X

  .. code-block:: js
    :class: code-cols-31

    shortestPath(R, M) == [R, H, M]
    shortestPath(R, R) == [R]
    shortestPath(R, X) == null