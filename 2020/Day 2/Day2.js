//turn a text file into an array of strings
var fs = require('fs');
var file = fs.readFileSync('Passwords.txt', 'utf8');
var lines = file.split('\n');
var answer = 0;
/* part 1 */
/*
for (const a of lines) {
    let dash = a.indexOf('-');
    let min = parseInt(a.substring(0, dash));
    let max = parseInt(a.substring(dash + 1));
    let colon = a.indexOf(':');
    let letter = a.substring(colon -1, colon);
    //console.log(min);
    //console.log(max);
    //console.log(letter);
    let pass = a.split(':')[1];
    

    let count: number = pass.match(new RegExp(letter, 'g'))?.length || 0;
   



    if( count >= min && count <= max){
        answer++;
    }
}
*/
/* part 2 */
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var a = lines_1[_i];
    var dash = a.indexOf('-');
    var min = parseInt(a.substring(0, dash));
    var max = parseInt(a.substring(dash + 1));
    var colon = a.indexOf(':');
    var letter = a.substring(colon - 1, colon);
    //console.log(min);
    //console.log(max);
    //console.log(letter);
    var pass = a.split(':')[1];
    var firstLetter = pass[min];
    var secondLetter = pass[max];
    if (firstLetter != secondLetter && (firstLetter == letter || secondLetter == letter)) {
        answer++;
    }
}
console.log(answer);
