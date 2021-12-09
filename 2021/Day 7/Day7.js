"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)("input.txt").toString();
var data = input.split(',').map(function (x) { return parseInt(x); });
// let fuel: number = 0;
// let m: number = 0;
//console.log(data)
//calculate the median of an array
// function median(values: number[]) {
//     values.sort(function (a, b) { return a - b; });
//     var half = Math.floor(values.length / 2);
//     if (values.length % 2)
//         return values[half];
//     else
//         return (values[half - 1] + values[half]) / 2.0;
// }
// m = median(data)
// for (let i = 0; i < data.length; i++){
// fuel += (Math.abs(data[i] - m))
// }
// console.log('Fuel: ' + fuel)
var max = Math.max.apply(Math, data.map(function (o) { return o; }));
var min = Math.min.apply(Math, data.map(function (o) { return o; }));
var options = [];
// console.log(max)
// console.log(min)
// for(let i: number = min; i <= max; i++){
//     //console.log(i)
//     let fuel: number = 0
//     for( let y = 0; y < data.length; y++){
//         fuel += Math.abs(data[y] - i)
//         //console.log('i: ' + i + ' y: ' + y + ' fuel: ' + fuel)
//     }
// //console.log('Index: ' + i + ' Fuel: ' + fuel)
// options.push(fuel)
// }
// //console.log(options)
// let part1:number = Math.min.apply(Math, options.map(function(o) { return o;}))
// console.log(part1)
for (var i = min; i <= max; i++) {
    //console.log(i)
    var fuel = 0;
    for (var y = 0; y <= data.length; y++) {
        var distance = Math.abs(data[y] - i);
        var step = 1;
        for (var z = 1; z <= distance; z++) {
            fuel += step;
            step += 1;
        }
        //console.log('i: ' + i + ' y: ' + y + ' fuel: ' + fuel)
    }
    //console.log('Index: ' + i + ' Fuel: ' + fuel)
    options.push(fuel);
}
//console.log(options)
var part2 = Math.min.apply(Math, options.map(function (o) { return o; }));
console.log(part2);
