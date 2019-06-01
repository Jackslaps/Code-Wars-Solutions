// Create a function called args_count that returns the number of arguments provided
//args_count(1, 2, 3) -> 3
//args_count(1, 2, 3, 10) -> 4
//Link: https://www.codewars.com/kata/5c44b0b200ce187106452139

//My Solution
function args_count() {
  let counter = 0;
  for(let i = 0; i < arguments.length; i++) {
    counter = counter + 1;
  }

  return counter;
}

//Top Solution
function args_count() {
  return arguments.length;
}