function correctTail(bod, tail) { 
    sub = bod.substr(bod.length - tail.length)
    
    if (sub == tail) {
      return true
    } else {
      return false
    }
  }

  function openOrSenior(data){
    let output = [];
    data.forEach(pair => pair[0] >= 55 && pair[1] > 7 ? output.push("Senior") : output.push("Open"));
    return output
  }
  
  //params: array with data pairs that indicate [age, handicap]
  //returns: an array with values corresponding to the senior-eligibility of data pairs
  //example: [18,20] => "Open"; [61,12] => "Senior"
  //pseudo: 
  //make a new array
  //loop through each data set in the data array
  //test each pair against conditions: if a > 55 AND b > 7 => "senior", if not => "open"
  //push result of each pair into new array
  
  