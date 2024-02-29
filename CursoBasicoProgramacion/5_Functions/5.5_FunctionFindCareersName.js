// Make a function that counts how many there are careers and that they are active

// Crear funcion
function Buscador(a) {

  var mecatronica = [];
  var sistemas = [];
  var diseño = [];
  var electrico = [];
  
  for (let i = 0; i < a.length; i++) {
    if (a[i].Carrera == "Ing Sistemas" && a[i].Activo == true) {
      sistemas.push(a[i].Nombre);
    }  
    if (a[i].Carrera == "Ing Mecatronico" && a[i].Activo == true) {
      mecatronica.push(a[i].Nombre);;
    }
    if (a[i].Carrera == "Diseñador Grafico" && a[i].Activo == true) {
      diseño.push(a[i].Nombre);;
    }  
    if (a[i].Carrera == "Ing Electronica" && a[i].Activo == true) {
      electrico.push(a[i].Nombre);;
    }  
  }
  return ["Sistemas "+sistemas,"Mecatronica "+mecatronica,"Diseño "+diseño,"Electrica "+electrico];
}

// Usar Funcion

var listaEmpleados = [
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
  {
    Nombre: "bob",
    Edad: 30,
    Activo: true,
    Carrera: "Ing Electronica",
  },
  {
    Nombre: "Javier",
    Edad: 28,
    Activo: true,
    Carrera: "Ing Mecatronico",
  },
  {
    Nombre: "Alex",
    Edad: 22,
    Activo: true,
    Carrera: "Ing Sistemas",
  },
];

console.log(Buscador(listaEmpleados));
