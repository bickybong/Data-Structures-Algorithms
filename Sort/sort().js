const nums = [5, 7, 1, 22, 78, 43, 75];

// normal sort no work as only looks at first charcode
console.log(nums.sort(function (a, b){
    return a - b
}));

console.log('5'.charCodeAt(0));