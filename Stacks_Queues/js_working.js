// JS is single threaded so only 1 call stack
// synchronise means 1 stack
// asynchronise means it puts the request in callback Q till something happens

// stack overflow with recursion
// function foo(){
//     foo()
// }
// foo()

console.log(1);
setTimeout(() => {
    console.log(2);
}, 2000);
console.log(3);


// JS structure

// call stack

// web api

// callback Q

// event loop