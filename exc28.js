/* Dado un número, devolver su factorial.

El factorial de un número es la multiplicación de todos lo números desde el 1, hasta llegar a él.*/

const getFactorial = (num) => {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return `El factorial de ${num} es: ${res}`;
};

console.log(getFactorial(3));
console.log(getFactorial(4));
console.log(getFactorial(10));
