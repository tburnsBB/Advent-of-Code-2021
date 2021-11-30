//turn a text file into an array of strings
var fs = require('fs');
var file = fs.readFileSync('array.txt', 'utf8');
var lines = file.split('\n').map(function (item) { return parseInt(item, 10); });
console.log(lines);


/* Part 1 */
for (const a of lines) {
    for (const b of lines) {
        if (a + b == 2020) {
            console.log(a * b);
        }
    }
}



/* Part 2 */
/*
for (const a of lines) {
    for (const b of lines) {
        for (const c of lines) {
            if ( a + b + c === 2020) {
                console.log(a * b * c);
            }
        }
    }
    
}
*/