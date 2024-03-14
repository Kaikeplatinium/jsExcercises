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

let contadorIngSistemas = 0

listaEmpleados.forEach(g => {
    console.log(g.Nombre,g.Carrera);
   
    if (g.Carrera == "Ing Sistemas") {
        contadorIngSistemas++
    }
});

array.forEach(element => {
    
});

console.log(contadorIngSistemas);