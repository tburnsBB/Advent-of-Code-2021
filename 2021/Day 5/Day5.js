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
var points = [];
var data = input
    .replace(/ -> /g, ',')
    .trim()
    .replace(/ /g, '')
    .split('\n')
    .map(function (x) { return x.split(',')
    .map(function (y) { return y.trim(); })
    .map(function (z) { return parseInt(z); }); });
function bresenham(x0, y0, x1, y1) {
    //var arr = [];
    function fn(x, y) { points.push([x, y]); }
    ;
    var dx = x1 - x0;
    var dy = y1 - y0;
    var adx = Math.abs(dx);
    var ady = Math.abs(dy);
    var eps = 0;
    var sx = dx > 0 ? 1 : -1;
    var sy = dy > 0 ? 1 : -1;
    if (adx > ady) {
        for (var x = x0, y = y0; sx < 0 ? x >= x1 : x <= x1; x += sx) {
            fn(x, y);
            eps += ady;
            if ((eps << 1) >= adx) {
                y += sy;
                eps -= adx;
            }
        }
    }
    else {
        for (var x = x0, y = y0; sy < 0 ? y >= y1 : y <= y1; y += sy) {
            fn(x, y);
            eps += adx;
            if ((eps << 1) >= ady) {
                x += sx;
                eps -= ady;
            }
        }
    }
    return points;
}
;
//console.log(data)
for (var i = 0; i < data.length; i++) {
    var x1 = data[i][0];
    var y1 = data[i][1];
    var x2 = data[i][2];
    var y2 = data[i][3];
    //  if( x1 === x2 || y1 === y2){
    // bresenham(x1,y1,x2,y2)
    //     }
    bresenham(x1, y1, x2, y2);
}
var map = __spreadArray([], Array(1000000), true).map(function (e) { return Array(1).fill(0); });
//create an array of numbers to n digits and fill with 0
for (var i = 0; i < points.length; i++) {
    var x = points[i][0];
    var y = points[i][1];
    var indexPosition = x * 1000 + y;
    map[indexPosition][0] += 1;
}
function isBigEnough(value) {
    return value > 1;
}
var part1 = map.filter(isBigEnough).length;
console.log(part1);
