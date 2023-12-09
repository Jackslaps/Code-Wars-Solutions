/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
  return str.split("").reverse().join("")
}

// Top answer

function solution(str){
  return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
}