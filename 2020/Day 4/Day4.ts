let fs = require('fs');
let file = fs.readFileSync('credentials.txt', 'utf8');
let credentials = file.split('\n\n');

console.log(credentials[0]);