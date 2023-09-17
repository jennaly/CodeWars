// given an array of integers
// return a sorted version of the array using the bubble sort algorithm

function bubbleSort(array) {
    // Write your code here.
    let swapped = true;
    while (swapped) {
      swapped = false;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i+1]) {
          let temp = array[i];
          array[i] = array[i+1];
          array[i+1] = temp;
          swapped = true;
        }
      }
    }
    
    
    return array
  }
// swap elements as needed
// if elements are already in their correct relative places, no swapping is needed
// iterate through array until we're not swapping elements anymore

// while swap = true: 
// make swap = false, if no elements are swapped during the iteration, 
// swap will stay false => break out of while loop
// iterate through the array
// at every index, check if the value 
// at the current index is greater than 
// the one next to it
// if so, have them swap places
// make swap = true;

// return array
  