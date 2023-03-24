/* Dado un string y un número, repetir el string tantas veces como el
número indique */

const repeatString = (str, num) => {
  return `${str.repeat(num)} \n`;
};

console.log(repeatString("Hola", 5));
