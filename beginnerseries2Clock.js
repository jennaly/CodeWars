// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:

// h = 0
// m = 1
// s = 1

// result = 61000


//given a value for hour, minutes, and seconds
//return the value of milliseconds

//h,m, and s are numbers?
//h,m, and s are always positive? 
//return milliseconds as a number?
//1 s = 1000 ms?
//1 m = 60 s? => 60,000 ms
//1 hr = 60 m = 3600 s? => 3,600,000 ms? 
//any commas in final value?

//return the sum of h(3600000) + m(60000) + s(1000)

function past(h, m, s){
    return (h*3600000) + (m*60000) + (s*1000)
  }
  