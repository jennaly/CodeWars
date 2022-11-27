// 8 kyu
// Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//given a number
//return the number negative

//positive numbers only? 
//return the same number if given a negative number?
//floats?
//only numbers? no strings?
//return 0 if given 0?

//check if a number is greater than 0, if it is, return the number * -1
//if the number is 0 or less, return the number itself

const makeNegative = num => num > 0 ? num * -1 : num
