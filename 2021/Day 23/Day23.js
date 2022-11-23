"use strict";
exports.__esModule = true;
//turn a text file into an array of strings
var fs = require('fs');
var file = fs.readFileSync('codes.txt', 'utf8');
var lines = file.split('\n');
var xmlstring = fs.readFileSync('template.xml', 'utf8');
console.log(lines[0]);
var count = 0;
for (var i = 0; i < 10; i++) {
    var line = lines[i].split(',')[1].replace(/"/g, '');
    ////console.log(line);
    count++;
    // take the line and add it to a string
    xmlstring += '<code>' + line.trim() + '</code>' + '\n';
}
//console.log(xmlstring);
fs.writeFileSync('test.xml', xmlstring);
console.log(xmlstring);
