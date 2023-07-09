// given a non-empty array of integers sorted in ascending order
// return a new array of the same length with the squares of the original integers also sorted in ascending order

function sortedSquaredArray(array) {
  // Write your code here.
  return array.map((num) => num ** 2).sort((a, b) => a - b);
}

// iterate through integers in original array
// map the value of the current int. squared to a new array
// sort the new array (in case of negative integers)
// return the new array

// time complexity of O(n) + O(n log n) => O(n log n) because n < n log (n)
// space complexity of O(n) where n is the size of the given array

function sortedSquaredArraySolutionTwo(array) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  const output = [];

  while (leftIdx <= rightIdx) {
    let leftValue = array[leftIdx];
    let rightValue = array[rightIdx];
    let leftValueSquared = leftValue * leftValue;
    let rightValueSquared = rightValue * rightValue;

    if (leftValueSquared < rightValueSquared) {
      output.unshift(rightValueSquared);
      rightIdx -= 1;
    } else {
      output.unshift(leftValueSquared);
      leftIdx += 1;
    }
  }

  return output;
}

// another way is to compare values on the two extremes of the array
// initialize a left and right pointer
// while left pointer <= right pointer:
// compare value of left pointer squared vs right pointer squared
// if left pointer squared value > right pointer squared value:
// add left pointer squared value to output array (use unshift to fill output array from right to left)
// increment left pointer
// if right pointer squared > left pointer squared:
// add right pointer squared value to output array
// decrement right pointer
// return output array

// time complexity of O(n)
// iterate through each value in the given array 1 time = O(n)
// add values to output array using .unshift() = O(n);
// O(2n) => O(n)

// space complexity of O(n)
