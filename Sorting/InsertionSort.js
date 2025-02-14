const lista = [6, 8, 7, 5, 3, 9];

function insertion(lista) {
    const listaLarga = [lista[0]];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > listaLarga[listaLarga.length - 1]) {
            listaLarga.push(lista[i]);
        } else if (lista[i] < listaLarga[0]) {
            listaLarga.unshift(lista[i]);
        } else {
            for (let a = 0; a < listaLarga.length; a++) {
                console.log(lista[i], listaLarga[a]);
                if (lista[i] > listaLarga[a - 1] && lista[i] < listaLarga[a]) {
                    listaLarga.splice(a, 0, lista[i]);
                }
            }
        }
    }
    return listaLarga;
}

console.log(insertion(lista));
