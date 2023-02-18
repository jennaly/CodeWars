// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

// The number 
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
// 89
// =
// 8
// 1
// +
// 9
// 2
// 89=8 
// 1
//  +9 
// 2
 

// The next number in having this property is 
// 135
// 135:

// See this property again: 
// 135
// =
// 1
// 1
// +
// 3
// 2
// +
// 5
// 3
// 135=1 
// 1
//  +3 
// 2
//  +5 
// 3
 

// Task
// We need a function to collect these numbers, that may receive two integers 
// �
// a, 
// �
// b that defines the range 
// [
// �
// ,
// �
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [
// �
// ,
// �
// ]
// [a,b] the function should output an empty list.

// 90, 100 --> []
// Enjoy it!!


// given a range between and including a and b
// return all the numbers that fulfills the property 

// number => sum of digits that make up the number, multiplied to the power of their place in the number, is equal to the number
// all single digit numbers fulfills the property
// a and b are numbers? not strings?
// return the output as an array of numbers?
// if no numbers in the range fulfills the property, return an empty array
// a and b are both 0, return [0]

// iterate from a to b
// in each iteration, split the number at the current iteration into its digits by converting it to a string, and use .split("")
// each digit in the array will be in string form
// iterate through each digit in the array, convert each digit string into a number,
// (refactoring) call .reduce to get the sum
// if sum === the iteration number, push it to the output array

function sumDigPow(a, b) {
    let output = [];
    
    for (let i = a; i <= b; i++) {
      const digitsArray = i.toString().split("");
      
      let sum = 0;
      
      for (let j = 0; j < digitsArray.length; j++) {
  
        let power = j + 1;
        const currDigit = digitsArray[j];
        
        const result = parseInt(currDigit) ** power;
        sum += result;
      }
      
      if (sum === i) {
        output.push(i);
      }
    }
    
    return output;
  }