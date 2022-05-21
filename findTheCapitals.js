//Write a function that takes a single string (word) as argument. 
//The function must return an ordered list containing the indexes of all capital letters in the string.

//Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//given a string
//return an ordered list of all the capital letters in the string

//only a single word?
//only lettes, no numbers or special charactes?
//return empty array if given empty string?

//convert the string to an array
//iterate through each letter in the array
//check if the letter at the current index is in uppercase
//initialize output array
//if it is, push the current index to the output array

var capitals = function (word) {
	const indexes = [];
  for (let i = 0; i < [...word].length; i++) {
    if ([...word][i] === [...word][i].toUpperCase()) {
      indexes.push(i)
    }
  }
  
  return indexes
};

