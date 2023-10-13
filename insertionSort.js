function insertionSort(array) {
  // Write your code here.

  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j -= 1;
    }
  }

  return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;

// given an array
// return the array sorted in place using insertion sort

// base case: if array is empty return empty array

// iterate through the array
// at each index,
// while the current index is > 0 and the value at the current index is less than the value at the previous index
// swap the value of the current index with the previous index =
// decrement the index by 1
// break out of the while loop when all the values up to the current index has been sorted

// time complexity of O(n^2); at each index, the algo evaluates from the value of the current index and up to that of the first index
// if the value of the current index < value of the first index
// better than bubble sort because the bubble sort algo has to do another pass through the array to check that it's sorted
// whereas insertion sort sorts the last element and is done
// bubble sort does n comparions at every pass through the array
// insertion sort does <n comparisons - once an element is sorted it stops making comparisons and moves on to the next element
// space complexity of O(1)
