'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker() {
  // Your code here
}

class Board {
  constructor() {
    this.grid = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }

  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  //method to put all pieces in their starting locations
  populateGrid() {
    for(let row = 0; row < 3; row++) {
      for(let column = 0; column < 8; column++) {
        if((column + row) % 2 != 0) {
          this.grid[row][column] = new Piece("X");
        }
      }
    }

    for(let row = 5; row < 8; row++) {
      for(let column = 0; column < 8; column++) {
        if((column + row) % 2 != 0) {
          this.grid[row][column] = new Piece("O");
        }
      }
    }
  }

}

//00 01 02 03 04 
//10 11 12 13 14
//Steps 
//switch player
//move piece
//check for win


//functions/methods we need
//moveChecker(fromLocation, toLocation)

//isValidMove(fromLocation, toLocation)
//cant move to "white spaces" on board
//cant move diagonal if next next space is taken
//cant move out of the grid

//win condition
//tie condition

//capturePiece()

//setBoard() 
//set pices for board

//switchPlayer()

//move by 11 or 9

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.populateGrid();
  }

  //method that will take two strings the first one being the grid location of the first piece
  //and the second one is the grid location of where the piece should be moved
  //the method will move the piece to the new location
  //this method assumes the piece exists and the location is a vaild one
  moveChecker(whichPiece, toWhere) {
    const whichArr = whichPiece.split('');
    const whichRow = parseInt(whichArr[0], 10);
    const whichColumn = parseInt(whichArr[1], 10);

    const whereArr = toWhere.split('');
    const whereRow = parseInt(whereArr[0], 10);
    const whereColumn = parseInt(whereArr[1], 10);
    this.board.grid[whereRow][whereColumn] = this.board.grid[whichRow][whichColumn];
    this.board.grid[whichRow][whichColumn] = null;
  }
}

//Class that will repersent the pieces, contains a symbol that will be set to X or O
class Piece {
  constructor(symbol) {
    this.symbol = symbol;
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}


const game = new Game();
game.start();
game.moveChecker('01', '44');


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
