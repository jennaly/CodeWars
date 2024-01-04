function firstDuplicateValue(array) {
  let minIndex = Infinity;
  let firstDuplicate = -1;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === array[i]) {
        if (j < minIndex) {
          minIndex = j;
          firstDuplicate = array[j];
        }
      }
    }
  }
  return firstDuplicate;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;

// traverse the array
// initialize a variable to store the index value of the first duplicate
// at every index, traverse the array again and check if current int.
// exists at any other index in the rest of the array
// if it does, compare the minINdex with the current index
// if the current index is less than the minimum index, update the minimum Index

// time complexity of O(n^2) because at every index in the array,
// we're traversing the rest of the array to find duplicate values
// space complexity: O(1)

function firstDuplicateValue(array) {
  // Write your code here.
  const frequencyHash = {};

  for (const int of array) {
    if (frequencyHash[int]) {
      return int;
    } else {
      frequencyHash[int] = 1;
    }
  }

  return -1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;

// given an array of integers between 1 and n
// where n is the length of the array
// return the first integer that appears more than once

// if no integer appears more than once, return -1

// traverse the array and record the frequency of each integer
// in a hash map
// if an integer already exists in the map, return it
// otherwise, intialize it with a value of 1
// if no integer is returned by the loop,
// return - 1

// time complexity: O(n);
// space complexity: O(n);
