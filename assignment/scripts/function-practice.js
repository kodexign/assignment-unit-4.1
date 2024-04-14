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
console.log( '---PERSONALIZED HELLO---');
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Hello Name:', helloName('Kalia'));
console.log('Hello Name:', helloName('Jack and Jill'));

// 3. Function to add two numbers together & return the result
console.log('---ADD TWO NUMBERS--');

function addNumbers(firstNumber, secondNumber) {
  console.log('add numbers:', [firstNumber, secondNumber]);
  // return firstNumber + secondNumber;
  let result = firstNumber + secondNumber;
  console.log('sum:', result);
  return result;
}
// with how the function is written, will console log will all thats in code
addNumbers(7, 3);
addNumbers(845, 18);

//console logs will only show sum
console.log('console log addNumber function test:', addNumbers(25, 11));


// 4. Function to multiply three numbers & return the result
console.log('---MULTIPLY THREE NUMBERS---');

function multiplyThree(x, y, z) {
  console.log('multipy:', [x, y, z]);
  return x * y * z;

}
console.log('result:', multiplyThree(1, 2, 3));
console.log('result:', multiplyThree(17, 24, 35));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log('---NUMBER IS POSITIVE--');
function isPositive(number) {
  console.log('number input is:', number);
  if (number > 0) {
    return true;
  } else {
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
console.log('--- RETURN LAST ITEM---');
function getLast(arrayInput) {
  if (arrayInput) {
    console.log('array input:', arrayInput);
    return arrayInput[arrayInput.length - 1];
  }
  return undefined;

}
console.log('last item in array:', getLast([26, 32, 7, 9, 21]));
console.log('last item in array:', getLast());
console.log('last item in array:', getLast([2, 4, 6, 8]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log('---FIND A VALUE---');

function findValue(array, value) {
  for (let i = 0; i < array.length; i++) {
    console.log('array:', array, 'find:', value);
    if (array[i] === value) {
      return true;
    }
  }
  return false;

}
console.log('found:',findValue([2, 4, 6, 8], 2));
console.log('found:', findValue([15,7,3,25], 8));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log('---STRETCH GOAL- FIRST LETTER---')
function isFirstLetter(letter, string) {
  for (let i = 0; i < string.length; i++) {
    console.log('string:', string, 'find:', letter);
    if (letter === string[0]) {
      return true;
    }
  }
  return false;

}
console.log('letter is first:', isFirstLetter('b','bear'));
console.log('letter is first:', isFirstLetter('b','cat'));
console.log('letter is first:', isFirstLetter('t','the cat in the hat'));


// 9. Function to return the sum of all numbers in an array
console.log('---SUM OF ARRAY---');
function sumAll(array) {
  let total = 0;
  // TODO: loop to add items
  for( let i = 0; i < array.length; i++) {
    console.log('array:', array);
    total + array(array.length);
}
  // TODO: return the sum
 return total
}
console.log( 'sum of array:', sumAll(2,4,6,8));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log(' ---ALL POSITIVE---')
function allPositive(arrayInput) {
  let positiveNumbers = [];
  for (let num of arrayInput) {
    if (num > 0) {
      positiveNumbers.push(num);
    }
  }
  return positiveNumbers;
}

console.log( 'array is positive:', allPositive( 2,4,6,-1));



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
