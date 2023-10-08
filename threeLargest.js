// given an array of at least 3 integers
// without sorting the array, return a sorted array of the three largest integers
// there can be duplicates in the array

function findThreeLargestNumbers(array) {
    // Write your code here.
    const threeLargest = [null, null, null]
  
    for (const num of array) {
      if (threeLargest[2] === null || num > threeLargest[2]) {
        threeLargest[0] = threeLargest[1];
        threeLargest[1] = threeLargest[2];
        threeLargest[2] = num;
      } else if (threeLargest[1] === null || num > threeLargest[1]) {
        threeLargest[0] = threeLargest[1];
        threeLargest[1] = num;
      } else if (threeLargest[0] === null || num > threeLargest[0]) {
        threeLargest[0] = num;
      }
    }
  
    return threeLargest
  }

  // create an ouput array of length 3, with initial values of null
// iterate through the integers of the array
// at each index:
// implement the following conditions:

// if output[2] is null or the current number > output[2]
// move output[1] to output[0], 
// move output[2] to output[1], 
// replace output[2] with current num

// if output[1] is null or the current num > output[1]
// move output[1] to output[0]
// replace output[1] with current num

// if output[0] is null or the current num > output[0]
// replace output[0] with current num

// time complexity of O(n) where n is the number of integers in the given array
// space complexity of O(1) because the length of the output array is constant 

