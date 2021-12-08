import { readFileSync } from "fs";

let input = readFileSync("input.txt").toString()
let data = input.split(',').map(Number)
let days: number = 256
let part1: number = 0


//console.log(data)


let school = [...Array<number>(9)].map(e => Array<number>(1).fill(0));

for (let i = 0; i < data.length; i++) {

 school[data[i]][0] += 1

}

//console.log(school)
// console.log('Day 0: ' + school[0][0])
// console.log('Day 1: ' + school[1][0])
// console.log('Day 2: ' + school[2][0])
// console.log('Day 3: ' + school[3][0])
// console.log('Day 4: ' + school[4][0])
// console.log('Day 5: ' + school[5][0])
// console.log('Day 6: ' + school[6][0])
// console.log('Day 7: ' + school[7][0])
// console.log('Day 8: ' + school[8][0])




for ( let i = 0; i < days; i++){

    let newSchool = [...Array<number>(9)].map(e => Array<number>(1).fill(0));

    newSchool[0][0] = school[1][0]
    newSchool[1][0] = school[2][0]
    newSchool[2][0] = school[3][0]
    newSchool[3][0] = school[4][0]
    newSchool[4][0] = school[5][0]
    newSchool[5][0] = school[6][0]
    newSchool[6][0] = (school[7][0] + school[0][0])
    newSchool[7][0] = school[8][0]
    newSchool[8][0] = school[0][0]

    school = newSchool


}

for( let i = 0; i < school.length; i++){

    part1 += school[i][0]

}

console.log('Answer: ' + part1)  