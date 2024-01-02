function arrayOfProducts(array) {
  // Write your code here.
  let output = [];

  for (let i = 0; i < array.length; i++) {
    let product = 1;

    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        product *= array[j];
      }
    }
    output.push(product);
  }

  return output;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;

// given a non-empty array of integers
// return an array of the same length, where each element in the output array is equal
// of the product of every other number in the input array

// time complexity: O(n^2)
// space complexity: O(n)

function arrayOfProducts(array) {
  // Write your code here.
  // create array of prefixes
  let prefixes = [];
  let leftProduct = 1;
  for (let i = 0; i < array.length; i++) {
    prefixes.push(leftProduct);
    leftProduct *= array[i];
  }

  // create array of suffixes
  let suffixes = new Array(array.length);
  let rightProduct = 1;
  for (let j = array.length - 1; j >= 0; j--) {
    suffixes[j] = rightProduct;
    rightProduct *= array[j];
  }

  // create array with product of both arrays
  let result = [];
  for (let k = 0; k < array.length; k++) {
    result.push(prefixes[k] * suffixes[k]);
  }

  return result;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;

// time complexity: O(n)
// space complexity: O(n)

function arrayOfProducts(array) {
  // Write your code here.

  let result = new Array(array.length);

  // traverse through array from left to right
  // inserting prefixes to result array
  let prefix = 1;
  for (let i = 0; i < array.length; i++) {
    result[i] = prefix;
    prefix *= array[i];
  }

  // traverse through array from right to left
  // multiply suffixes to existing values in result array
  let suffix = 1;
  for (let j = array.length - 1; j >= 0; j--) {
    result[j] *= suffix;
    suffix *= array[j];
  }

  return result;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;

// time complexity: O(n);
// space complexity: O(n) but uses fewer auxillary structures
