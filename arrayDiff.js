// 6 kyu
// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//given two arrays
//return an array with all the numbers from array a, except for all instances of the number(s) in array b

//remove all instances of any number in array b?
//only number? no strings or special data types?
//return new array?
//can b consist of more than one number? => yes
//is a or b every empty? => b can be empty, so no number would be removed from a
//if a is empty, return an empty array

//check if a is empty, if it is, immediately return an empty array
//check if b is empty, if it is, immediately return a
//filter numbers in a that are not present in b

function arrayDiff(a, b) {
    if (a.length == 0 || b.length == 0) {
      return a 
    }
    
    return a.filter(num => !b.includes(num))
  }
  

//for O(1) time complexity
//Set.has operates at constant time

function arrayDiff(a, b) {
  return (a.length == 0 || b.length == 0) ? a : a.filter(e => !new Set(b).has(e))
}  