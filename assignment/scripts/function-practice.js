console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Hello Name:', helloName('Kalia'));
console.log('Hello Name:', helloName('Jack and Jill'));

// 3. Function to add two numbers together & return the result
console.log('add two numbers---');

function addNumbers( firstNumber, secondNumber){
  console.log('add numbers:', [firstNumber, secondNumber]);
  // return firstNumber + secondNumber;
  let result = firstNumber + secondNumber;
  console.log('sum:', result); 
  return result;
}
// with how the function is written, will console log will all thats in code
addNumbers(7,3);
addNumbers(845,18);

//console logs will only show sum
console.log('console log addNumber function test:', addNumbers(25,11)); 


// 4. Function to multiply three numbers & return the result
console.log('multiple three numbers---');

function multiplyThree(x, y, z) {
  console.log('multipy:', [x,y,z]);
  return x * y * z;
 
}
console.log('result:', multiplyThree(1,2,3));
console.log('result:', multiplyThree(17,24,35));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log('Test for Positive---');
function isPositive(number) {
  console.log('number input is:', number);
  if (number > 0) {
    return true;
  }else{
  return false;
}
}
// Call the function to test each outcome (true & false) 
isPositive(45);
isPositive(-1);
// Write a separate console.log statement for each outcome
console.log('is positive:', isPositive(42));
console.log('is positive:', isPositive(-16));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log('return last item---');
function getLast(arrayInput) {
  if (arrayInput) { 
  console.log('array input:', arrayInput);
  return arrayInput[arrayInput.length - 1];
}
  return undefined;
 
}
console.log ('last item in array:', getLast([26,32,7,9,21]));
console.log ('last item in array:', getLast());
console.log ('last item in array:', getLast([2,4,6,8]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
//function find(value, array) {
  //for( let value of array){

  //}

//}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(arrayInput) {
  let positiveNumbers =[];
  for (let num of arrayInput) {
    if(num >0) {
      positiveNumbers.push(num);
    }
  }
  return positiveNumbers;
}



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//function addNumbers(numberInput) {
//  let total = 0;
 // for (let number of numberInput) {
 //   total += number;
 // }
  // return firstNumber + secondNumber;
 // return total;
//}

//console.log('sum of two numbers:', addNumbers([12, 10]));
//console.log('sum of two numbers:', addNumbers([35, 54]));


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
