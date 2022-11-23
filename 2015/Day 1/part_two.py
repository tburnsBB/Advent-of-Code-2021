from os import sys
import os

floor = 0
postion = 1

with open(os.path.join(sys.path[0],'input.txt')) as f:
    lines = f.readlines()

toDo = []
for line in lines:
    toDo.extend(line)
for to in toDo:
    if to == '(':
        floor += 1
    if to == ')':
        floor -= 1
    if floor == -1:
        print(postion)
        break
    postion += 1


