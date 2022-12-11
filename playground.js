// Sumatorias de bajo importe
function sumatoriaBajoImporte(array) {
  let sumatoria = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] <= 1000) {
      sumatoria += array[i];
    }
  }
  return sumatoria;
}
/* function sumatoriaBajoImporte(array) {
    let sumatoria = 0;
    array.forEach(item => {
        if (item > 0 & item < 1000) {
            return sumatoria += item
        }
    })
    return total;
} */
/* console.log(
  "🚀 ~ file: test.js:3 ~ sumatoriaBajoImporte ~ sumatoriaBajoImporte",
  sumatoriaBajoImporte([1, 2, 3, 2000, -10])
); */

// Entradas para el cine
function asientosDisponibles(array, numero) {
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(numero) != -1) {
      return "Felicitaciones, el asiento número " + numero + " está disponible";
    }
  }
  return (
    "Lo sentimos, el asiento número " +
    numero +
    " está ocupado, pero aún quedan " +
    array.length +
    " asientos disponibles"
  );
}
/* console.log(
  "🚀 ~ file: test.js:24 ~ asientosDisponibles ~ asientosDisponibles",
  asientosDisponibles([15, 28, 44, 45, 70], 15)  
); */
/* console.log(
  "🚀 ~ file: test.js:24 ~ asientosDisponibles ~ asientosDisponibles",
  asientosDisponibles([15, 28, 44, 45, 70], 50)
); */

// Control de pasajeros
function reporteDePasajeros(estaciones) {
  let pasajeros = 200;
  let reporte = [];
  for (let i = 0; i <= estaciones; i++) {
    if (i == 5) {
      pasajeros = pasajeros + 120 - 80;
    } else if (i != 0) {
      pasajeros = pasajeros + 50 - 30;
    }
    reporte.push(
      "En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren"
    );
  }
  return reporte;
}

/* console.log(
  "🚀 ~ file: test.js:51 ~ reporteDePasajeros ~ reporteDePasajeros",
  reporteDePasajeros(0)
);
console.log(
  "🚀 ~ file: test.js:51 ~ reporteDePasajeros ~ reporteDePasajeros",
  reporteDePasajeros(3)
);
console.log(
  "🚀 ~ file: test.js:51 ~ reporteDePasajeros ~ reporteDePasajeros",
  reporteDePasajeros(5)
); */

// La clave secreta
function laClaveSecreta(clave) {
  let fraseFinal = "";
  for (let i = clave.length - 1; i >= 0; i--) {
    if (clave[i] != "*") {
      fraseFinal += clave[i];
    }
  }
  return fraseFinal;
}
/* console.log(
  "🚀 ~ file: test.js:81 ~ laClaveSecreta ~ laClaveSecreta",
  laClaveSecreta([
    "s",
    "*",
    "e",
    "n",
    "u",
    "l",
    " ",
    "s",
    "*",
    "e",
    " ",
    "a",
    "í",
    "*",
    "d",
    " ",
    "l",
    "*",
    "E",
    "*",
  ])
); */
/* console.log(
  "🚀 ~ file: test.js:81 ~ laClaveSecreta ~ laClaveSecreta",
  laClaveSecreta([
    "💖",
    " ",
    "a",
    "s",
    "e",
    "n",
    "*",
    "a",
    "*",
    "l",
    "*",
    "i",
    "*",
    "M",
    " ",
    "m",
    "*",
    "a",
    "*",
    "e",
    "*",
    "T",
    "*",
  ])
); */
