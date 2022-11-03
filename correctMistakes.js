//Correct the mistakes of the character recognition software
//Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.


function correct(string) {
	const arr = string.split('');
  for (let i = 0; i <= arr.length; i++) {
    switch (arr[i]) {
      case '5':
        arr.splice(i, 1, 'S');
        break;
      case '0':
        arr.splice(i, 1, 'O');
        break;
       case '1':
        arr.splice(i, 1, 'I');
        break;
    }
  }
  return arr.join('');
}

//param: string, may contain a mistake where theres a number in place of a letter
//returns: string with corrected mistake (if there were any)
//questions: contain multiple mistakes? modify str or return new str?
//ex: "L0ND0N"),"LONDON");
// ("DUBL1N"),"DUBLIN");
// ("51NGAP0RE"),"SINGAPORE");
// ("BUDAPE5T"),"BUDAPEST");
//pseudo:
//split string into array
//loop through array 
//test against conditional 
//if case: a number, use splice to remove said element from array and add correct value
//.join() after to return string