// 7 kyu
// esreveR

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

//given an array
//return a new array with elements reversed

//return empty array if given empty array? => yes
//return output and not console.log? => yes
//elements is of varying data types? => yes
//is there going to a nested array? do I have to reverse the order of the elements in it too? => no

//initialzie variable to store output array
//iterate through given array
//prepend each element to the beginning of the output array using .unshift()

reverse = function(array) {
    // TODO: program me!
    const output = [];
    for (const element of array) {
      output.unshift(element)
    }
    return output
  }
  
  