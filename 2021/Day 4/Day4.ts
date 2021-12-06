import { readFileSync } from "fs";
import { exit } from "process";



let input = readFileSync("input.txt").toString()

let guesses: number[] = input
    .split("\n")[0]
    .split(",")
    .map(guess => parseInt(guess))

type Board = number[][]


let boards: Board[] = input
    .split("\n")
    .splice(2)
    .join("\n")
    .split("\n\r")
    .map(board => {
        return board
        .trim()
        .split("\n")
        .map(row => 
            row
            .trim()
            .split(/\s+/)
            .map(value => parseInt(value))
            )
    }) 


    const calculateScore = (board: Board, guess: number ): number => {
    
        let sum = 0;
    
        board.forEach(row => {
            row.forEach(value => {
                if (value > -1){
                    sum += value
                } 
            })
        })
    
        
        
        return sum * guess
    }

//console.log(boards)


// console.log(' Index 0')
///console.log(boards[0][0][0])



const boardHasWinner = (board: Board): boolean => {
    let hasWinner = false;

    board.forEach(row => {
        if (row.filter(value => value === -1).length === row.length){
            hasWinner = true
        }
    })


    for (let i = 0; i < board[0].length; i++){

        let columnValues: number[] = []
        board.forEach(row => {
            columnValues.push(row[i])
        } )

        //console.log("columnValues" , columnValues)

        if (columnValues.filter(value => value === -1).length === columnValues.length){
            hasWinner = true
        }

    };
    

        board.forEach(row => {
        if (row.filter(value => value === -1).length === row.length){
            hasWinner = true
        }
    })





    return hasWinner

}
const partOne = () =>{
    guesses.forEach((guess) => {

    boards.forEach((board, boardIndex) =>{
        board.forEach((row, rowIndex) => {
            row.forEach((value, valueIndex) => {
                if (value === guess) {
                    row[valueIndex] = -1
                }
            })
        })
        if(boardHasWinner(board)){


            let score = calculateScore(board, guess)
            console.log("Part 1: " , score)
            console.log("Found winner in: ", board)
        
        }
    } )
})
}

const partTwo = () =>{
    let winningBoards: number[] = []



    guesses.forEach((guess) => {

    boards.forEach((board, boardIndex) =>{
        board.forEach((row, rowIndex) => {
            row.forEach((value, valueIndex) => {
                if (value === guess) {
                    row[valueIndex] = -1
                }
            })
        })
        if(boardHasWinner(board) && winningBoards.indexOf(boardIndex) === -1){

            let score = calculateScore(board, guess)
            console.log(`Score for board ${boardIndex} is ${score}`)
            console.log(boardIndex, score)        
            winningBoards.push(boardIndex)   
        
        }
    } )
})
}


//partOne()
partTwo()
