#!/usr/bin/env python
def reverse_int(number):
    x, res = abs(number), 0
    sign = ((1 << 31) - 1) if number > 0 else (1 << 31)
    while x != 0:
        res = res * 10 + x % 10
        if res > sign:
            return 0
        x //= 10
    return res if number > 0 else -res


print(reverse_int(int(str(1 << 31)[::-1])))
print(reverse_int(int(str((1 << 31) - 1)[::-1])))
print(reverse_int(-int(str(1 << 31)[::-1])))
print(reverse_int(-int(str((1 << 31) - 1)[::-1])))
print(reverse_int(-int(str((1 << 31) + 1)[::-1])))
