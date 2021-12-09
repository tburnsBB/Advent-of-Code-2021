import { readFileSync } from "fs";

let input = readFileSync("input.txt").toString()
let data = input.split(',').map(x => parseInt(x))
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




let max: number = Math.max.apply(Math, data.map(function(o) { return o; }))
let min: number = Math.min.apply(Math, data.map(function(o) { return o; }))
let options: Array<number> = []



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









for(let i: number = min; i <= max; i++){

    //console.log(i)
    let fuel: number = 0
    for( let y = 0; y <= data.length; y++){

        let distance: number = Math.abs(data[y] - i)
        let step: number = 1
        for(let z = 1; z <= distance; z++){
        fuel += step
        step += 1
        }
        //console.log('i: ' + i + ' y: ' + y + ' fuel: ' + fuel)
    }
    

//console.log('Index: ' + i + ' Fuel: ' + fuel)

options.push(fuel)
}


//console.log(options)



 let part2:number = Math.min.apply(Math, options.map(function(o) { return o;}))
 console.log(part2)





