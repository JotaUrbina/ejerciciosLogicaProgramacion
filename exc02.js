/* Dada una cadena de texto, comprobar si es un palíndromo o no. Mostrar True o False por consola.
no tener en cuenta espacios ni símbolos raros*/

//SPLIT, separa la cadena de texto por espacios y símbolos.
//REVERSE, da vuelta la cadena de texto
//JOIN, vuelve a juntar los caracteres y espacios en una cadena de texto

const checkPalindrome = (word) => {
  let reverseWord = word.split("").reverse().join("");
  return reverseWord;
};

console.log(checkPalindrome("hassen"));
console.log(checkPalindrome("analavalana"));
