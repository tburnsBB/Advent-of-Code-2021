var fs = require('fs');
var file = fs.readFileSync('credentials.txt', 'utf8');
var credentials = file.split('\n');
var currentPassport = [];
var RelevantField;
(function (RelevantField) {
    RelevantField["byr"] = "byr";
    RelevantField["iyr"] = "iyr";
    RelevantField["eyr"] = "eyr";
    RelevantField["hgt"] = "hgt";
    RelevantField["hcl"] = "hcl";
    RelevantField["ecl"] = "ecl";
    RelevantField["pid"] = "pid";
})(RelevantField || (RelevantField = {}));
console.log('Starting here =============================================================');
for (var _i = 0, credentials_1 = credentials; _i < credentials_1.length; _i++) {
    var cred = credentials_1[_i];
    if (cred.length === 1) {
        console.log(currentPassport);
        console.log('-------------------');
        currentPassport = [];
    }
    if (cred.length > 1) {
        currentPassport += cred;
        console.log(currentPassport);
    }
}
