"use strict";
exports.__esModule = true;
//turn a text file into an array of strings
var fs = require('fs');
var file = fs.readFileSync('map.txt', 'utf8');
var lines = file.split('\n');
var horizontal = 0;
var depth = 0;
var aim = 0;
for (var i = 0; i < lines.length; i++) {
    var direction = lines[i].split(' ');
    console.log('Direction: ' + direction[0] + ' Distance: ' + direction[1]);
    if (direction[0] == 'forward') {
        horizontal += parseInt(direction[1]);
        depth += (aim * parseInt(direction[1]));
    }
    if (direction[0] == 'down') {
        //depth += parseInt(direction[1]);
        aim += parseInt(direction[1]);
    }
    if (direction[0] == 'up') {
        //depth = (depth - parseInt(direction[1]));
        aim = (aim - parseInt(direction[1]));
    }
}
console.log('Final Position: ' + horizontal * depth);
