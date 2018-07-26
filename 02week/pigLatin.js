'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Whiteboard/Plan:
//take a word
//turn word into array with split()
//if its a vowel add 'yay'
//if its not a vowel:
//put the first letter at the end, then add 'ay'
//turn array into string with join()


//isInputValid(word);
//will check if it isnt a number and isnt empty
const isValidInput=(word)=> word && !Number(word);


//lowercaseAndTrimInput(word);
//use trim() and toLowerCase()
//returns string that is trim and lowercase
const lowercaseAndTrimString=(word)=> word.trim().toLowerCase();


//isLetterVowel(letter)
//returns true if letter equals a e i o or u
const isLetterVowel=(letter)=> letter == 'a' || letter == 'e' ||  letter == 'i' || letter == 'o' || letter == 'u';

//putLetterOnEnd(wordArray)
//loop though wordArray until we come to a vowel
//for each letter 
//use array.length() and array.slice()
const putLeadingconsonantsAtEnd=(wordArray)=> {
  let leadingConsonants = [];
  let currentIndex = 0;
  for(currentIndex = 0; currentIndex < wordArray.length; currentIndex++) {
    let currentLetter = wordArray[currentIndex];
    console.log(currentLetter);
    if(isLetterVowel(currentLetter)) {
      break;
    }

    leadingConsonants.push(currentLetter);
  }

  const trailingWord = wordArray.slice(currentIndex, wordArray.length);
  return trailingWord.concat(leadingConsonants);
}

//addAYToEnd(wordArray)
const addAYToEnd=(wordArray)=> wordArray.join('') + "ay";
//addYAYToEnd(wordArray)
//accepts a wordArray and returns a string with YAY appended to the end
const addYAYToEnd=(wordArray)=> wordArray.join('') + "yay";


function pigLatin(word) {
  // Your code here
  if(isValidInput(word)) {
    let wordArray = lowercaseAndTrimString(word).split('');

    if(isLetterVowel(wordArray[0])) {
      return addYAYToEnd(wordArray);
    }

    return addAYToEnd(putLeadingconsonantsAtEnd(wordArray));
  }
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
