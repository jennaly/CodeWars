// Building Strings From a Hash

// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

//given an object
//return the key value pairs as a string, separated by a comma
//in the format "key = value"
//pseudo
//iterate through the object
//make an array to store the keys and values
//join the array as a string, return the string

function solution(pairs){
  let output = []
  for (let key in pairs) {
    output.push(`${key} = ${pairs[key]}`)
  }
  return output.join(",")
}
