// 7 kyu
// Credit Card Mask

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"


//given a credit card number, phone number, or an answer to a secret question
//return the number with only the last four visible, the rest being replaced with "#"

//is the credit card number/phone number a number or a string? => a string
//return the masked number as a string? => yes
//string.length <= 4? => only mask characters if there's more than 4

//check if the length of string is greater than 4
//if it's not, return the string as is
//if it is, 
//convert the string to an array
//iterate through the array, if a character is at an index less than array.length - 4, map a value of #, 
//if it is an index equal or greater to array.length - 4,
//map the value itself
//return the values in the new array joined as a string

function maskify(cc) {
    if (cc.length <= 4) {
      return cc
    }
    return [...cc].map((char,index) => index >= [...cc].length - 4 ? char : "#").join("")
}
  
  
