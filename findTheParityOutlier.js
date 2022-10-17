// 6 kyu
// Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//given an array of integers
//return the outlier in the array (the only odd or the only even number)

//array consists of only integers?
//every element is a number and not a string?
//return the outlier as a number?
//return instead of console.log?
//array ever empty?

//initialize arrays for odd and even integers
//iterate through array
//if int is % 2 === 0, push to even array
//if not, push to odd array
//check which array has length == 1
//return even(or odd) array[0]

function findOutlier(integers){
    let odd = [];
    let even = [];
    
    integers.forEach(int => int % 2 === 0 ? even.push(int) : odd.push(int))
    
    return even.length === 1 ? even[0] : odd[0] 
}
  
  