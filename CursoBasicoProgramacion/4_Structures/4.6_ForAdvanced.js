let listaEmpleados = [{
    Nombre: "Juan",
    Edad: 23,
    Activo: false,
    Carrera: "Ing Sistemas"
}, {
    Nombre: "Gerry",
    Edad: 24,
    Activo: true,
    Carrera: "Ing Mecatronico"
}, {
    Nombre: "Chuy",
    Edad: 25,
    Activo: true,
    Carrera: "Ing Sistemas"
}]

let contadorIngSistemas = 0;
for (let i = 0; i < listaEmpleados.length; i++) {
    console.log(listaEmpleados[i].Nombre);
    console.log(listaEmpleados[i].Edad);
    if (listaEmpleados[i].Carrera == "Ing Sistemas") {
        contadorIngSistemas++
    }
}

console.log(contadorIngSistemas);
