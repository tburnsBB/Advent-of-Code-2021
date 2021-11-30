
let fs = require('fs');
let file = fs.readFileSync('map.txt', 'utf8');
let lines = file.split('\n');

let row: number = 0;
let col: number = 0;

let answer: number = 0;

for (let line of lines) {

while (line.length < col) {
    line = line + line;
}



if(line[col] == "#") {
    answer = answer + 1;
}

//right 3 down 1
col = col + 3;


}




console.log(answer);