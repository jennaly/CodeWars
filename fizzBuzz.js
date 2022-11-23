// Given a number as an input, 
// print out every integer from 1 to that number. 
// However, when the integer is divisible by 2, print out “Fizz”; 
// when it’s divisible by 3, print out “Buzz”; 
// when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// given a number
// print every int from 1 to said number
// when an int is divisible by 2, print fizz
// when an int is divisible by 3, print buzz
// when an int is divisible by both, print fizz buzz

// ints only? floats? 
// print => console.log ok?
// print int as a number or a string?
// will int ever be negative?

// iterate from 1 to given int with a for loop
// check if an int is divisible by a given number using % 
// if int % num = 0, then int is divisible by num
// check if ant int is divisble by 3 and 5 first 

function fizzbuzz (int) {
    for (let i = 1; i <= int; i++) {
        if (int % 15 === 0) {
            console.log("fizzbuzz")
        } else if (int % 3 === 0) {
            console.log("fizz")
        } else if (int % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(int)
        }
    }
}
                                    