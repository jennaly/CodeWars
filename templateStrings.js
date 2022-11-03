//8 Kyu
// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

//params: 2 strings
//returns: strings concatenated with "are" and template literals
//ex: ("dogs", "great") => "dogs are great"
//pseudo:
//return `${obj} are ${feature}`

var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
  }
  
    