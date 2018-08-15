// Create a new file called loops.js in the /04week folder of your workbook.
// Complete each of the following exercises.
// for loop
// Use a for loop to console.log each item in the array carsInReverse.
const carsInReverse = ["carOne", "carTwo", "carThree"]
for(let i = 0; i < carsInReverse.length; i++) {
    console.log(carsInReverse[i]);
}

// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
const persons = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"

}

// Use a for...in loop to console.log each key.
for(const key in persons) {
    console.log(key)
}
// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for(const key in persons) {
    if(key == 'birthDate') {
        console.log(persons[key]);
    }
}

// while loop
// Use a for loop to console.log the numbers 1 to 1000.

//was this supposed to be a while loop?
// let num = 1;
// while(num <= 1000) {
//     console.log(num);
//     num++;
// }


for(let i = 1; i <= 1000; i++) {
    console.log(i);
}

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
let i = 1;
do {
    console.log(i);
    i++
} while(i <= 1000)


// When is a for loop better than a while loop?

//With the for loop, the variable used for the iteration's scope is contained in the loop.

// How is the readability of the code affected?
//The code is easier to read in a for loop because all of the information 
//about the loop iteration is contained in one place.

// What is the difference between a for loop and a for...in loop?
//A for loop will iterate a given number of times. A for..in loop will iterate 
//over each object in the object given.

// What is the difference between a while loop and a do...while loop?
//A do while will excute the code at least once, since the condition is tested for truth at 
//the end of the statement. While a while loops condition is tested at the beginning.