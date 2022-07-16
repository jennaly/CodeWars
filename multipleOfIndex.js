// 8 kyu
// Multiple of index

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

//given an array of numbers
//return a new array consiting of elements that are multiple of their own index
//question
//returning elements that when divided by their own index in the array, yields a remainder of 0?  => yes
//any number that is divided by 0 yields undefinied, does that mean that number is NOT a multiple of 0? => yes
//return or console.log the output array? => return
//return the elements in the array as numbers or strings? numbers
//return empty array if none of the numbers is divisible by their respective indexes? => yes

function multipleOfIndex(array) {
    //   initialize output array
         let output = [];
      
    //   iterate through the array, check whether each element is divisible by its index
          array.forEach((num, index) => {
            if (num % index === 0 ) {
              output.push(num)
            }
          })
      
    //    return output
         return output
}