let listaEmpleados = [
  {
    Nombre: "Juan",
    Edad: 23,
    Activo: false,
    Carrera: "Ing Sistemas",
  },
  {
    Nombre: "Pancho",
    Edad: 24,
    Activo: false,
    Carrera: "Ing Mecatronico",
  },
  {
    Nombre: "Tito",
    Edad: 20,
    Activo: true,
    Carrera: "Ing Sistemas",
  },
  {
    Nombre: "Samuel",
    Edad: 21,
    Activo: true,
    Carrera: "Diseñador Grafico",
  },
  {
    Nombre: "Enrique",
    Edad: 29,
    Activo: true,
    Carrera: "Ing Electronica",
  },
  {
    Nombre: "Gerry",
    Edad: 24,
    Activo: true,
    Carrera: "Ing Mecatronico",
  },
  {
    Nombre: "Chuy",
    Edad: 25,
    Activo: true,
    Carrera: "Ing Sistemas",
  },
];


let i = 0;

while (i < listaEmpleados.length) {
  if (listaEmpleados[i].Edad == 24) {
    console.log("Lo encontré!");
    console.log(i);
    i++;
  } else {
    i++;
  }
}
