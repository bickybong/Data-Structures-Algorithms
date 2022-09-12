// Create a function that reverses a string
// "Hi My name is Andrei" => "ierdnA si eman yM iH"

function reverse(str){
    // check input
    if (!str || str.length<2 || typeof str !== "string"){
        return str
    }
    // loop through to reverse array
    let revArr = [];
    for (let i=str.length - 1; i>=0; i--){
        revArr.push([str[i]]);
    }
    // convert new array to string
    const newStr = revArr.join("");
    return newStr
}
console.log(rev2("Hi My name is Andrei"));

// shorter way with built in reverse function
function rev2(str){
    return str.split("").reverse().join("");
}

