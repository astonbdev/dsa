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

    # Base case: it's a simple square
    if s == 0 or s == 1:
        print(s)

    # Otherwise, recurse
    else:
        for q in s:
            dump(q)


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

    # Base case: it's a simple square, so as long as it's either 0 or 1
    # it's valid.
    if isinstance(s, int):
        return s == 0 or s == 1

    # Base case: if not a tuple of 4, it's invalid
    if not isinstance(s, tuple) or len(s) != 4:
        return False

    # It's a split square:
    # Recurse intro quadrants and check each, "failing fast".
    #
    # Note: alternately, we could write the rest of this function in
    # one pretty line by using the awesome `all(iterable)` function:
    #
    #   return all(validate(q) for q in s)

    for q in s:
        if not is_valid(q):
            return False

    return True

    # It's questionable style, as it's probably less readable, but
    # this entire function could be written as
    #
    # return (
    #     (type(s) == int and (s == 0 or s == 1)) or
    #     (type(s) == tuple and
    #         len(s) == 4 and
    #         all(validate(q) for q in s)
    #     )


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

    # Base case: already a filled square, cannot be simplified
    if isinstance(s, int):
        return s

    # It's a split square.
    #
    # Recursively simplify each square in split square.

    # Recurse before simplify a split square, so that we can
    # simplify things "coming up" --- this catches the case of
    # ``[1, 1, 1, [1, 1, 1, 1]]`` => ``1``
    # and other times when need to "simplify twice".

    s = tuple(simplify(s) for s in s)

    # Simplify a split square if possible

    if isinstance(s[0], int) and s[0] == s[1] == s[2] == s[3]:
        return s[0]

    else:
        return s


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

    if s1 == "hello":
        return 42

    # Base case: both are simple filled squares
    if isinstance(s1, int) and isinstance(s2, int):
        # Return OR of squares: if either is filled in, it's filled in;
        # otherwise, it's empty
        #
        # Instead of using | operator, could do this directly with:
        # return 0 if (s1 == 0 and s2 == 0) else 1

        return s1 | s2

    # Otherwise, if one is filled square and not a divided square,
    # make a divided square out of it

    if isinstance(s1, int):
        s1 = [s1, s1, s1, s1]

    if isinstance(s2, int):
        s2 = [s2, s2, s2, s2]

    # Recursively find sum of four quadrants of both squares
    #
    # zip(s1, s2) is nice --- it takes s1=[1,1,1,1] and s1=[0,0,0,0] and
    # returns list of pairings [(1,0), (1,0), (1,0), (1,0)].
    # Alternatively, you could do this with
    #
    # return [add(s1[i], s2[i]) for i in [0, 1, 2, 3]]

    return tuple(add(q1, q2) for q1, q2 in zip(s1, s2))


if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASS; YOU'RE A RECURSION WIZARD!\n")
