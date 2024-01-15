function zeroSumSubarray(nums) {
  // Write your code here.
  const sums = new Set([0]);
  let currentSum = 0;

  for (const num of nums) {
    currentSum += num;
    if (sums.has(currentSum)) return true;
    sums.add(currentSum);
  }

  return false;
}

// Do not edit the line below.
exports.zeroSumSubarray = zeroSumSubarray;

// given a list of integers, nums
// return a boolean value representing whether there is a zero-sum subarray of nums

// a subarray is any contiguous section of the array

// traverse htrough the array
// keep track of the cummulative sum during iteration
// in each iteration check if the sum has appeared before
// if it has, return true
// at the end return false
