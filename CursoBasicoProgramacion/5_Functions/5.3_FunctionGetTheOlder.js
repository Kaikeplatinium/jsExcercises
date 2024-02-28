// A function that recieves two people and return the oldest
// Crear funcion
function peopleOldest(a) {

  if (a[0].Edad > a[1].Edad) {
    return a[0].Nombre;
  } else {
    return a[1].Nombre; 
  }

}

// Usar Funcion

var people = [
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
];

var people2 = [
  {
    Nombre: "a",
    Edad: 21,
    Activo: false,
    Carrera: "Ing as",
  },
  {
    Nombre: "b",
    Edad: 12,
    Activo: true,
    Carrera: "Ing data",
  },
];

console.log(peopleOldest(people));
console.log(peopleOldest(people2));
