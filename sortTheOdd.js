// 6 kyu
// Sort the odd

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


//given an array of numbers
//return the array with the ONLY odd numbers sorted

//only nums? 
//return empty array if given empty array?
//floats?
//return array of nums?

//make a separate array, consisting of only odd numbers
//sort the odd numbers in ascending order
//iterate through given array
//for each elem, check if elem is odd, if it is, shift from odd nums array and map it to output array
//if it's even, map the original elem from the given array to the output array

function sortArray(array) {
    const odds = array.filter(e => e % 2).sort((a,b) => a - b)
    return array.map(e => e % 2 ? odds.shift() : e)
  }
  