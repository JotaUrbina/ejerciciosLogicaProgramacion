/* Dado un número, mostrar a cuántos años, meses y días equivalen */

const calcDays = (num) => {
  const years = Math.floor(num / 365);
  const months = Math.floor((num % 365) / 30);
  const days = (num % 365) % 30;

  console.log(months);

  return { años: years, meses: months, días: days };
};

console.log(calcDays(365));
console.log(calcDays(396));
console.log(calcDays(700));
console.log(calcDays(701));
