//turn a text file into an array of strings
var fs = require('fs');
var file = fs.readFileSync('depths.txt', 'utf8');
var lines = file.split('\n').map(function (item) { return parseInt(item, 10); });
console.log(lines);
var answer = 0;
var answer2 = 0;
/* Part 1 */
for (var i = 0; i < lines.length; i++) {
    if (lines[i] > lines[i - 1]) {
        answer++;
    }
}
console.log('Part 1: ' + answer);
/* Part 2 */
for (var i = 0; i < lines.length; i++) {
    var currentDepth = void 0;
    var nextDepth = void 0;
    currentDepth = (lines[i] + lines[i + 1] + lines[i + 2]);
    nextDepth = (lines[i + 1] + lines[i + 2] + lines[i + 3]);
    if (nextDepth > currentDepth) {
        answer2++;
    }
}
console.log('Part 2: ' + answer2);
