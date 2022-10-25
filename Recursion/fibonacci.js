// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// recursive O(2^n) but iterative O(n)

function fibonacciRecursive(n) {
    if (n ===0){
        return 0
    } else if (n===1){
        return 1
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
console.log(fibonacciRecursive(40));

function fibonacciIterative(n) {
    if (n === 0){
        return 0
    } else if (n < 3){
        return 1
    }
    let sum = 1;
    let prev = 1;
    let oldSum = 0;
    for (let i=3; i <= n; i++){
        oldSum = sum;
        sum += prev;
        prev = oldSum;
    }
    return sum
}
console.log(fibonacciIterative(40));

