// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums) {
  if (!nums || nums.length <= 0) return [];

  return nums.sort((a, b) => a - b);
}

// given an array of numbers
// return an array with the numbers sorted

// if nums is empty or is null, return an empty array
// modify the array?
// least - greatest?
// flat array?

// time complexity: O(nlogn)
// space complexity: O(1)
