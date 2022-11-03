// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

//given two arrays
//returns an array with the two arrays combined, with elements taken in alternate turns from each array
//example 
//[1,2,3,4],[a,b,c,d] => [1,a,2,b,3,c,4,d]
//questions: is the first element going to be from a? 
//pseudo:
//make a variable to use as the counter
//use a while loop, passing in the length of a and b as exiting conditions
//in the callback function, in each iteration, validate that the index is still < length of the respective array
//if yes, push element at the current index to the output array
//increment the counter

function mergeArrays(a, b) {
    let index = 0;
    const output = [];
    
    while (index < a.length || index < b.length) {
      if (index < a.length) {
        output.push(a[index])
      } 
      if (index < b.length) {
        output.push(b[index])
      }
      index++
    }
    
    return output
  
  }