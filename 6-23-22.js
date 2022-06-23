String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word) {
     return word.charAt(0).toUpperCase() + word.slice(1);
   }).join(" ")
   
 };
 
 //params: str
 //returns: str in camelcase
 //question: new str or modified str? will str be empty? will the first character in the first word always be capitalized by default?
 //examples: 
 //param: "How can mirrors be real if our eyes aren't real"
 //returns:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 //pseudo:
 //make a function that takes in a string
 //split up words in string into elements in an array
 //map through each element
 //capitalize first character in every word, concatenate it with the rest of the charaters in the word
 //join the array elements into a string