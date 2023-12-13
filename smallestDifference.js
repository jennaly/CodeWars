// given two non-empty arrays of integers
// find the pair of numbers (one from each array)
// whose absolute difference is closest to 0
// return the two numbers in an array

// absolute difference = absolute value of (x - y)

// sort arrays to be able to use pointers
// use pointers to traverse the arrays
// efficiently and evaluate which pointer
// to move to get to the pair with smallest
// difference

// traverse through the array using pointers
// at every iteration check if current difference === 0
// if so return the current pointer-numbers
// if the difference is not 0 but is less than the current
// smallest difference, then update all variables
// then move pointers along:
// compare pointer numbers, adjust the pointer for the least pointer-number
// so that it is closer to the other pointer-number
// (move smaller number to greater number for smaller difference)

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let smallest = Infinity;
  let pair = [];
  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    let currentDifference = Math.abs(
      arrayOne[pointerOne] - arrayTwo[pointerTwo]
    );

    if (currentDifference === 0) {
      pair = [arrayOne[pointerOne], arrayTwo[pointerTwo]];
      break;
    } else if (currentDifference < smallest) {
      pair = [arrayOne[pointerOne], arrayTwo[pointerTwo]];
      smallest = currentDifference;
    }

    if (arrayOne[pointerOne] < arrayTwo[pointerTwo]) {
      pointerOne++;
    } else {
      pointerTwo++;
    }
  }

  return pair;
}

// time complexity:
// sorting first array => O(nlogn) where n is the length of the first array
// sorting second array => O(mlogm) where m is the length of the second array
// traversing first array => O(n)
// traversing second array => O(m)
// => O(nlogn + mlogm)

// space complexity:
// output array of length 2 and a few variables
// this is constant regardless of input size
// => O(1)

// another variation:
// given an array of distinct integers
// return all pairs of elements with the minimum absolute difference

// sort the array
// traverse through the array
// at every index, check if the current number and the number next to it has an absolute difference < smallest difference
// if absolute difference < smallest difference, "overwrite" the value of pairs var and update smallest difference to == absolute difference
// if absolute difference = smallest difference, push the new pair to the pairs array
// if absolulte difference > smallest difference, move to next index

var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let smallestDifference = Infinity;
  let pairs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let absoluteDifference = Math.abs(arr[i] - arr[i + 1]);

    if (absoluteDifference < smallestDifference) {
      smallestDifference = absoluteDifference;
      pairs = [[arr[i], arr[i + 1]]];
    } else if (absoluteDifference === smallestDifference) {
      pairs.push([arr[i], arr[i + 1]]);
    }
  }

  return pairs;
};

// time complexity:
// sorting the array => O(nlogn)
// traversing the array => O(n)
// calculating the absolute difference and comparing it to the smallest difference => O(1)
// => O(nlogn) where n is the length of the array
// space complexity:
// O(1)
