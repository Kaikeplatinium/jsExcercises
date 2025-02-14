// Divide and Conquer
// [6,5,3,1,8,7,2,4]
// [6,5,3,1] [8,7,2,4]
// [6,5] [3,1] [8,7] [2,4]
// [6] [5] [3] [1] [8] [7] [2] [4]
// [5,6] [1,3] [7,8] [2,4]
// [1,3,5,6] [2,4,7,8]
// [1,2,3,4,5,6,7,8]


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [6, 5, 3, 1, 8, 7, 2, 4];


function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    // Split Array in into right and left
    let mitad = array.length / 2;
    let left = array.slice(0, mitad);
    let right = array.slice(mitad);
    // console.log(left, right);

    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
    let arrayRespuesta = [];
    let indexLeft = 0;
    let indexRight = 0;
    while (indexLeft <= left.length && indexRight <= right.length) {
        if (indexLeft == left.length) {
            arrayRespuesta.push(right[indexRight]);
            indexRight++;
        } else if (indexRight == right.length) {
            arrayRespuesta.push(left[indexLeft]);
            indexLeft++;
        } else if (left[indexLeft] < right[indexRight]) {
            arrayRespuesta.push(left[indexLeft]);
            indexLeft++;
        } else if (right[indexRight] < left[indexLeft]) {
            arrayRespuesta.push(right[indexRight]);
            indexRight++;
        } else {
            arrayRespuesta.push(left[indexLeft]);
            indexLeft++;
        }

        if (indexLeft == left.length && indexRight == right.length) {
            indexLeft = left.length + 1
        }
    }
    return arrayRespuesta;
}


const answer = mergeSort(numbers);
console.log(answer);
