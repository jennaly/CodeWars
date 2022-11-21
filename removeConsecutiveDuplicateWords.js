// 7 kyu
// Remove consecutive duplicate words

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

//given a series of words in a string
//return the string with the consecutive duplicates removed

//only alphabetical characters? any special characters or numbers?
//return empty string if given empty string?
//duplicates can stay, just as long as they're not consecutive to one another?
//case sensitive? "gamma GAMMA" => "gamma" or "gamma GAMMA"?

//convert string to array, assuming that the algorithm is case-insentive, convert the entire string to lowercase
//iterate through array
//filter out words that do not match with the preceding word
//return the filtered array as a string

const removeConsecutiveDuplicates = s => {
    //base case:
    if (!s.length) return ""
    
    return s.toLowerCase().split(" ").filter((word, index) => word !== s.split(" ")[index - 1]).join(" ")
  }
  
//readability or one-liners?

const removeConsecutiveDuplicates = s => s.length ? s.toLowerCase().split(" ").filter((word, index) => word !== s.split(" ")[index - 1]).join(" ") : ""
   
//if algorithm is case sensitive:
const removeConsecutiveDuplicates = s => s.length ? s.split(" ").filter((word, index) => word !== s.split(" ")[index - 1]).join(" ") : ""
