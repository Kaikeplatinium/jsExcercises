const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    //Code here
    let finalizado = false;
    while (finalizado == false) {
        let count = 0;
        let primerItem = 0;
        let segundoItem = 1;

        for (let i = 0; i < array.length; i++) {
            if (array[primerItem] > array[segundoItem]) {
                const valorCambioSegundo = array[segundoItem];
                const valorCambioPrimero = array[primerItem];
                array[primerItem] = valorCambioSegundo;
                array[segundoItem] = valorCambioPrimero;
                count++;
            }
            primerItem++;
            segundoItem++;
        }
        if (count == 0) {
            finalizado = true;
        }
    }
    return array;
}

console.log(bubbleSort(numbers));
