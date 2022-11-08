// 8 kyu
// Third Angle of a Triangle

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

//given two angles of a triangle
//return the third angle

//will a and b be numbers?
//will a and b always be positive?
//confirm: interior angles in a triangle always add up to 180?
//return the last angle as a number?

//console.log(otherAngle(30,60), 90)
//console.log(otherAngle(40,40), 100)
//console.log(otherAngle(50,50), 80)

function otherAngle(a, b) {
    return 180 - a - b
  }
  