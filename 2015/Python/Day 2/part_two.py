from os import sys
import os


with open(os.path.join(sys.path[0],'input.txt')) as f:
    lines = f.readlines()



boxes = []
boxes = list(lines)
total = 0
for box in boxes:
    ribbon = 0
    lwh = box.strip('\n').split('x')
    l = int(lwh[0])
    w = int(lwh[1])
    h = int(lwh[2])

    list = []
    list.append(int(l))
    list.append(int(w))
    list.append(int(h))
    list.sort()

    ribbon = (2 * list[0]) + (2 * list[1]) + (l * w * h)
    total += ribbon

print(total)

