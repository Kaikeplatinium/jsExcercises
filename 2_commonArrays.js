
function commonArrays(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        if (array1.find((element) => element == array2[i])) {
            return true
        }
    }
    return false
}

console.log(commonArrays(["a", "b", "c", "x"], ["z", "y", "x"]));