/* Dados 2 números, retornar cuántos números IMPARES hay entre ellos */

const calcOdd = (num1, num2) => {
  let numberList = [];
  for (let i = num1 + 1; i < num2; i++) {
    numberList.push(i);
  }
  let oddNumbers = numberList.filter((n) => n % 2 !== 0);
  let textRes =
    oddNumbers.length > 0
      ? oddNumbers.length === 1
        ? `Hay ${oddNumbers.length} número impar entre ${num1} y ${num2} y es: ${oddNumbers}`
        : `Hay ${oddNumbers.length} números impares entre ${num1} y ${num2} y son: ${oddNumbers}`
      : `No hay números impares entre ${num1} y ${num2}`;
  return textRes;
};

console.log(calcOdd(3, 7));
console.log(calcOdd(2, 10));
console.log(calcOdd(2, 3));
