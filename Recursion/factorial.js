// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
// both O(n) time

function findFactorialRecursive(number) {
  if (number === 1) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  return sum;
}

console.log(findFactorialIterative(6));
