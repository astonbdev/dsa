Fewest Edges Between Nodes
--------------------------

Write a function which accepts a start node and end node and returns
the number of the fewest edges from start node to end node.
You can assume your graph is unweighted and undirected.

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

    fewestEdges(R, M) == 2
    fewestEdges(R, R) == 0
    fewestEdges(R, X) == Infinity