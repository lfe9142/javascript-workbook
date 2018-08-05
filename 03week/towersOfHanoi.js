'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//movePiece(startStack, endStack)
//acceots two strings: startStack and endStack
//moves the last elements from the startStack array to the last position in the endStack array
function movePiece(startStack, endStack) {
  stacks[endStack].push(stacks[startStack].pop());
}

//isLegal(startStack, endStack)
//accepts two strings: startStack and endStack
//returns true if both strings are legal stacks
//and if the top piece of the startStack can be moved to the endStack 
//(piece is smaller then the top endstack piece)
function isLegal(startStack, endStack) {
  return isLegalStack(startStack) && isLegalStack(endStack) && isLegalMove(startStack, endStack)
}

//isLegalStack(stack)
//accepts string
//returns true if stack is a, b, or c
const isLegalStack=(stack)=> stack == 'a' || stack == 'b' || stack == 'c'

//isLegalMove(startStack, endStack)
//returns true if last element of endStack is greater then last element of start stack
const isLegalMove=(startStack, endStack)=> {
  const startStackArr = stacks[startStack]
  const endStackArr = stacks[endStack]
  if(endStackArr.length == 0) {
    return true;
  } else {
    return startStackArr[startStackArr.length - 1] < endStackArr[endStackArr.length -1];
  }
}


//returns true if all elements in the array are in acending order, are in only one array 
//and are not in array 'a'
function checkForWin() {
  if(stacks.a.length > 0) {
    return false
  } 
}



const reset=()=> {
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  console.log(checkForWin())
}

//Whiteboard/Plan:
//if move is legal
//move piece
//then check if the user won

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
