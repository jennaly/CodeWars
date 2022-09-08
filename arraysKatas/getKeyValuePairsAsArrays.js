// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

function keysAndValues(data){
    let output = [[], []]
    for (let key in data) {
      output[0].push(key);
      output[1].push(data[key]);
    }
    return output
  }
  
  //given: an object of key and value pairs
  //returns: an array of keys and values as separate arrays
  //ex: keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
  //pseudo:
  //make output array, consisting of two empty sub arrays
  //iterate through data object
  //for each pair, push the key to output array at index 0
  //push the value to output array at index 1