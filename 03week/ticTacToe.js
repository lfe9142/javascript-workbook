'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}
//will return true if any row has either 3 X or 3 O
function horizontalWin() {
  return didRowWin(0) || didRowWin(1) || didRowWin(2);
}

//converts row into string to check it aginst XXX and OOO
const didRowWin=(row)=>{
  const rowString = board[row].join('');
  return rowString == 'XXX' || rowString == 'OOO';
}

//will return true if any column has either 3 X or 3 O
function verticalWin() {
  return didColumnWin(0) || didColumnWin(1) || didColumnWin(2);
}

const didColumnWin=(column)=> board[0][column] != ' '  
      && board[0][column] == board[1][column] && board[1][column] == board[2][column]

//will return true if [0][0] [1][1] [2][2]  or [0][2] [1][1] [2][0] has either 3 X or 3 O
function diagonalWin() {
  return didBackSlashDiagonalWin() || didForwardSlashDiagonalWin();
}

const didBackSlashDiagonalWin=()=>   board[0][0] != ' ' && board[0][0] == board[1][1] 
          && board[1][1] == board[2][2];

const didForwardSlashDiagonalWin=()=> board[0][2] != ' ' && board[0][2] == board[1][1] 
          && board[1][1] == board[2][0];


//will return true if horizontalWin, verticalWin() or diagonalWin() is true
function checkForWin() {
  return horizontalWin() || verticalWin() || diagonalWin()
}

function ticTacToe(row, column) {
  if(isInputVaild(row, column)) {
    board[row][column] = playerTurn;

    if(checkForWin()) {
      console.log("You win!");
      return true;
    } else {
      switchPlayer()
    }
  } else {
    console.log("Please use valid input");
  }
}

//Whiteboard/Plan:
//Steps:
//if input is vaild
//add marker to board
//check for win
//switch user

//isInputVaild(row, column)
//accepts a row and a column
//returns true if both row and column are numbers on the 
//game board and the location has not already been used
//else returns false
const isInputVaild=(row, column)=> isInputInRange(row) && isInputInRange(column) && isSpaceEmpty(row, column);

//isInputInRange(input)
const isInputInRange=(input)=> input >=0 && input < 3;

//isSpaceEmpty(row, column)
const isSpaceEmpty=(row, column)=> board[row][column] == ' ';



//switchPlayer()
//if playerTurn is X make it Y
//if playerTurn is Y make it X
const switchPlayer=()=> playerTurn == 'X' ? playerTurn = 'O' : playerTurn = 'X';


function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
