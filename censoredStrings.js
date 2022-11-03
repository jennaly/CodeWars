
// 7 Kyu
// Ce*s*r*d Strings
// My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).
// Fortunately, I discovered that the virus hides my censored letters inside root directory.
// It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.

//params: string with * randomly dispersed, string with replacement characters
//returns: string with * replaced by characters in given pattern
//example: uncensor("A**Z*N*", "MAIG") ➜ "AMAZING"
//pseudo:
//iterate through infected string
//assign discoveredIndex = 0 outside of loop
//declare corrected (output) string
//if current character in infected string is *, replace * with discovered[discoveredIndex]
//increment discovered Index
//if not, move on to next character
//add infected[i] to correctedStr
//return output str

function censorStr(infected, replacement) {
    let replacementIdx = 0;
    let correctedStr = '';
    for (let i = 0; i < infected.length; i++) {
      if (infected[i] == '*') {
        correctedStr += replacement[replacementIdx];
        replacementIdx++;
      } else {
        correctedStr += infected[i];
      }
    }
    return correctedStr
  }
  