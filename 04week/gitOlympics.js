'use strict'
const printListOfOlympians=(olympicArr)=> {
    olympicArr.array.forEach(element => {
        console.log(element);
    });
}
//comment 1s
const testArr = ["nameOne", "nameTwo", "namethree", "name4", "name4"];
printListOfOlympians(testArr);