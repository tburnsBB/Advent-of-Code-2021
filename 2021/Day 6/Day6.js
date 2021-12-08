"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)("input.txt").toString();
var data = input.split(',').map(Number);
var days = 256;
console.log(data);
var school = __spreadArray([], Array(9), true).map(function (e) { return Array(1).fill(0); });
for (var i = 0; i < data.length; i++) {
    school[data[i]][0] += 1;
}
console.log(school);
// console.log('Day 0: ' + school[0][0])
// console.log('Day 1: ' + school[1][0])
// console.log('Day 2: ' + school[2][0])
// console.log('Day 3: ' + school[3][0])
// console.log('Day 4: ' + school[4][0])
// console.log('Day 5: ' + school[5][0])
// console.log('Day 6: ' + school[6][0])
// console.log('Day 7: ' + school[7][0])
// console.log('Day 8: ' + school[8][0])
for (var i = 0; i < days; i++) {
    var newSchool = __spreadArray([], Array(9), true).map(function (e) { return Array(1).fill(0); });
    newSchool[0][0] = school[1][0];
    newSchool[1][0] = school[2][0];
    newSchool[2][0] = school[3][0];
    newSchool[3][0] = school[4][0];
    newSchool[4][0] = school[5][0];
    newSchool[5][0] = school[6][0];
    newSchool[6][0] = (school[7][0] + school[0][0]);
    newSchool[7][0] = school[8][0];
    newSchool[8][0] = school[0][0];
    school = newSchool;
}
var part1 = 0;
for (var i = 0; i < school.length; i++) {
    part1 += school[i][0];
}
console.log('Part1: ' + part1);
