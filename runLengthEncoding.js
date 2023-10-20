function runLengthEncoding(string) {
    // Write your code here.
  
    let currentSeqChar = string[0];
    let runningLength = 1;
    const encodedString = [];
  
    for (let i = 1; i <= string.length; i++) {
      if (string[i] === currentSeqChar && runningLength < 9) {
        runningLength += 1;
      } else {
        encodedString.push(runningLength);
        encodedString.push(currentSeqChar);
        runningLength = 1;
        if (string[i] !== currentSeqChar) {
          currentSeqChar = string[i];
        }
      }
    }
  
    return encodedString.join("")
  }
  
  // Do not edit the line below.
  exports.runLengthEncoding = runLengthEncoding;
  
  // given a non empty string
  // return its run-length encoding (a string)
  
  // a run of data is any sequence of consecutive characters
  // long runs of 10 or more characters should be encoded in a split fashion
  
  // initialize a variable to store the current consecutive character
  // initialize a variable to store the running length
  // initialize an output array
  // iterate through the string
  
  // at each character:
  // check if the current character is === current consecutive char
  // check if the running length === 9
  // if current char ==== current consecutive char && running length < 9, increment running length by 1
  // if current char === current consecutive char but running length === 9:
  // push running length and current consecutive char to output array
  // reset the running length to 1
  
  // if current char !== current consecutive char then
  // push running length and current consecutive char to output array
  // reset the running length to 1
  // reassign the current consecutive char = current char

  // time complexity: iterating thru string => O(n) where n is the length of the input string
  // space complexity: creating an output array => O(n) 