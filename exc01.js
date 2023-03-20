/* Dado un número, devolver la tabla de multiplicar 
de ese número del 1 al 10 */

const multipliers = [];

for (let i = 1; i <= 10; i++) {
  multipliers.push(i);
}

const multiplyNumber = (number) => {
  console.log(`La tablas del ${number} es:`);
  multipliers.forEach((multiplier) => {
    console.log(
      `${number} x ${multiplier} = ${number * multiplier}`
    );
  });
};

multiplyNumber(1);
