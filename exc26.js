/* Dado un número, mostrar su serie de Fibonacci.

La serie de Fibonacci es una secuencia de números donde cada número es la suma de los dos anteriores*/

const getFibo = (num) => {
  const fiboSerie = [0, 1];
  for (let i = 0; i < num - 1; i++) {
    fiboSerie.push(fiboSerie[i] + fiboSerie[i + 1]);
  }
  return [fiboSerie, fiboSerie[num]];
};

console.log(getFibo(10));
console.log(getFibo(3));
console.log(getFibo(20));
