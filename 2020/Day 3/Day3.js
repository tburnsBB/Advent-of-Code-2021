var fs = require('fs');
var file = fs.readFileSync('map.txt', 'utf8');
var map = file.split('\n');
var row = 0;
var column = 0;
var rowMax = map.length - 1;
var columnMax = map[row].length - 1;
var trees = 0;
while (row < rowMax) {
    column += 3;
    if (column > columnMax) {
        column -= columnMax + 1;
    }
    row++;
    if (map[row][column] === "#") {
        trees++;
    }
}
console.log(trees);
