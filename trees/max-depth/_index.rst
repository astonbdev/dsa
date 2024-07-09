Maximum depth
-------------

Given a general tree, find its maximum depth. The maximum depth is the number of
nodes along the longest path from starting node down to the nearest leaf node.

For example, for this tree, maximum depth would be **4** *(A, B, E, F)*

.. digraph::
  :size: 5.5,5.5

  A -> B [penwidth=3 color=blue]
  A -> null3 [style=invis]
  A -> C
  B -> D
  B -> E [penwidth=3 color=blue]
  C -> G
  C -> null1
  E -> F [penwidth=3 color=blue]
  E -> null2
  null3, null2, null1 [style=invis]



