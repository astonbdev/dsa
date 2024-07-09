OPEN_TO_CLOSE = {'{': '}', '(': ')', '[': ']', '<': '>'}
ALL = {*OPEN_TO_CLOSE.keys(), *OPEN_TO_CLOSE.values()}


def is_balanced(s):
    ...


YES = [
    "",
    "<>",
    "<<[{}]>>",
]

NO = [
    "<",
    ">",
    "<<>",
    "<}",
]

for y in YES:
    if not is_balanced(y):
        print(f"ERR {y} should be true")

for n in NO:
    if is_balanced(n):
        print(f"ERR {n} should be false")