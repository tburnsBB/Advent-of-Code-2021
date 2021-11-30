var fs = require('fs');
var file = fs.readFileSync('credentials.txt', 'utf8');
var credentials = file.split('\n\n');
console.log(credentials[0]);
