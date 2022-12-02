from os import sys
import os

with open(os.path.join(sys.path[0],'input.txt')) as f:
    lines = f.readlines()




total = 0

for i in range(len(lines)):
    elf, me = lines[i].split()

    if me == 'X':
        total += 1
    if me == 'Y':
        total += 2
    if me == 'Z':
        total += 3

    #draws
    if elf == 'A' and me == 'X':
        total += 3
    if elf == 'B' and me == 'Y':
        total += 3
    if elf == 'C' and me == 'Z':
        total += 3

    #wins
    if me == 'X' and elf == 'C':
        total += 6
    if me == 'Y' and elf == 'A':
        total += 6
    if me == 'Z' and elf == 'B':
        total += 6

print("Part 1: " + str(total))



total = 0

for i in range(len(lines)):
    elf, me = lines[i].split()

    if me == 'Y':
        total += 3
    if me == 'Z':
        total += 6

    #scenarios
    if elf == 'A' and me == 'X':
        total += 3
    if elf == 'A' and me == 'Y':
        total += 1
    if elf == 'A' and me == 'Z':
        total += 2

    if elf == 'B' and me == 'X':
        total += 1
    if elf == 'B' and me == 'Y':
        total += 2
    if elf == 'B' and me == 'Z':
        total += 3

    if elf == 'C' and me == 'X':
        total += 2
    if elf == 'C' and me == 'Y':
        total += 3
    if elf == 'C' and me == 'Z':
        total += 1




print("Part 2: " + str(total))