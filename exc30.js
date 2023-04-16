/* Dado un array de números, devolver el array sin elementos duplicaos.

SI hay un string, eliminarlo del del array. */

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = [1, 2, 3, 1, 2, 4, 4];
const array3 = [1, 2, "hola", 3, 1, 2, 4, 4, "chao", 5];
const array4 = [
  "hola",
  "cómo estai",
  2,
  2,
  "bueno",
  2,
  3,
  "chao",
];

const deleteRepeated = (array) => {
  let onlyNumbers = array.filter(
    (ele) => typeof ele !== "string"
  );
  let res = new Set(onlyNumbers);
  return [...res];
};

console.log(deleteRepeated(array1));
console.log(deleteRepeated(array2));
console.log(deleteRepeated(array3));
console.log(deleteRepeated(array4));
