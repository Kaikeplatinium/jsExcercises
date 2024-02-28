var listaEmpleados = [{
    Nombre: "Juan",
    Edad: 23,
    Activo: false,
    Carrera: "Ing Sistemas"
},{
    Nombre: "Pancho",
    Edad: 24,
    Activo: false,
    Carrera: "Ing Mecatronico"
},{
    Nombre: "Tito",
    Edad: 20,
    Activo: true,
    Carrera: "Ing Sistemas"
},{
    Nombre: "Samuel",
    Edad: 21,
    Activo: true,
    Carrera: "Diseñador Grafico"
},{
    Nombre: "Enrique",
    Edad: 29,
    Activo: true,
    Carrera: "Ing Electronica"
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

var parar = false
var i = 0
while (parar == false) {
    console.log(listaEmpleados[i].Edad);
    if (listaEmpleados[i].Edad == 24) {
        console.log("Lo encontré!");
        parar = true
    }else{
        i++
    }
}