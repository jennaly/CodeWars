// Unique In Order
//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//given a string 
//return a sequence of characters from the string as an array
//without any elements with the same value next to each other
//original order preserved

//string consists of letters and numbers, no special characters?
//return elements in an array?
//case sensitive? c and C are different elements?

//Set doesn't work because it returns only unique elements
//We're not returning unique elements, just elements that are not placed next to those of the same value
//convert string to array
//iterate through array
//filter for elements whose value is not the same as that of the preceding element

var uniqueInOrder = function(iterable) {
    return [...iterable].filter((e, index) => e !== iterable[index - 1])
  }
  
  
  