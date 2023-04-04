/* Dados 2 números, indicar cuál es MAYOR y cuál es MENOR */

const checkMinorMajor = (num1, num2) => {
  return num1 === num2
    ? "Los números son iguales"
    : num1 > num2
    ? `El número MAYOR es: ${num1} y el número MENOR es: ${num2}`
    : `El número MAYOR es: ${num2} y el número MENOR es: ${num1}`;
};

console.log(checkMinorMajor(1, 1));
console.log(checkMinorMajor(10, 19));
console.log(checkMinorMajor(100, 19));
console.log(checkMinorMajor(19, 19));
