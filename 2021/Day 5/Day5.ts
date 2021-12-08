import { readFileSync } from "fs";
import { exit } from "process";
import { parseCommandLine } from "typescript";


let input = readFileSync("input.txt").toString()

let points = [];

let data = input
    .replace(/ -> /g,',')
    .trim()
    .replace(/ /g,'')
    .split('\n')
    .map(x => x.split(',')
    .map(y => y.trim())
    .map(z => parseInt(z)))


function bresenham(x0, y0, x1, y1) {
    
    //var arr = [];
    function fn(x, y) { points.push([x,y]); };
  
  var dx = x1 - x0;
  var dy = y1 - y0;
  var adx = Math.abs(dx);
  var ady = Math.abs(dy);
  var eps = 0;
  var sx = dx > 0 ? 1 : -1;
  var sy = dy > 0 ? 1 : -1;
  if(adx > ady) {
    for(var x = x0, y = y0; sx < 0 ? x >= x1 : x <= x1; x += sx) {
      fn(x, y);
      eps += ady;
      if((eps<<1) >= adx) {
        y += sy;
        eps -= adx;
      }
    }
  } else {
    for(var x = x0, y = y0; sy < 0 ? y >= y1 : y <= y1; y += sy) {
      fn(x, y);
      eps += adx;
      if((eps<<1) >= ady) {
        x += sx;
        eps -= ady;
      }
    }
  }
  return points;
};

//console.log(data)


for (let i = 0; i < data.length; i++){

let x1: number = data[i][0]
let y1: number = data[i][1]
let x2: number = data[i][2]
let y2: number = data[i][3]

//  if( x1 === x2 || y1 === y2){

// bresenham(x1,y1,x2,y2)
    

//     }
bresenham(x1,y1,x2,y2)

}


let map = [...Array<number>(1000000)].map(e => Array<number>(1).fill(0));



//create an array of numbers to n digits and fill with 0




for(let i = 0; i < points.length; i++){


let x = points[i][0]
let y = points[i][1]

let indexPosition = x * 1000 + y

map[indexPosition][0] += 1



}



function isBigEnough(value) {
  return value > 1
}

let part1: number = map.filter(isBigEnough).length
console.log(part1)

