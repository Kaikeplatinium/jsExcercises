function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString("yoyo master"));

arrayAnswer = []
function reverseStringRecursive(str) {
    const arrayStr = str.split("")
    if (arrayStr.length == 0) {
        return true
    }
    const letter = arrayStr.pop()
    arrayAnswer.push(letter)
    reverseStringRecursive(arrayStr.join(""))
    return arrayAnswer.join("")
}

console.log(reverseStringRecursive("ola luna"));