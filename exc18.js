/* Dado un número, mostrat todos sus divisores */

const getDividers = (num) => {
  let dividers = [];

  for (let i = 1; i <= num; i++) {
    num % i === 0 && dividers.push(i);
  }
  return `Los divisores de ${num} son: ${dividers}`;
};

console.log(getDividers(5));
console.log(getDividers(9));
