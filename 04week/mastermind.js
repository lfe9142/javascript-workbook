'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//doesnt return anything, will log the board to the console
function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

//doesnt return anything, generates a string 
function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

//returns random number between the min and the max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//accepts two parements, solution and guess
//returns a string in the form 1-1
//with the first number in the string being the amount of letters in the correct location
//and the second number in the string being the amount of letters correct but that are not in the correct location
function generateHint(solution, guess) {
  //generate solutionArray and guessArray from variables passed in
  //let correctLetterLocations = 0
  //for(let i = 0; i < solutionsArray.length; i++) {
    //if(solitionsArray[i] == guessArray[i]) {
      //correctLetterLocations++;
      //solutionsArray[i] = null;
    //}
  //}

  //let correctLetter = 0
  ////for(let i = 0; i < solutionsArray.length; i++) {
  // solutionsArray.indexOf(guessArray[i]) 
  //}
}

//if guess is equal to solution: you win
//if not, show the user how many are in correct location and how many are correct, but in the wrong location
//if the user guesses incorrectly 10 times, end the game
//
//the bord will be an array of objects, each object will store and array containing the guess and a string with the hint
//the parent function is mastermind
//

//this is the parent function
function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  //if solution == '' then generateSolution()
  //if(solution == guess) {
  //  you win
  //} else{
  // generateHint(solution, guess) and add it to the board
  // if the board length is 10 log 'you ran out of turns! The solution was '
  //  else log 'guess again'
  //}
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
