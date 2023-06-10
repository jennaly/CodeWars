// takes in array of distinct integers and an integer representing the target sum
// if any two numbers in the given array sum up to the target sum then return the numbers in an array and in any order
// if no two numbers sum up to the target sum then return an empty array
// cannot add a single integer to itself
// output is an array of length = 0 or 2
// at most one pair of numbers summing up to target sum

function twoNumberSum(array, targetSum) {
  // Write your code here.

  const output = [];

  for (let i = 0; i <= array.length - 1; i++) {
    const addend = targetSum - array[i];

    for (let j = 0; j <= array.length - 1; j++) {
      if (array[j] === addend && array[j] !== array[i]) {
        output.push(array[i], array[j]);
        return output;
      }
    }
  }

  return output;
}

// iterate through the array, in each iteration, subtract targetSum by num in current iteration to get corresponding int (addend) (i loop)
// iterate through the array, in each iteration, check if num in current int. === addend? (j loop)
// if yes, push the current num in the i loop and the current num in the j loop in the output array
// return output array

// this solution has an O(n^2) time complexity because it has a nested for loop
// in each iteration, another iteration through the array is conducted
// O(1) space

function twoNumberSumSolutionTwo(array, targetSum) {
  // Write your code here.
  const output = [];

  const hash = {};

  for (let i = 0; i <= array.length - 1; i++) {
    const addend = targetSum - array[i];

    if (hash[addend]) {
      output.push(array[i], addend);
      return output;
    } else {
      hash[array[i]] = "true";
    }
  }

  return output;
}

// create an output array
// create a hash map
// iterate through array
// in each iteration, get the addend (targetSum - current num)
// check if the addend exists in the hash map
// if it does not, make the current num a key in the map
// if it does, push the current num and the addend to the output array
// return the output array

// this solution has a time complexity of O(N) + O(1) => O(N)
// in each iteration, the function gets the addend of a number and checks if it has appeared before in the array with constant time look up
// this solution also has a space complexity of O(N) where in the worst case scenario the entire array is iterated through without the addend being found, and therefore all the integers from the array are added to the map

function twoNumberSumSolutionThree(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  const output = [];

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] + array[right] === targetSum) {
      output.push(array[left], array[right]);
      return output;
    } else if (array[left] + array[right] < targetSum) {
      left += 1;
    } else if (array[left] + array[right] > targetSum) {
      right -= 1;
    }
  }

  return output;
}

// sort the array from least to greatest
// assign values to left and right pointers
// while left < right:
// check if sum of left and right pointers ===, >, < targetSum
// if sum < targetSum, move left pointer to the right
// if sum > targetSum, move right pointer to the left
// if sum === targetSum, push left and right pointers to output array
// return output array

// this solution runs in O(nLog(n)) time complexity and O(1) space;
