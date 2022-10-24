// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//given an array of integers
//return the one integer that appears in the array an odd amount of times

//array is non-empty? => yes
//array consists only of integers? => yes
//all integers will be number type? => yes
//return the integer as a number? => yes
//there will always only be one integers that occurs an odd amount of times? => yes

//[1,1,1,2,2,4,4,4,4] => 1
//[2] => 2

//check if length of array = 1, if so, return the one element in the array
//make hash table to keep track of the numebr of times an int appears in the array
//iterate through the map, if the value is odd, return the key as a number (keys in objects are stored as strings)

function findOdd(A) {
    if (A.length == 1) {
      return A[0]
    }
    
    const hash = {};
    
    for (const num of A) {
      if (hash[num]) {
        hash[num]++
      } else {
        hash[num] = 1
      }
    }
    
    for (const key in hash) {
      if (hash[key] % 2 !== 0) {
        return +key
      }
    }
}