// log all pairs of arrays
const boxes = [1,2,3,4,5];

boxes.forEach(box1 => {
    boxes.forEach(function(box2){
        console.log([box1, box2])
    })
});
