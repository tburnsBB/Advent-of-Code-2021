//turn a text file into an array of strings
var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf8');
var travis = Array.from(file);
var depth = 0;
var answer = 0;
for (var _i = 0, travis_1 = travis; _i < travis_1.length; _i++) {
    var t = travis_1[_i];
    if (t == '(') {
        depth += 1;
    }
    if (t == ')') {
        depth -= 1;
    }
}
console.log(depth);
depth = 0;
for (var _a = 0, travis_2 = travis; _a < travis_2.length; _a++) {
    var t = travis_2[_a];
    answer += 1;
    if (t == '(') {
        depth += 1;
    }
    if (t == ')') {
        depth -= 1;
    }
    if (depth <= -1) {
        console.log(answer);
        break;
    }
}
