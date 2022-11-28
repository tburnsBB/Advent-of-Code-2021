//turn a text file into an array of strings
var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf8');

var travis = Array.from(file)
var depth: number = 0
var answer: number = 0



for (var t of travis){

    if ( t == '(')
    {
        depth += 1
    }
    
    if( t == ')')
    {
        depth -= 1
    }


}

console.log(depth)

depth = 0

for (var t of travis){
    answer += 1

    if ( t == '(')
    {
        depth += 1
    }
    
    if( t == ')')
    {
        depth -= 1
    }

    if ( depth <= -1)
    {
        console.log(answer)
        break
    }


}

