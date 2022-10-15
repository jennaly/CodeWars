// 7 kyu
// Sorting Dictionaries 

// Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

// Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

// The list must be sorted by the value and be sorted largest to smallest.

// Examples

// sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
// sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]

//given an object that consists of number key-value pairs
//return an array of each key-value pair returned as a sub-array, and pairs are sorted by
//value in descending order
//questions:
//will the key always be a number? => no, there will be letters as keys too
//will numbers in the key always be of number types? => no because keys are strings by default
//will numbers in the value always be of number types?  => yes
//will the pairs be returned as numbers? => yes
//will object every be empty ? => no
  
function sortDict(dict) {
    // initialize output 
    let output = [];
    
    // iterating through dict object, pushing each pair in object to output array
    // if keys cannot be converted to a number, push the key as is
    // if keys cann be converted to a number, push the key as a number
    for (const pair in dict) {
      if (!Number(pair)) {
         output.push([pair, dict[pair]])
      } else {
         output.push([Number(pair), dict[pair]])
      }
    }
    
    //sort pairs in output array by value in decending order
    return output.sort((a,b) => b[1] - a[1])
  }
  
