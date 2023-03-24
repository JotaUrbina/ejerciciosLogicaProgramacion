/*  Dado un array, dividirlo en tantos sub-arrays como sea necesario
basándonos en un número que indique su tamaño. Es decir, dividir en 
arrays de X elementos */

const array = [1, 2, 3, 4, 5, 6, 7];
const array2 = [1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4];

const splitArray = (array, size) => {
  let newArray = [];
  while (array.length > 0) {
    newArray = [...newArray, array.splice(0, size)];
  }

  return newArray;
};

console.log(splitArray(array, 3));
console.log(splitArray(array2, 2));
