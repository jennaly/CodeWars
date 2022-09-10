// Some people really wonder why JavaScript arrays don't have a remove function to remove an element.

// Go ahead and make one.

// var someArray = [1, 2, 3];
// someArray.remove(1);
// This should remove the element on index 1 making someArray = [1, 3]

// You also need to handle invalid inputs: If index is not a number or out of bounds, return the array unchanged

Array.prototype.remove = function(index) {
    if (typeof index == "number" && index > 0 && index < this.length) {
      this.splice(index,1);
    }
    return this
  };
  
  //params: given an array of elements and a number that specifies the index where one element is to be removed
  //return: the array with the element at the specified index removed
  //ex: ([1,2,3], 1) => [1,3]
  //pseudo:
  //validate that index is a number and that index is within the bounds: greater than 0 and less than array.length
  //use .splice