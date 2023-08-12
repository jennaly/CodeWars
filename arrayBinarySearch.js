// given an array of integers and a target integer
// return the index of the target integer if it exists in the array, otherwise -1 
function binarySearch(array, target) {
    // Write your code here.
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      let potential = array[middle];
  
      if (target === potential) {
        return middle;
      } else if (target < potential) {
        right = middle - 1;
      } else if (target > potential) {
        left = middle + 1;
      }
    }
  
    return -1;
    
  }

  // initialize a variable for the left pointer (initial value = first index)
// initialize a variable for the right pointer (initial value = last index)

// while the left pointer <= right pointer
// initialize a variable for the middle 
// intialize a variable for the potential match (array[middle])
// if potential match === target => return middle 
// if target < potential match => shift right pointer to left of the middle pointer;
// if target > potential match => shift left pointer to right of the middle pointer;
// return -1 outside of while loop

// time complexity is O(nlogn) because with binary search we're 
// splitting the number of indexes we have to traverse
// in half.
// space complexity is O(1) because we're not storing anything that would
// increase proportionally to the input