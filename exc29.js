/* Dado un número, indicar si es un número capicúa o no.

Los números capicúa se leen = de izquierda a derecha y viceversa. */

const checkCapicua = (num) => {
  let reverse = num.toString().split("").reverse().join("");

  return Number(reverse) === num ? true : false;
};

console.log(checkCapicua(105));
console.log(checkCapicua(101));
console.log(checkCapicua(2002));
console.log(checkCapicua(1000));
console.log(checkCapicua(100000001));
