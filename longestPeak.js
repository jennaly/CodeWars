// given an array of integers
// return the length of the longest peak in the array

// a peak: adjacent integers that are strictly increasing until they reach a tip
// at which point they become strictly decreasing
// at least 3 integers needed to form a peak

// traverse array
// determine if int. at current index is a tip
// an int. is a tip if its value is greater than the value of the int. preceding it and the int. following it

// see how far each peak goes in either direction:
// initialize a left and right pointer
// left and right pointer point to indexes immediate to the bounds of the peak
// check if int. at left pointer < int. left pointer + 1;
// if it is, decrement left pointer
// repeat this until left pointer is pointing at a number that is not part of the peak
// same for right pointer
// calculate the length between left and right pointer, excluding the left and right pointer
// update the value of the longest peak
// update the value of i = right pointer

// return the length of the longest peak

function longestPeak(array) {
  let longestPeakLength = 0;

  if (array.length < 3) return longestPeakLength;

  let i = 1;

  while (i < array.length - 1) {
    let isTip = array[i - 1] < array[i] && array[i] > array[i + 1];

    if (!isTip) {
      i++;
      continue;
    }

    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }

    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx;
    }

    let currentPeakLength = rightIdx - leftIdx - 1;
    if (currentPeakLength > longestPeakLength) {
      longestPeakLength = currentPeakLength;
    }
    i = rightIdx;
  }

  return longestPeakLength;
}

// traversing the array in linear time = O(n);
// space complexity = O(1);
