// Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

// Notes:

// If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
// If a float is passed into the function, its value should be be rounded down, and the resulting dictionary should never contain fractions of a coin.
// Examples
// loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
// loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
// loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}

// Link: https://www.codewars.com/kata/5571f712ddf00b54420000ee

// My solution
function looseChange(cents) {
  let centsNew = cents;

  let change = {
    Pennies: 0,
    Nickels: 0,
    Dimes: 0,
    Quarters: 0
  };

  if (centsNew <= 0) return change;

  while (centsNew > 0) {
    if (centsNew >= 25) {
      centsNew = Math.floor(centsNew - 25);
      change.Quarters++;
    } else if (centsNew >= 10 && centsNew < 25) {
      centsNew = Math.floor(centsNew - 10);
      change.Dimes++;
    } else if (centsNew >= 5 && centsNew < 10) {
      centsNew = Math.floor(centsNew - 5);
      change.Nickels++;
    } else {
      change.Pennies = centsNew;
      centsNew = 0;
    }
  }

  return change;
}

// Top solution:

function looseChange(cents) {
  var a = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  if (cents <= 0) return a;
  a.Quarters = Math.floor(cents / 25);
  a.Dimes = Math.floor((cents % 25) / 10);
  a.Nickels = Math.floor(((cents % 25) % 10) / 5);
  a.Pennies = Math.floor(((cents % 25) % 10) % 5);
  return a;
}
