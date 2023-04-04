/* Dada una cadena de texto, poner en mayúscula la primera letra de cada palabra en la cadena
y luegodevolver la cadena */

const printUpper = (text) => {
  let textSplit = text.split(" ");
  let upper = textSplit.map((ele) => ele[0].toUpperCase());
  let lower = textSplit.map((ele) => ele.slice(1));
  let res = [];

  for (let i = 0; i < upper.length; i++) {
    res.push(upper[i] + lower[i]);
  }

  return res.join(" ");
};

console.log(printUpper("hola me hago caca"));
console.log(
  printUpper("Me llamo Javier urbina y qué pasa")
);
