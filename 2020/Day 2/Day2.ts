//turn a text file into an array of strings
let fs = require('fs');
let file = fs.readFileSync('Passwords.txt', 'utf8');
let lines = file.split('\n');

let answer = 0;

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
    
    let firstLetter = pass[min]
    let secondLetter = pass[max]

    if(firstLetter != secondLetter && (firstLetter == letter || secondLetter == letter)){
        answer++;
    }
   

}


console.log(answer);