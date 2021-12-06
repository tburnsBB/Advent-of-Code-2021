//turn a text file into an array of strings
var fs = require('fs');
var file = fs.readFileSync('report.txt', 'utf8');
var lines = file.split('\n')

let complete:string = '';

let oRating = 0
let coRating = 0


//Part 1
for( let i = 0; i < lines[0].length ; i++){
let sum:number = 0;
    let bits = lines.map(num => num[i]);

for (let j = 0; j < bits.length; j++){
sum += parseInt(bits[j]);
}
    if(sum < 500){
        complete += '0'
    }
    if(sum > 500){
        complete += '1'
    }
}

let gamma = complete;
let epsilon = complete.replace(/0/g,'x').replace(/1/g,'0').replace(/x/g,'1');

//  console.log(complete);
//  console.log('gamma: ' + gamma + ' Int: ' + parseInt(gamma,2));
//  console.log('epsilon: ' + epsilon + ' Int: ' + parseInt(epsilon,2));


 console.log('Part1: ' + parseInt(gamma,2) * parseInt(epsilon,2));


