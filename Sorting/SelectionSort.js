const lista = [6, 8, 7, 5, 3, 9];

function selectionSort(lista) {
    for (let a = 0; a < lista.length; a++) {
        let menor = a;
        for (let i = a; i < lista.length; i++) {
            console.log(lista[menor]);
            if (lista[menor] > lista[i]) {
                menor = i;
            }
        }
        const temp = lista[a];
        lista[a] = lista[menor];
        lista[menor] = temp;
    }
    return lista;
}

console.log(selectionSort(lista));
