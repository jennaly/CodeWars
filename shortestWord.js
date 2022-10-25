// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


//given a string of words
//return the length of the shortest word

//return an empty string if given an empty string? => yes
//return the length as a number? => yes

//"an atom is made up of protons, electrons, and neutrons" => 2

//convert string to array
//use sort method and pass in comparison function
//sort in ascending order 
//return length of first word in sorted array

function findShort(s){
    return s.split(" ").sort((a, b) => a.length - b.length)[0].length
}
  

