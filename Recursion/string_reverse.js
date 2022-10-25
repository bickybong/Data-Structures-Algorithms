//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIteration(str) {
    let strArr = str.split("");
    let reverse = [];
    while (strArr.length > 0){
        reverse.push(strArr.pop())
    }
    return reverse.join("");
}

function reverseStringRecursive(str) {
    let length = str.length;
    if (length === 0){
        return "";
    }
    return reverseStringRecursive(str.substr(1)) + str.charAt(0)
}

console.log(reverseStringRecursive('yoyo mastery'));
//should return: 'yretsam oyoy'