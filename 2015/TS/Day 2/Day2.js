var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf8');
var total = 0;
var ribbon = 0;
var ribbon_total = 0;
var aboxes = file.replace('\r', '');
aboxes = aboxes.split('\n');
//console.log(aboxes[0])
for (var i = 0; i < 1000; i++) {
    //console.log(aboxes[i])
    var lwh = aboxes[i].split('x');
    var l = lwh[0];
    var w = lwh[1];
    var h = lwh[2];
    //console.log(l,w,h)
    var wrapper = ((2 * l * w) + (2 * w * h) + (2 * h * l));
    lwh = lwh.sort(function (n1, n2) { return n1 - n2; });
    //console.log(lwh)
    wrapper += Math.min(l * w, w * h, h * l);
    ribbon = (2 * lwh[0]) + (2 * lwh[1]) + (l * w * h);
    ribbon_total += ribbon;
    total += wrapper;
}
console.log('Day 1 | Wrapper Total: ' + total);
console.log('Day 2 | Ribbon Total: ' + ribbon_total);
