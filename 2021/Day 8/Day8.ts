import { readFileSync } from "fs";
import { createImportSpecifier } from "typescript";

let input = readFileSync("input.txt").toString().split('\n')


// let one: string = 'cf'              // length 2
// let two: string = 'acdeg'           // length 5
// let three: string = 'acdfg'         // length 5
// let four: string = 'bcdf'           // length 4
// let five: string = 'abdfg'          // length 5
// let six: string = 'abdefg'          // length 6
// let seven: string = 'acf'           // length 3
// let eight: string = 'abcdefg'       // length 7
// let nine: string = 'abcdfg'         // length 6



// let answer:number = 0
// for( let i = 0; i < input.length; i++){
// let data: Array<string> = input[i].split('|')[1].trim().split(' ')
// for(let y = 0; y < data.length; y++){
// console.log(data[y] + ' ' + data[y].length)
// if( data[y].length === 2){ answer += 1}
// if( data[y].length === 3){ answer += 1}
// if( data[y].length === 4){ answer += 1}
// if( data[y].length === 7){ answer += 1}
// }
// }
// console.log(answer)




console.log(input)


let test: string = ''
for (let i = 0; i < input.length; i++){
    
    let notes:Array <string> = input[i].split('|')[0].trim().split(' ')
    let display:Array <string> = input[i].split('|')[1].trim().split(' ')

    let one = notes.filter((element) => {return element.length === 2;});
    let four = notes.filter((element) => {return element.length === 4;});
    let seven = notes.filter((element) => {return element.length === 3;});
    let eight = notes.filter((element) => {return element.length === 7;});



    // console.log(notes)
    // console.log(display)
    // console.log(one)
    // console.log(four)
    // console.log(seven)
    // console.log(eight)

    for( let y = 0; y < display.length; y++){

        console.log(display[y] + ' ' + display[y].length)


        let displayLength = display[y].length

        switch(displayLength){

            case 2:
                test += '1' 
                break;
            
            case 3:
                test += '7'
                break;
            
            case 4:
                test += '4'
                break;
            
            case 8: 
                test += '8'
                break;
            
            case 6:
                if( display[y].includes(one[0] && one[1])){
                    test += '0'
                }
                else{
                    test += '6'
                }
            
                break;
            
            case 5:
                if(display[y].includes(one[0] && one[1])){
                    //3 or 9
                    let tracker: number = 0
                    for(let z = 0 ; z < four.length; z++){

                        if(display[y].includes(four[0][z])){
                            tracker += 1
                            console.log(tracker)
                        }
                    }

                        if (tracker === 4){
                            test += '9'
                            break
                        }
                        else{
                            test += '3'
                        }
                    }
                    else{
                        console.log( '5 or 2')
                        console.log(display[y])
                    // 5 or 2
                    let tracker: number = 0
                    for(let z = 0 ; z < four.length; z++){
                        if(display[y].includes(four[0][z])){
                            tracker += 1
                            console.log(tracker)
                        }
                    }
                    console.log(tracker)
                        if (tracker === 3){
                            test += '5'
                            break
                        }
                        if (tracker === 2){
                            test += '2'
                            break
                        }









                    }

                



        }




        // if( display[y].length === 2){ test += '1'}
        // if( display[y].length === 3){ test += '7'}
        // if( display[y].length === 4){ test += '4'}
        // if( display[y].length === 7){ test += '8'}




}





}
console.log(test)



