function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U')
}

//param: a 4 letter string, a combination of A,C,G,T letters
//returns: the input string but with T replaced by U
//q: empty string? case sensitive? replace all Ts?
//example: "ACGT" => "ACGU"
//pseudo: use js built in function replace 
//use regex with global flag to match all T letters in the string
