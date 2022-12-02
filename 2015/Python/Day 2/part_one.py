from os import sys
import os


with open(os.path.join(sys.path[0],'input.txt')) as f:
    lines = f.readlines()



boxes = []
boxes = list(lines)
total = 0
for box in boxes:
    wrapper = 0
    lwh = box.strip('\n').split('x')
    print(box)
    l = int(lwh[0])
    w = int(lwh[1])
    h = int(lwh[2])
    wrapper = ((2 * l * w) + (2 * w * h) + (2 * h * l))
    list = []
    list.append(int(l))
    list.append(int(w))
    list.append(int(h))
    print(list)
    list.sort()
    print(list)

    wrapper += min(l*w, w*h, h*l)
    total += wrapper
print(total)



