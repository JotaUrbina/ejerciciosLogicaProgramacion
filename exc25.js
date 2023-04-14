/* Dado un sting, ponerlo todo en mayúsculas o minúsculas dependiendo de cuál es la mayoría que posee
por defecto.

- Si hay más mayúsculas, ponerlo todo en mayúscula.
- Si hay más minúsculas, ponerlo todo en minúscula*/
const upperCase = [];
const lowerCase = [];

const checkUpper = (str) => {
  return upperCase.length > lowerCase.length
    ? str.toUpperCase()
    : str.toLowerCase();
};

const separateLowerUpper = (str) => {
  [...str].forEach((ele) => {
    /["A-Z"]/.test(ele) // El método test() checkea si se cumple o no lo que s eindica en la expresión regular.
      ? upperCase.push(ele)
      : lowerCase.push(ele);
  });

  return checkUpper(str);
};

console.log(separateLowerUpper("holA"));
console.log(separateLowerUpper("JAVIER UrbiNA"));
console.log(separateLowerUpper("javier URbina"));
