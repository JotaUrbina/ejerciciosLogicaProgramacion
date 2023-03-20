/*Cuánto es el X% de X número */

const calcPercentage = (percent, number) => {
  let res = (number * percent) / 100;
  let textRes = `El ${percent}% de ${number} es ${res}`;
  return textRes;
};

console.log(calcPercentage(50, 100));
console.log(calcPercentage(10, 20));
