// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

//given an array of numbers
//return a set of two numbers, first num being the total weight of the people in team 1, second num being the total weight of the people in team 2

//first, third, etc. person always goes to team 1?
//second, fourth, sixth, person always goes to team 2?
//array never empty?

//iterate through array
//initialize variables for teams 1 and 2
//for elems at odd indexes, increment value for team 1
//for elems at even indexes, increment value for team 2

function rowWeights(array){
    let team1 = 0;
    let team2 = 0;
    
    array.forEach((e,i) => i % 2 ? team2 += e : team1 += e)
    
    return [team1, team2]
  }
  
  
  