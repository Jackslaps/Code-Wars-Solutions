/*
https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
*/


//My Code
function alphabetPosition(text) {
    let textChars = text.split("");
    let position = []
  
  
    textChars.forEach(function(letter) {
      let upperCase = letter.toUpperCase();
      let asciiCode = upperCase.charCodeAt(upperCase);
  
      if(asciiCode <= 90 && asciiCode >= 65) {
        let alphaPos = asciiCode - 64;
        position.push(alphaPos);
      }
    })
  
    return position.join(" ");
  }


//Top Solution
function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map( (c) => c.charCodeAt() - 64)
        .join(' ');
}
