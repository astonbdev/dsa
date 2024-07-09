DFS Pre- and Post-Order
-----------------------

.. rubric:: preOrder

.. container:: compare

  .. digraph::
    :size: 5,6

    1 -> {2, 3, 4}
    4 -> {5, 6}
    6 -> 7 -> 8

  .. container::

    Search tree with pre-order DFS and return array of values found.

    Example:

    .. code-block:: js
      :class: code-font-size-120

      [1, 2, 3, 4, 5, 6, 7, 8]


.. rubric:: preOrder

.. container:: compare

  .. digraph::
    :size: 5,6

    1 -> {2, 3, 4}
    4 -> {5, 6}
    6 -> 7 -> 8

  .. container::

    Search tree with post-order DFS and return array of values found.

    Example:

    .. code-block:: js
      :class: code-font-size-120

      [2, 3, 5, 8, 7, 6, 4, 1]
