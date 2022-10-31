let calcs = 0;
function fibonacci(n) {
  calcs++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// O(2^n) time O(1) space

function fibMemoized() {
  let cache = {};
  return function fib(n) {
    calcs++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}
// O(n) time but O(n) space

function fibBottomUp(n) {
  let ans = [0, 1];
  for (let i = 2; i <= n; i++) {
    ans.push(ans[i - 2] + ans[i - 1]);
  }
  return ans.pop();
}

// fibonacci(10);

const fastFib = fibMemoized();
console.log("DP", fastFib(10));
console.log("DP2", fibBottomUp(10));
console.log("calculations: " + calcs);
