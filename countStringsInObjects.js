
// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:
// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3


//given an object with properties and properties values that may contain strings
//return the number of string values found in the object
//ex: 
//const object1 = {
// a: "1",
// b: "2",
// c: 23
//}
//returns 2
//pseudo:
//use Object.values() to return an array of property values
//initialize a variable to use a counter to keep track of the number of strings
//iterate through the values Array, for each element, 
//check if the elemnt is an object
//if it is, pass the current element as an argument in the main function
//check if the element is a string
//if it is, increment the counter
//return the counter value

function strCount(obj){
    var count = 0;
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        count += strCount(obj[key])
      }
      if (typeof obj[key] === "string") {
        count += 1
      }
    }
    return count
  }
  
  