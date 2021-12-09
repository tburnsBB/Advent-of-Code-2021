let fs = require('fs');
let file = fs.readFileSync('credentials.txt', 'utf8');
let credentials = file.split('\n');
let currentPassport: string[] = [];


enum RelevantField {
    byr = 'byr',
    iyr = 'iyr',
    eyr = 'eyr',
    hgt = 'hgt',
    hcl = 'hcl',
    ecl = 'ecl',
    pid = 'pid',
}
console.log('Starting here =============================================================');
for (let cred of credentials) {
    if (cred.length === 1) {
        console.log(currentPassport);
        console.log('-------------------');
        currentPassport = [];
    }

    if (cred.length > 1) {
        currentPassport += cred
        console.log(currentPassport);
    }


}
