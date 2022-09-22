let obj1 = {a:"yoyo"};
let obj2 = obj1;
// obj2 points to obj1
obj1.a = "gg";
delete obj1;
console.log("1", obj1);
console.log("2", obj2);