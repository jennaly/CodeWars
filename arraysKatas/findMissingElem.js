// Find the missing element between two arrays
// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// The first array will always have at least one element.

function findMissing(arr1, arr2) {
    const hash = {};
    
    for (const num of arr1) {
      if (num in hash) {
        hash[num]++
      } else {
        hash[num] = 1
      }
    }
    
    for (const num of arr2) {
      if (num in hash) {
        hash[num]--
      }
    }
    
    for (const num in hash) {
      if (hash[num] > 0) {
        return Number(num)
      }
    }
  }
  
  //given two integer arrays
  //return the element present in the 1st array and not in the 2nd array
  //ex: find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
  //qs: number type? only one missing elem?
  //pseudo:
  //iterate through 1st array
  //for each elem check if it's in the hash map
  //if it is, increment it
  //if it isn't, set hash[arr1[i]] = 1
  //iterate through 2nd array
  //for each elem check if its in the map
  //if it is, decrement it
  //check to see if theres any num in the hash with a value greater than 0