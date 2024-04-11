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
function addNumbers( firstNumber, secondNumber){
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

console.log( "add two numbers:", addNumbers(3, 8));




// 4. Function to multiply three numbers & return the result

function multiplyThree(x, y, z) {
  console.log(x * y * z);
  return (x * y * z);
}
let result = multiplyThree(2, 4, 7);

console.log('result', result);

;


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }else{
  return false;
}
}
// Call the function to test each outcome (true & false) 
isPositive();

// Write a separate console.log statement for each outcome
console.log('42 is positive:', isPositive(42));
console.log('-16 is positive:', isPositive(-16));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast(array) {
  if(){
  return (array.length - 1);
} else if(){
  return undefined;
}
}
getLast();
console.log ('last item in array:', getLast([26,32,7,9,21]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {

}

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
function allPositive() {

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
