/*Dadas 2 cadenas de texto, crear un algoritmo que compruebe si son angramas entre sí.

Una cadena es anagrama de otra si tiene los mismos carácteres y en la misma cantidad.

No tener en cuenta espacios, símbolos raros, puntos, etc. */

const checkAnagram = (string1, string2) => {
  const arrStr1 = string1
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  const arrStr2 = string2
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  let res =
    arrStr1 === arrStr2
      ? "Son anagrama"
      : "No son anagrama";

  return res;
};

console.log(checkAnagram("unoU", "uoNu"));
console.log(checkAnagram("loca", "cola"));
console.log(checkAnagram("foto", "pera"));
console.log(checkAnagram("aalaa", "laaaa"));
