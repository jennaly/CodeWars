//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.

//given an array of numbers
//return the average

//return 0 for empty array?
//return average as a number?
//all elements in the array are numbers?

//use reduce then divide by length of array

function findAverage(array) {
    if (!array.length) {
      return 0
    }
    
    return array.reduce((a,b) => a + b, 0) / array.length
  }