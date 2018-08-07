'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Whiteboar/Plan:
//if hand1 and hand2 are the same its a tie
//check hand one and switch on the reult
//if hand1 is rock:
//  if hand2 is scissors, hand1 wins
//  if hand2 is paper, hand2 wins
//
//if hand1 is scissors:
//  if hand2 is paper, hand1 wins
//  if hand2, rock, hand2 wins
//
//if hand1 is paper:
//  if hand2 is rock, hand1 wins,
//  if hand2 is scissors, hand2 wins



function rockPaperScissors(hand1, hand2) {
  //output messages
  const hand1WinsMessage = "Hand one wins!"
  const hand2WinsMessage = "Hand two wins!"
  const tieMessage = "It's a tie!"
  const invalidInputMessage = "Please enter valid input"

  //
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";
  
  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();

  let message = "";

  if(!isValidInput(hand1) ||  !isValidInput(hand2)) {
      message = invalidInputMessage;
      return message;
  }

  //if its a tie
  if(hand1 == hand2) {
    message = tieMessage;
  } else {
    switch(hand1) {
      case rock:
        if(hand2 == scissors) {
          message = hand1WinsMessage;
        } else if(hand2 == paper){
          message = hand2WinsMessage;
        }
        break;
      case scissors:
        if(hand2 == paper){
          message = hand1WinsMessage;
        } else if(hand2 == rock) {
          message = hand2WinsMessage;
        }
        break;
      case paper:
        if(hand2 == rock) {
          message = hand1WinsMessage;
        } else if(hand2 == scissors) {
          message = hand2WinsMessage;
        }
        break;
    }
  }
  
  return message;
}

function isValidInput(hand) {
    return hand == 'rock' || hand == 'paper' || hand == 'scissors';
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
        assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
        assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should detect that hand one won', () => {
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    });
    it('should detect that hand two won', () => {
        assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
    })
    it('should detect valid input', () => {
        assert.equal(rockPaperScissors('notRock', 'rock'), "Please enter valid input");
        assert.equal(rockPaperScissors('paper', 'notPaper'), "Please enter valid input");
    })
  });
} else {

  getPrompt();

}
