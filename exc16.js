/* Dada una cadena de texto, devolver cuántas vocales tiene */

const getVocals = (str) => {
  let vocals = str.match(/[aeiou]/gi); // devuelve un array con todas las coincidencias que le indico en la expresión regular

  return `Hay ${
    !vocals ? 0 : vocals.length
  } vocales en la frase`;
};

console.log(getVocals("hola po hassen"));
