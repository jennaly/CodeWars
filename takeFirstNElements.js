// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  // Your code here
  let output = [];

  for (let i = 0; i < n; i++) {
    output.push(arr[i]);
  }

  return output;
}

// iterate through array up to nth index
// push each element to output array
// return output array

// time complexity of O(n) where n is n
// space complexity of O(1)
