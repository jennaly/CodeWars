//Title Case
// string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

//given a title string, and a string of insignificant words
//return the title string, with each word capitalized, except for insignificant words

//strings include any special characters? numbers? 
//return output title as a string?
//return empty string if given empty string?
//will minorWords ever be empty?

//base case: if string is empty, return empty string
//convert words in minorWords string to words in an array
//iterate through minorWords array and log to a hash map for constant lookup

//convert title to list of words in an array
//use map to transform letters and map value to new array
//if the word is at index 0, return the word capitalized
//if the word is not at index 0, check if the word is the minorWords hashmap
//if it is, return it with all lettes lowercased
//if it is not, return it capitalized

function titleCase(title, minorWords) {
    if (!title.length) {
      return ""
    }

      
    if (!minorWords) {
        return title
                .split(" ")
                .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
                .join(" ")
    }
  
    const hash = {}
    
    for (const word of minorWords.toLowerCase().split(" ")) {
      hash[word] = true;
    }
    
    return title
            .split(" ")
            .map((word, index) => index == 0 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : hash[word.toLowerCase()] ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(" ")
    
  }
  
//optimize: 
//if the word has an index of 0 or the word is significant, it is capitalized
//combine these two conditionals to shorten the number of operands in the .map expression

function titleCase(title, minorWords) {
    if (!title.length) {
      return ""
    }

      
    if (!minorWords) {
        return title
                .split(" ")
                .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
                .join(" ")
    }
    
    
    const hash = {}
    
    for (const word of minorWords.toLowerCase().split(" ")) {
      hash[word] = true;
    }
    
    return title
            .split(" ")
            .map((word, index) => (index == 0 || !hash[word.toLowerCase()]) ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word.toLowerCase())
            .join(" ")
    
  }

//NOTES:
//words in minorWords can be either in lowercase, uppercase, or capitalized
//make sure to change words in minorWords to lowercase before logging them in the hashmap
//similarly, when checking if a word in the title string is in in minorWords, convert it to lowercase

//include a base case to account for the circumstance that there is no minor word specified
//in this case, return the title string with each word capitalized
