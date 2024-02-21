//Log all pairs of array
const boxes = [1,2,3,4,5]

let longitudArray = boxes.length
let condition = 0

for (let index = 0; index < boxes.length; index++) {
    if (boxes[index] % 2 == 0){
        console.log(boxes[index]);
    }
}