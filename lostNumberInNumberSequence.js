// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

//given a sorted array of integers and a mixed array
//return the number present in the first array and not the second, if all numbers from the first
//are present in the second, return 0

//both arrays are non-empty? => yes
//any duplicates? => no
//mixArr.length is always < arr.length? => yes

//create a hashmap to keep track of numbers in the first array
//iterate through the first array, log numbers to hashmap, store them in the form of hash[num] = 1
//iterate through second array, "cancel" the value by decrementing the value of the number => hash[num] = 0
//iterate through hashmap, if there's a key with a value of greater than 1, return it
//after the iteration, if theres no key with a value of other than 0, return 0

function findDeletedNumber(arr, mixArr) {
  
    const hash = {};
    
    for (const num of arr) {
      hash[num] = 1;
    }
    
    for (const num of mixArr) {
      hash[num] = 0;
    }
  
    for (const num in hash) {
      if (hash[num] !== 0) {
        return +num
      } 
    }
    
    return 0
  }
  
//worked after moving return 0 from inside the last block to the outside
//before: 
//  for (const num in hash) {
    // if (hash[num] !== 0) {
    //     return +num
    //   } 
    // } else {
    //      return 0
    //}
//  }
//this code checks the value for the first key to see if it's 0 and exits the function there
//moving "return 0" to the outside makes the code continue to interate through the remaining key value pairs in the map
//until it finds a value of other than 0
//or until it has exhausted the map
