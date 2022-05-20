// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//given an array of nums as strings and numbers
//return the sum of the array values 

//any floats?
//return sum as a number?
//return 0 for empty array?

//base case: if array is empty, return 0
//iterate through array, use +element to convert string elements to numbers
//use reduce to return the sum of all the numbers in the new array

function sumMix(x){
    if (!x.length) {
      return 0
    }
    
    return x.map(e => +e).reduce((prev,curr) => prev + curr, 0)
  }
  
  
  