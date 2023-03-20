/* Dado un número entero, invertirlo y retornar el nuevo número entero */

const reverseNumber = (number) => {
  let numString = number.toString();
  let res =
    parseInt(numString.split("").reverse().join("")) *
    Math.sign(number); //Math.sign retorna -1 o 1 si el número que le paso es positivo o negativo

  return res;
};
console.log(reverseNumber(123));
console.log(reverseNumber(-27));
