// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


//given an array of numbers
//return the number that only appears once

//array is non-empty? => yes
//array will always have a number that only appears once? => yes
//there will always be only one number that appears once? => yes
//elements are numbers? => yes
//return output as a number? => yes

//iterate through numbers in the array
//use .indexOf() and .lastIndexOf() to check if a number appears at more than one index
//if .indexOf === .lastIndexOf(), the number only appears at a single index
//return it


function stray(numbers) {
    for (const num of numbers) {
        if (numbers.indexOf(num) === numbers.lastIndexOf(num)) {
            return num
        }
    }
}
      

//another way to do this is with a hashmap
//iterate through the array, if a number is already in the map, increment its value
//if it's not already in the map, log it 
//iterate through the keys in the map
//if any value == 1, return the key

function stray(numbers) {
    const hash = {};

    for (const num of numbers) {
        if (hash[num] !== undefined) {
            hash[num]++
        } else {
            hash[num] = 1
        }
        }

    for (const key in hash) {
        if (hash[key] === 1) {
            return +key
        }
    }
}
