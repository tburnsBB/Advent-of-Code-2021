import { escape } from "querystring";
import { convertCompilerOptionsFromJson } from "typescript";

//turn a text file into an array of strings
var fs = require('fs');
var file = fs.readFileSync('codes.txt', 'utf8');
var lines = file.split('\n');

let xmlstring:string = fs.readFileSync('template.xml', 'utf8');

console.log(lines[0])

let count: number = 0;

for ( let i = 0; i < 10; i++) {


    let line:string = lines[i].split(',')[1].replace(/"/g,'')
    ////console.log(line);



    count++;


// take the line and add it to a string
xmlstring += '<code>' + line.trim() + '</code>' + '\n'

}
//console.log(xmlstring);


fs.writeFileSync('test.xml', xmlstring);
console.log(xmlstring);