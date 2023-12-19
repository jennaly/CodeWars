// given an array of integers
// return a boolean representing whether the array is monotonic

// monotonic: when elements, from left to right, are entirely non-increasing, or non-decreasing
// non-increasing: elements don't increase. Could stay the same or decrease
// non-decreasing: elements don't decrease. Could stay the same or increase

// empty arrays and arrays of one element are monotonic.

function isMonotonic(array) {
  // Write your code here.
  let pattern;

  if (array.length < 2) return true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
      if (array[i] > array[i + 1]) {
        pattern = "nonIncreasing";
      } else {
        pattern = "nonDecreasing";
      }

      break;
    }
  }

  if (pattern == "nonIncreasing") {
    for (let j = 0; j < array.length - 1; j++) {
      if (!isNonIncreasing(array[j], array[j + 1])) {
        return false;
      }
    }

    return true;
  }

  if (pattern == "nonDecreasing") {
    for (let k = 0; k < array.length - 1; k++) {
      if (!isNonDecreasing(array[k], array[k + 1])) {
        return false;
      }
    }

    return true;
  }

  return true;
}

// numbers stay the same or decrease
function isNonIncreasing(a, b) {
  if (b <= a) {
    return true;
  } else {
    return false;
  }
}

// numbers stay the same or increase
function isNonDecreasing(a, b) {
  if (b >= a) {
    return true;
  } else {
    return false;
  }
}

// initialize values for the two trends, isNonDecreasing(upwards) and isNonIncreasing(downwards)
// traverse through the array
// at every index, check if the numbers at the current and following index shows upwards or downwards trend
// if upwards, change the value of isNonIncreasing to false
// vice versa
// if a trend is consistent throughout the array, its value will be true
// return isNonDecreasing || isNonIncreasing => return the first expression if it's true, otherwise return the value
// of the second expression
// if one of them is true, the array is monotonic, function returns true
// if both of them are true (same number throughout array), the array is monotonic, function returns true
// if both of them are false, the array is not monotonic (integers increased and decreased), function returns false

// time complexity of O(n)
// space complexity of O(1)

function isMonotonic(array) {
  // Write your code here.
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] > array[i]) {
      //upwards trend
      isNonIncreasing = false;
    } else if (array[i + 1] < array[i]) {
      // downwards trend
      isNonDecreasing = false;
    }
  }

  return isNonDecreasing || isNonIncreasing;
  // if (isNonDecreasing) return true
  // if (isNonIncreasing) return true
  // if (!isNonDecreasing && !isNonIncreasing) return false
}
