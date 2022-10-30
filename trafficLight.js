// 8 kyu
// Thinkful - Logic Drills: Traffic light
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

//given current state of light
//return a string representing the next state 

//green => yellow ? 
//yellow => red ?
//red => green?
//current will always be green, yellow, or red?
//current will always be a string?
//return output as a string?

//implement conditionals
//if current light is green, return yellow
// if current light is yellow, return red
// if current light is red, return green

function updateLight (current) {
    if (current === "green") {
      return "yellow"
    } else if (current === "yellow") {
      return "red"
    } else {
      return "green"
    }
}
  