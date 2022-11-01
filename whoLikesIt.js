// 6 kyu
// Who likes it?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//given an array of names that a like a picture
//return a statement that lists those people in the following format
//if there is nobody, aka the array is empty => "no one likes this"
//if one person, => "person1 likes this"
//if two people => "person1 and person2 like this"
//if three people => "person1, person2, and person3 like this"
//if theres more than 4 people => "person1, person2 and [array.length - 2] others like this"

//array could be non-empty? => yes
//return the output statement as a string? => yes
//array consists of strings, will the strings consist of any special charactes or symbols?

//implement conditionals check for the length of the array

function likes(names) {

    if (names.length == 0) {
        return "no one likes this"
    } else if (names.length == 1) {
        return `${names[0]} likes this`
    } else if (names.length == 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length == 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}

function likes(names) {
  
    let output = ""
    switch (names.length) {
        case 0: 
          output = "no one likes this"
          break;
        case 1:
          output = `${names[0]} likes this`
          break;
        case 2: 
          output = `${names[0]} and ${names[1]} like this`
          break;
        case 3:
          output = `${names[0]}, ${names[1]} and ${names[2]} like this`
          break;
        default: 
          output = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
    
    return output
  }
  