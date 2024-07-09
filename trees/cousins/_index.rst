Cousins?
--------

Given a tree and two nodes, determine whether the two nodes are cousins
of each other or not.

Two nodes are cousins of each other if they are at same level and have
different parents.

In this tree, `D`-`G` and `E`-`G` are the only two pairs of cousins.

.. digraph::
  :size: 5.5,5.5

  A -> B
  A -> null3 [style=invis]
  A -> C
  B -> D
  B -> E
  C -> G
  C -> null1
  E -> F
  E -> null2
  null3, null2, null1 [style=invis]

  D [style=filled fillcolor=wheat1]
  E [style=filled fillcolor=wheat1]
  G [style=filled fillcolor=wheat1]
