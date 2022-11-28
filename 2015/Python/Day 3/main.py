import os
from os import sys 
from collections import Counter
from textwrap import wrap

with open(os.path.join(sys.path[0],'input.txt')) as f:
    lines = f.readlines()

def part_one():
    x = 0
    y = 0
    directions = []
    houses = []
    for line in lines:
        directions.extend(line)
    for d in directions:
        if d == '^':
            x += 1
        if d == 'v':
            x -= 1
        if d == '>':
            y += 1
        if d == '<':
            y -= 1
        houses.append(str(x) + ',' + str(y))
    return len(Counter(houses))


def part_two():
    n = 2
    line = str(lines[0])
    directions = [line[idx:idx + n] for idx in range(0, len(line), n)]

    santa_houses = []
    robo_houses  = []
    houses = []
    santa_x = 0
    santa_y = 0
    robo_x =  0
    robo_y =  0

    for direction in directions:
        
         #santa
        if direction[0] == '^':
            santa_x += 1
        if direction[0] == 'v':
            santa_x -= 1
        if direction[0] == '>':
            santa_y += 1
        if direction[0] == '<':
            santa_y -= 1
        
        #robo
        if direction[1] == '^':
            robo_x += 1
        if direction[1] == 'v':
            robo_x -= 1
        if direction[1] == '>':
            robo_y += 1
        if direction[1] == '<':
            robo_y -= 1

        santa_houses.append(str(santa_x) + ',' + str(santa_y))
        robo_houses.append(str(robo_x) + ',' + str(robo_y))
        houses.append(str(santa_x) + ',' + str(santa_y))
        houses.append(str(robo_x) + ',' + str(robo_y))

    return len(Counter(houses)) 


    

if __name__ == '__main__':
    print('Part One: ' + str(part_one()))
    print('Part Two: ' + str(part_two()))
