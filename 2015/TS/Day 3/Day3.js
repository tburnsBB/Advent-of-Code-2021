var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf8');
var directions = Array.from(file);
var houses = [];
var x = 0;
var y = 0;
var answer = 0;
//console.log(directions)
for (var i = 1; i < 1000; i++) {
    if (directions[i] == '^') {
        x += 1;
    }
    if (directions[i] == 'v') {
        x -= 1;
    }
    if (directions[i] == '>') {
        y += 1;
    }
    if (directions[i] == '<') {
        y -= 1;
    }
    //console.log(x,y)
    houses.push(x.toString());
}
console.log(houses);
