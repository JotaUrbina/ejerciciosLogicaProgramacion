/* Dados 2 array, retornar un tercer array que contenga únicamente los 
elementos comunes entre ambos. */

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 3, 7, 9, 11, 12];

const repeatedElements = (array1, array2) => {
  let newArray = array1.filter((ele) => {
    ele.includes(array2);
  });
  console.log(newArray);
};

repeatedElements(array1, array2);
