// given two non-empty arrays of integers
// return a boolean, true if the second array is a subsequence of the first one

function isValidSubsequence(array, sequence) {
  // Write your code here.
  for (let i = 0; i <= array.length - 1; i++) {
    if (sequence[0] === array[i]) {
      sequence.shift();
      if (sequence.length == 0) {
        return true;
      }
    }
  }

  return false;
}

// iterate through main array
// in each iteration, check for 1st value in sequence
// if it exists, remove it from the sequence array using array.shift();
// check if sequence array is still non-empty, if so repeat
// if sequence array is empty, return true;
// if main array has been iterated through but sequence array is still not empty, return false

// time complexity of O(n^2) because in each iteration of the main array, we may also use array.shift(), which has a O(n) time complexity
// O(1) space complexity

function isValidSubsequenceSolutionTwo(array, sequence) {
  // Write your code here.
  if (sequence.length > array.length) return false;

  let sequenceIndex = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === sequence[sequenceIndex]) {
      if (sequenceIndex === sequence.length - 1) {
        return true;
      } else {
        sequenceIndex += 1;
      }
    }
  }

  return false;
}

// iterate through the main array
// in each iteration, check if current number in the array === sequence[index];
// if yes, check if sequence[index] is the last index in the sequence; (current index === sequence.length - 1)
// if yes, return true;
// if no, check for sequence[index + 1] for the next iteration in the main array

// time complexity of O(N) because we are iterating through both arrays at the same time
// space complexity of O(1)
