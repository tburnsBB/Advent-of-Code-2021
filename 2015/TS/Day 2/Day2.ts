var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf8');


var total : number = 0
var ribbon : number = 0
var ribbon_total : number = 0
var aboxes = file.replace('\r','')

aboxes = aboxes.split('\n')



 //console.log(aboxes[0])

for(let i = 0; i < 1000; i++ ){
    //console.log(aboxes[i])
    var lwh: Array<number> = aboxes[i].split('x')
    
    var l: number = lwh[0]
    var w: number = lwh[1]
    var h: number = lwh[2]
    //console.log(l,w,h)
    var wrapper: number = ((2 * l * w) + (2 * w * h) + (2 * h * l))

    lwh = lwh.sort((n1,n2) => n1-n2)
    //console.log(lwh)
    
    wrapper += Math.min(l*w, w*h, h*l)

    ribbon = (2 * lwh[0]) + (2 * lwh[1]) + (l * w * h)
    ribbon_total += ribbon

    total += wrapper

}

console.log('Day 1 | Wrapper Total: ' + total)
console.log('Day 2 | Ribbon Total: ' + ribbon_total)