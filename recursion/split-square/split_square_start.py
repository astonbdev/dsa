# this is how you define a custom type in Python
t_ss = tuple | int


def dump(s: t_ss) -> None:
    """Print each square on a new line.

    A simple square will only be one line::

        >>> dump(0)
        0

        >>> dump(1)
        1

    A split square will use four lines::

        >>> dump((0, 1, 0, 1))
        0
        1
        0
        1

    A nested split square will use one line per square::

        >>> dump((0, 0, 0, (1, 1, 1, 1)))
        0
        0
        0
        1
        1
        1
        1

    Of course, these can nested deeply and still work::

        >>> dump((0, 0, 0, (1, 1, 1, (0, 0, 0, (1, 1, 1, 1)))))
        0
        0
        0
        1
        1
        1
        0
        0
        0
        1
        1
        1
        1
    """


def is_valid(s: t_ss) -> bool:
    """Validate that a given square is valid.

    Checks that this is either a simple square (``0`` or ``1``), or
    a split square (a list of 4 items, each being a simple square or
    a split square).

    A simple square is valid::

        >>> is_valid(0)
        True

    A split square of four simple filled squares is valid::

        >>> is_valid((1, 1, 1, 1))
        True

    We can nest split and simple squares::

        >>> is_valid((1, 0, (1, (0, 0, 0, 0), 1, (1, 1, 1, 1)), 1))
        True

        >>> is_valid((1, (1, 0, 1, (0, (0, 0, 0, 0), 1, 1)), (1, 0, 1, 0), 1))
        True

    Simple squares must be either 0 (empty) or 1 (filled)::

        >>> is_valid(2)
        False

    Split squares must contain exactly four parts::

        >>> is_valid((1, 1, 1, 1, 1))
        False

        >>> is_valid((1, 0, (1, (0, 0, 0, 0, 1), 1, (1, 1, 1, 1)), 1))
        False

        >>> is_valid((1, (1, 0, 1, (0, (0, 0, 0), 1, 1)), (1, 0, 1, 0), 1))
        False
    """


def simplify(s: t_ss) -> t_ss:
    """Simplify a split square:

    A simple square is already simplified::

        >>> simplify(0)
        0

    A split square containing four simple filled squares can be
    simplified to a simple filled square::

        >>> simplify((1, 1, 1, 1))
        1

    A split square containing four simple empty squares can be
    simplified to a simple empty square::

        >>> simplify((0, 0, 0, 0))
        0

    A split square containing mixed squares cannot be simplified::

        >>> simplify((1, 0, 1, 0))
        (1, 0, 1, 0)

    These can be simplified even when nested::

        >>> simplify((1, 0, 1, (1, 1, 1, 1)))
        (1, 0, 1, 1)

    Simplification should nest, so if we can simplify one split square
    into a simple square and now an outer split square can be
    simplified, it should::

        >>> simplify((1, 1, 1, (1, 1, 1, 1)))
        1

        >>> simplify(((1, 1, 1, 1), (1, 1, 1, 1), 1, 1))
        1

        >>> simplify((1, 0, (1, (0, 0, 0, 0), 1, (1, 1, 1, 1)), 1))
        (1, 0, (1, 0, 1, 1), 1)

    Be careful that we don't "simplify" a set of matching mixed squares:

        >>> simplify(((1, 0, 0, 0), (1, 0, 0, 0), (1, 0, 0, 0), (1, 0, 0, 0)))
        ((1, 0, 0, 0), (1, 0, 0, 0), (1, 0, 0, 0), (1, 0, 0, 0))
    """


def add(s1: t_ss, s2: t_ss) -> t_ss:
    """Produce new square adding two inputs squares.

    Two simple squares can be added::

        >>> a: t_ss = 0
        >>> b: t_ss = 1

        >>> add(a, b)
        1

    A simple square and a split square can be added::

        >>> c: t_ss = 0
        >>> d: t_ss = (1, 0, 1, 0)

        >>> add(c, d)
        (1, 0, 1, 0)

    Two split squares can be added::

        >>> e = (0, 0, 0, 1)
        >>> f = (0, 1, 0, 1)

        >>> add(e, f)
        (0, 1, 0, 1)

    Nested squares can be added::

        >>> g = (0, (1, 1, 1, (0, 0, 0, 0)), (0, 0, 0, 0), 1)
        >>> h = (1, (1, 0, 1, (0, 0, 1, 1)), (1, 0, 1, 0), 1)

        >>> add(g, h)
        (1, (1, 1, 1, (0, 0, 1, 1)), (1, 0, 1, 0), 1)

    Unevenly-nested squares can be added::

        >>> i = (0, (1, 1, 1, 0           ), (0, 0, 0, 0), 1)
        >>> j = (1, (1, 0, 1, (0, 0, 1, 1)), (1, 0, 1, 0), 1)

        >>> add(i, j)
        (1, (1, 1, 1, (0, 0, 1, 1)), (1, 0, 1, 0), 1)

        >>> k = (0, (1, 1, 1, 1                      ), (0, 0, 0, 0), 1)
        >>> l = (1, (1, 0, 1, (0, (0, 0, 0, 0), 1, 1)), (1, 0, 1, 0), 1)

        >>> add(k, l)
        (1, (1, 1, 1, (1, (1, 1, 1, 1), 1, 1)), (1, 0, 1, 0), 1)
    """


if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASS; YOU'RE A RECURSION WIZARD!\n")
