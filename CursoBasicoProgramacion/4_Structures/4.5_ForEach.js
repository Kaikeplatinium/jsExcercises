var listaEmpleados = [{
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

var contadorIngSistemas = 0
listaEmpleados.forEach(element => {
    console.log(element.Nombre);
    if (element.Carrera == "Ing Sistemas") {
        contadorIngSistemas++
    }
});
console.log(contadorIngSistemas);