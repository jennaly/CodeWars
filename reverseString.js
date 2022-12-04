// Given a string of characters as input, 
// write a function that returns it with the characters reversed. 
// No Reverse Method (well brute force it first, 
// but then no reverse method)! 

// given a string
// initialize output array
// iterate string from last index to first
// at each index, push letter at current index to output array
// return output array joined as a string

function reverseString (str) {
    const output = [];

    for (let i = str.length - 1; i >= 0; i--) {
        output.push(str[i])
    }

    return output.join("")
}