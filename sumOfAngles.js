//Find the total sum of angles in an n sided shape. N will be greater than 2.
//Link: https://www.codewars.com/kata/5a03b3f6a1c9040084001765

//My Solution
function angle(n) {
  return (n-2) * 180;
}

//Top Solution
const angle = n => (n - 2) * 180;