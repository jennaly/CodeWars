// 7 kyu
// The average length

// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

//given an array of strings
//return a new array where each letter has a length of the average length of the elements of the given array

//elements consist of only letters? no numbers, floats, special characters?
//each element consists of the same letter?
//return empty array if given empty array?

//base case: if given an empty array, return an empty array
//iterate through array and get the sum of the lengths of the strings, then divide by the array's length to get the average
//iterate though the array again, for each element, map the element to the new array and use .repeat to meet the average length

function averageLength(array) { 
    if (!array.length) return []
    
    let sum = 0;
    for (const elem of array) {
      sum += elem.length;
    }
    let avg = Math.round(sum / array.length)
    
    return array.map(e => e[0].repeat(avg))
  }
  