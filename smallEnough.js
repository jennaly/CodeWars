// 7 kyu
// 7kyu
// Small enough? - Beginner

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// given an array and a limit value
// return a boolean - true if all values in the array or below or equal to limit
// false if at least one element in the array is over the limit

// array consists of integers? floats? special characters? letters?
// limit is always a number?

// use .every method to check that all elements in calling array passes testing function

function smallEnough(a, limit){
    return a.every(e => e <= limit)
  }
  