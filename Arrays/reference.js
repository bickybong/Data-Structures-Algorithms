// reference type
const obj1 = {val: 10};
// obj2 reference obj1's value
const obj2 = obj1;
// obj3 new box, diff info from box 1
const obj3 = {val:10};
console.log(obj1 === obj2);
console.log(obj2 === obj3);
obj1.val = 15;
// obj2 value changes with obj1
console.log(obj2);
