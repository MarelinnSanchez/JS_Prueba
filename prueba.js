// variables
var nombre = "miguel"; //global
const nombre_dos = "marelinn"; //local en un bloque de codigo constante
let nombre_tres = "paquito"; //local en un bloque de codigo

// sentencias
if (true) {
}

// funciones
function puedeVotar({ edad = 17 }) {
  return edad > 18;
}

// strings

// Object
/**
 * stack                                  - hope
 * nombe - valor
 * nombre - posicion en memoria           valor
 * perritosCopia - posicion en memoria    valor
 *
 * chaneques - posicion en memoria        valor
 * noChaneques - posicion en memoria      chaneques
 */

/**
 * mutabilidad: puede cambiar
 * inmutabilidad: no puede cambiar
 */

/**
 * callback
 * funcion que se regresa de otra funcion
 */

// arreglos
const perritos = ["🐶", "🐩"];

for (let i = 0; i <= perritos.length; i++) {
  console.log("Xd" + perritos[i]);
}

perritos.forEach((perrito) => console.log(perrito));
const perritosCopia1 = perritos.map((perrito) => perrito);
// `` string template
const perritosCopia2 = perritos.map((perrito) => `Perrito ${perrito}`);
const perritosCopia3 = perritos.map(
  (perrito, contador) => `${contador}: Perrito ${perrito}`
);
console.log(perritosCopia3);

// filter -> filtra un arreglo
// find -> busca un elemento en un arreglo
// findIndex -> busca la posicion de un elemento en un arreglo
// reduce -> [1, 2, 3, 4, 5] => 15

// JSON - JAVA-SCRIPT OBJECT NOTACION
/**
 * {
 *  "NOMBRE": "MARELINN"
 * }
 */

// objetos
const llaves = {
  casa: "pirata",
  rancho: "originales",
};

const chaneques = [
  { nombre: "chanequin", color: "verde" },
  { nombre: "chaniquina", color: "azul" },
];

const chanequesPlus = chaneques.map((chaneque) => {
  //{...chaneque}
  //{...chaneque, nombre: valor}
  //{nombre: "chanequin", color: "verde", nombre: valor}
  const nuevoObjeto = { ...chaneque };
  return { ...chaneque, statura: "30cm" };
});

console.log({ chaneques, chanequesPlus });

// spread operators ...
const noChaneques = [...chaneques];

// destruring
const nombrePrimerChaneque = chaneques[0].nombre;
const { nombre: nombrePrimerChaneque2 } = chaneques[0];

/**
 * 1 como hacer un server
 * 1.1 usar git
 * 2 como hacer un server conecto a una bd (mongo)
 * 3 como subir un server
 */

// Como usar strapi
