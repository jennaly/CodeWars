// given an array of arbitrary intervals
// return the new intervals in no particular order, but merge any overlapping intervals
// back to back intervals aren't considered to be overlapping
// the start of any interval will always be less than or equal to the end of that interval

function mergeOverlappingIntervals(array) {
  // Write your code here.
  let sorted = array.sort((a, b) => a[0] - b[0]);
  let output = [];

  output.push(array[0]);

  for (let i = 1; i < array.length; i++) {
    let nextInterval = array[i];
    let nextIntervalStart = nextInterval[0];
    let nextIntervalEnd = nextInterval[1];
    let currentInterval = output[output.length - 1];
    let currentIntervalEnd = currentInterval[1];

    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      output.push(nextInterval);
    }
  }

  return output;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;

// when comparing 2 intervals, for them to be overlapping the ending value in the first array >= the starting value in the second array
// to compare adjacent intervals, have the intevals sorted by their starting value
// traverse through the arrays
// at each iteration, compare the end of the current interval with the start of the next interval
// if they overlap, mutate the current interval to merge the next interval into it
// if they don't overlap, append the current interval to the output array as is

// time complexity: O(nlogn) because of the sorting algorithm
// space complexity: O(n) where n is the length of the input array where in the worst case scenario, none of the
// given intervals overlap, and the length of the output array is === the length of the input array
