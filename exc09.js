/* Dados 2 array, retornar un tercer array que contenga únicamente los 
elementos comunes entre ambos. */

const array1 = [
  12, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 3, 3,
];
const array2 = [10, 1, 3, 3, 3, 7, 9, 11, 12];

const getRepeatedElements = (array1, array2) => {
  const repeatedElements = array1.filter((ele) =>
    array2.includes(ele)
  );

  const filterRepeatedElements = new Set(
    repeatedElements.sort((a, b) => a - b) // El objeto global Set es una estructura de datos, una colección de valores que permite sólo almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.
  );
  let res = [...filterRepeatedElements];

  return res;
};

console.log(getRepeatedElements(array1, array2));
