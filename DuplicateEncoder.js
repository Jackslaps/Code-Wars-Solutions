/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes:

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 */

function duplicateEncode(word) {
    let wordArray = word.toLowerCase().split("")
    let compArray = wordArray;

    let encodeArray = [];

    for(i = 0; i < wordArray.length; i++) {
        let counter = 0;
        
        for(j = 0; j < wordArray.length; j++) {
            if(compArray[j] == wordArray[i]) {
                counter++;
            }
        }

        if(counter > 1) {
            encodeArray.push(")")
            counter = 0;
        } else {
            encodeArray.push("(")
            counter = 0;
        }
    }

    return encodeArray.join("")
}

// Top Answer

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}