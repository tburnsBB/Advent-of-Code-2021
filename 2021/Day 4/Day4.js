"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)("input.txt").toString();
var guesses = input
    .split("\n")[0]
    .split(",")
    .map(function (guess) { return parseInt(guess); });
var boards = input
    .split("\n")
    .splice(2)
    .join("\n")
    .split("\n\r")
    .map(function (board) {
    return board
        .trim()
        .split("\n")
        .map(function (row) {
        return row
            .trim()
            .split(/\s+/)
            .map(function (value) { return parseInt(value); });
    });
});
var calculateScore = function (board, guess) {
    var sum = 0;
    board.forEach(function (row) {
        row.forEach(function (value) {
            if (value > -1) {
                sum += value;
            }
        });
    });
    return sum * guess;
};
//console.log(boards)
// console.log(' Index 0')
///console.log(boards[0][0][0])
var boardHasWinner = function (board) {
    var hasWinner = false;
    board.forEach(function (row) {
        if (row.filter(function (value) { return value === -1; }).length === row.length) {
            hasWinner = true;
        }
    });
    var _loop_1 = function (i) {
        var columnValues = [];
        board.forEach(function (row) {
            columnValues.push(row[i]);
        });
        //console.log("columnValues" , columnValues)
        if (columnValues.filter(function (value) { return value === -1; }).length === columnValues.length) {
            hasWinner = true;
        }
    };
    for (var i = 0; i < board[0].length; i++) {
        _loop_1(i);
    }
    ;
    board.forEach(function (row) {
        if (row.filter(function (value) { return value === -1; }).length === row.length) {
            hasWinner = true;
        }
    });
    return hasWinner;
};
var partOne = function () {
    guesses.forEach(function (guess) {
        boards.forEach(function (board, boardIndex) {
            board.forEach(function (row, rowIndex) {
                row.forEach(function (value, valueIndex) {
                    if (value === guess) {
                        row[valueIndex] = -1;
                    }
                });
            });
            if (boardHasWinner(board)) {
                var score = calculateScore(board, guess);
                console.log("Part 1: ", score);
                console.log("Found winner in: ", board);
            }
        });
    });
};
var partTwo = function () {
    var winningBoards = [];
    guesses.forEach(function (guess) {
        boards.forEach(function (board, boardIndex) {
            board.forEach(function (row, rowIndex) {
                row.forEach(function (value, valueIndex) {
                    if (value === guess) {
                        row[valueIndex] = -1;
                    }
                });
            });
            if (boardHasWinner(board) && winningBoards.indexOf(boardIndex) === -1) {
                var score = calculateScore(board, guess);
                console.log("Score for board ".concat(boardIndex, " is ").concat(score));
                console.log(boardIndex, score);
                winningBoards.push(boardIndex);
            }
        });
    });
};
//partOne()
partTwo();
