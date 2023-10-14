function selectionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    // assume that the first number in the unsorted list is the smallest
    let smallestNum = array[i];
    let smallestNumIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallestNum) {
        smallestNum = array[j];
        smallestNumIndex = j;
      }
    }
    // swap num at current index with smallest num index
    let temp = array[smallestNumIndex];
    array[smallestNumIndex] = array[i];
    array[i] = temp;
  }

  return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;

// given an array
// sort the array from least to greatest in place using selection sort

// iterate through the array
// at every index, initialize a variable for the smallest number in the unsorted list
// iterate through the unsorted list to get the smallest number
// if the smallest number is at the first index of the unsorted list, exit out of the loop
// and move on to the next unsorted element in the array
// otherwise, swap the smallest number with the number at the first index of the unsorted list
// move on to the next unsorted element in the array

// return the array
