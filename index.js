// const matrix = (n) => {
//   const results = [];
//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }
//   let counter = 1;
//   let startCol = 0;
//   let endCol = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   while (startCol <= endCol && startRow <= endRow) {
//     for (let i = startCol; i <= endCol; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;

//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endCol] = counter;
//       counter++;
//     }
//     endCol--;

//     for (let i = endCol; i >= startCol; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;

//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startCol] = counter;
//       counter++;
//     }
//     startCol++;
//   }
//   return results;
// };
// console.log(matrix(5));
////////////////////////////////////////////////
// function matrix(size) {
//   let string = "";
//   var mat = Array.from(Array(size), () => new Array(size));
//   for (var i = 0; i <= size - 1; i++) {
//     for (var j = 0; j < size - 1; j++) {
//       mat[i][j] = Math.floor(Math.random() * 10);
//     }
//     mat[i][j] = Math.floor(Math.random() * 10);
//   }

//   for (let i = 0; i < size * size; i++) {
//     let row = parseInt(i / size, 10);
//     let col = i % size;
//     string += mat[row][col] + " ";
//     if (!((i % mat.length) - (size - 1))) {
//       console.log(string);
//       string = "";
//     }
//   }
//   console.log(string);
// }
// matrix(8);
/////////////////////////////////////////////////
// function numbers(n) {
//   let result = {};
//   let sum = ((1 + n) * n) / 2;
//   for (let i = 1; i <= n; i++) {
//     let b = (sum - i) / (i + 1);

//     if (i != b && Math.floor(b) === b && b <= n && !result[b]) result[i] = b;
//   }
//   if (Object.keys(result).length) {
//     console.log(n);
//     return result;
//   }
// }
// const num = + prompt("Enter the number:")
// for (let i = 2; i <= num; i++) {
//   console.log(numbers(i));
// }
//////////////////////////////////////////////////////////////////
function drawBoard(board) {
    console.log(" ");
    console.log(
        " " +
        (board["7"] || "7 ") +
        " | " +
        (board["8"] || " 8 ") +
        " | " +
        (board["9"] || " 9 ")
    );
    console.log("---------------");
    console.log(
        " " +
        (board["4"] || "4 ") +
        " | " +
        (board["5"] || " 5 ") +
        " | " +
        (board["6"] || " 6 ")
    );
    console.log("---------------");
    console.log(
        " " +
        (board["1"] || "1 ") +
        " | " +
        (board["2"] || " 2 ") +
        " | " +
        (board["3"] || " 3 ")
    );
    console.log(" ");
    console.groupEnd();
}

let defaultBoard = () => {
    return {
        7: null,
        8: null,
        9: null,
        4: null,
        5: null,
        6: null,
        1: null,
        2: null,
        3: null,
    };
};

const defaultState = () => {
    return {
        turn: "X",
        isGameOver: false,
        tieCounter: 0,
    };
};

let defaultConfig = {
    player1: {
        title: "Player 1",
        symbol: "X",
    },
    player2: {
        title: "Player 2",
        symbol: "O",
    },
};

let board = defaultBoard();
let gameState = defaultState();

drawBoard(board);

function solutions(board) {
    return (
        false ||
        (board["7"] && board["7"] == board["8"] && board["7"] == board["9"]) ||
        (board["4"] && board["4"] == board["5"] && board["4"] == board["6"]) ||
        (board["1"] && board["1"] == board["2"] && board["1"] == board["3"]) ||
        (board["7"] && board["7"] == board["4"] && board["7"] == board["1"]) ||
        (board["8"] && board["8"] == board["5"] && board["8"] == board["2"]) ||
        (board["9"] && board["9"] == board["6"] && board["9"] == board["3"]) ||
        (board["7"] && board["7"] == board["5"] && board["7"] == board["3"]) ||
        (board["9"] && board["9"] == board["5"] && board["9"] == board["1"])
    );
}

function isTie(num, isGameOver) {
    if (num == 9 && !isGameOver) {
        console.log(
            "Game  is tie ! If you want to play again type restart() and press Enter"
        );
        isGameOver = true;
    }
}

function x(number) {
    if (gameState.isGameOver) {
        return console.log(
            "Game is over ! If you want to play again type restart() and press Enter"
        );
    } else {
        if (number <= 9 && number >= 0 && gameState.turn == "X") {
            if (board[number] == null) {
                gameState.tieCounter++;
                board[number] = "X";
                console.clear();
                drawBoard(board);
                gameState.turn = "O";
                if (solutions(board)) {
                    console.log(
                        `X wins! If you want to play again type restart() and press Enter`
                    );
                    gameState.isGameOver = true;
                }
            } else {
                console.log("Number is already used");
            }
        } else {
            console.log("Error number or it is not your turn");
        }
        isTie(gameState.tieCounter, gameState.isGameOver);
    }
}

function y(number) {
    if (gameState.isGameOver) {
        return console.log(
            "Game is over ! If you want to play again type restart() and press Enter"
        );
    } else {
        if (number <= 9 && number >= 0 && gameState.turn == "O") {
            if (board[number] == null) {
                gameState.tieCounter++;
                board[number] = "O";
                console.clear();
                drawBoard(board);
                gameState.turn = "X";
                if (solutions(board)) {
                    console.log(
                        `Y wins! If you want to play again type restart() and press Enter`
                    );
                    gameState.isGameOver = true;
                }
            } else {
                console.log("Number is already used");
            }
        } else {
            console.log("Error number or it is not your turn");
        }
        isTie(gameState.tieCounter, gameState.isGameOver);
    }
}

function restart() {
    console.clear();
    gameState = defaultState();
    board = defaultBoard();
    drawBoard(board);
}
