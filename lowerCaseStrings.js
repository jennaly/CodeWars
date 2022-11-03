// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

// Example
// arrayLowerCase(['Red', 'Green']) == ['red', 'green']
// arrayLowerCase([1, 'Green']) == [1, 'green']

//given an array
//return the array with elements that are strings lowercased
//question: 
//will there every be an empty array?
//return every letter in the word lowercased? or just the first letter in the word?
//return a new array or mutate the original?
//pseudo:
//iterate through elements in the array, check the type, if the element is a string, call .toLowerCase()

function arrayLowerCase(arr) {
    return arr.map(elem => typeof elem === "string" ? elem.toLowerCase() : elem)
  }
  