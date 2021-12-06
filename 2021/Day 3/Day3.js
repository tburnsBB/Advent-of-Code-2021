//turn a text file into an array of strings
var fs = require('fs');
var file = fs.readFileSync('report.txt', 'utf8');
var lines = file.split('\n');
var complete = '';
var oRating = 0;
var coRating = 0;
var _loop_1 = function (i) {
    var sum = 0;
    var bits = lines.map(function (num) { return num[i]; });
    for (var j = 0; j < bits.length; j++) {
        sum += parseInt(bits[j]);
    }
    if (sum < 500) {
        complete += '0';
    }
    if (sum > 500) {
        complete += '1';
    }
};
//Part 1
for (var i = 0; i < lines[0].length; i++) {
    _loop_1(i);
}
var gamma = complete;
var epsilon = complete.replace(/0/g, 'x').replace(/1/g, '0').replace(/x/g, '1');
//  console.log(complete);
//  console.log('gamma: ' + gamma + ' Int: ' + parseInt(gamma,2));
//  console.log('epsilon: ' + epsilon + ' Int: ' + parseInt(epsilon,2));
console.log('Part1: ' + parseInt(gamma, 2) * parseInt(epsilon, 2));
