// Delete occurrences of an element if it occurs more than n times

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].


 //params: motif numbers, n
  //returns: new array 
  //questions: are they integers (number types)? -> yes
  //can they repeat -> yes, remove the repeated numbers
  //will the list ever be empty?
  //examples: n = 2 | [1,2,3,1,2,1,2,3] => [1,2,3,1,2,3]
  //pseudo code: 
  //1. make new empty array
  //2. make empty object 
  //3. for each number in the given array, increment said number's counter every time it appears
  //4. if the counter is still under or equal to n, it can be pushed into the new array, for numbers whose counters exceeds n, they don't get pushed to the new array
  //5.return the new array


function deleteNth(arr,n){
    const output = [];
    let counts = {};
    arr.forEach((num) => {
  
      if (counts[num]) {
        counts[num] ++
      } else {
        counts[num] = 1;
      }
      
      
      if (counts[num] <= n) {
        output.push(num);
      }
      
      
    })
    return output;
  }
  
  
 