/* Dado un array de enteros y un número, detectar si esa lista de números es una permutación del 1
al número aportado.

En este caso una permutación es una secuencia de números en orden sin que falte ninguno entre ellos */

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [1, 3, 4, 6, 7];
const array3 = [2, 3, 4, 5, 6, 7];
const array4 = [1, 2, 3, 4, 5, 6, 7];

const checkPermutation = (array, number) => {
  /*   for (let i = 0; i < number; i++) {
    if (array.indexOf(i + 1) < 0) {
      return false;
    }
  }
  return true;
 */

  for (let i = 1; i <= number; i++) {
    if (i !== array[i - 1]) {
      return false;
    }
  }
  return true;
};
console.log(checkPermutation(array1, 7));
console.log(checkPermutation(array2, 7));
console.log(checkPermutation(array3, 7));
console.log(checkPermutation(array4, 5));
