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
