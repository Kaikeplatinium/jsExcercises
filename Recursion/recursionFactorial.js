let answer = 0;
function findFactorialRecursive(numero) {
    const siguiente = numero - 1;
    if (siguiente == 0) {
        return answer;
    } else {
        if (answer == 0) {
            answer = numero;
        }
        answer = answer * siguiente;
    }
    return findFactorialRecursive(siguiente);
}

function findFactorialIterative(number) { 
    let answer2 = 1
    for (let i = 1; i <= number; i++) {
        answer2 = answer2 * i
    }
    return answer2
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
