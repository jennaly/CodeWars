// given an array of distinct integers and an integer representing a target sum
// return an array of triplets that sum up to the target sum

// array consists of DISTINCT integers

// using 3 nested for loops ends up an O(n^3) time complexity

// another approach is to sort the array
// then iterate through the array
// and at each index use two pointers to find numbers
// that could add up with the current number to equal the target sum

function threeNumberSum(array, targetSum) {
  const triplets = [];

  // base case: need at least 3 numbers for there to be a triplet
  if (array.length < 3) return triplets;

  // sort the array to use pointers
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length - 2; i++) {
    // because the array is sorted from least to greatest
    // if the current number is greater than the target number
    // then exit the loop and return the output
    // because the rest of the array will be greater than
    // the current number and cannot sum to the target number
    if (array[i] > targetSum) break;

    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];

      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }

  return triplets;
}

// if the array can consist of duplicate integers and
// requires the output to consist only of unique triplets,
// then implement logic to account for duplicated numbers in the outer for loop
// and the pointers

function threeSum(array, targetSum) {
  const triplets = [];

  if (array.length < 3) return triplets;

  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] > targetSum) break;

    if (array[i] === array[i - 1]) continue;

    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];

      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);

        // increment left and decrement right for as long as
        // they are duplicated integers

        while (array[left] === array[left + 1]) left++;
        while (array[right] === array[right - 1]) right--;

        // move pointers to new unique integer
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }

  return triplets;
}

// time complexity: O(n^2) || space complexity: O(n) where n is the length of the given array
