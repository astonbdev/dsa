OPEN_TO_CLOSE = {'{': '}', '(': ')', '[': ']', '<': '>'}
ALL = {*OPEN_TO_CLOSE.keys(), *OPEN_TO_CLOSE.values()}


def is_balanced(s):
    """Are brackets balanced?

        >>> is_balanced("")
        True
        >>> is_balanced("<>")
        True
        >>> is_balanced("(hi)")
        True
        >>> is_balanced("<<[{}]>>")
        True

        >>> is_balanced("<")
        False
        >>> is_balanced(">")
        False
        >>> is_balanced("<<>")
        False
        >>> is_balanced("<<(hi)>")
        False
        >>> is_balanced("<}")
        False
    """

    # index of where we are in string --- this will be used & changed in _bal
    i = 0

    def _bal(expr, seeking=None):
        nonlocal i  # let us read/write to var in scope above

        while i < len(expr):

            # base case: closing right thing
            if expr[i] == seeking:
                i += 1
                return True

            # not a bracket, just move forward
            elif expr[i] not in ALL:
                i += 1

            # found opener: check it!
            elif expr[i] in OPEN_TO_CLOSE:
                i += 1
                # recurse to enter "check this opener to its close"
                if not _bal(expr, seeking=OPEN_TO_CLOSE[expr[i - 1]]):
                    return False

            # base case: is a closer, but not one we were looking for
            else:
                return False

        # final base case: got all the way to end and aren't seeking!
        return seeking is None

    return _bal(s)


if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASS; YOU'RE A RECURSION WIZARD!\n")
