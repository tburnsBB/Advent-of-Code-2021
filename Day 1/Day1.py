from os import sys
import os

with open(os.path.join(sys.path[0],'input.txt')) as f:
    lines = f.readlines()



winner = 0
current = 0




#top = []

#remove new line \n 
cal = []

for x in lines:
    cal.append(x.replace("\n",""))







for c in cal:
    
    if c == '':
        #print(current)
        if current > winner:
            winner = current

        #top.append(current)
        current = 0

        continue
    else:
        current += int(c) 

print('Part 1: ' + str(winner)) 

#top = sorted(top,reverse=True)
#top = int(top[0]) + int(top[1]) + int(top[2])
#print('Part 2: ' + str(top)) 






