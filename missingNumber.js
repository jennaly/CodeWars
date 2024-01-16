function missingNumbers(nums) {
  // Write your code here.
  let hash = new Set([nums]);
  let output = [];

  for (let i = 1; i < nums.length + 3; i++) {
    if (!hash.has(i)) {
      output.push(i);
    }
  }

  return output;
}

// Do not edit the line below.
exports.missingNumbers = missingNumbers;

// given an unordered list of unique integers, nums, in the range [1, n] where n represents the length of nums + 2
// 2 numbers between 1 and n missing from the list

// return a new list with the two missing numbers, sorted numerically

// create a hash map of the integers in nums
// iterate from 1 to the length of nums + 2 ( + 3 if starting from 1 to account for zero-based indexing)
// in every iteration check if the nums exists in the map
// if not, append it to the output array
// return the output array

// time complexity: O(n)
// space complexity: O(n)
