/* Dada una cadena de texto y un número X, recortar el string mostrando los X primeros caracteres */

const shortString = (string, number) => {
  return string.substring(0, number); // el método SUBSTRING recorta el string en base a los argumentos. EL primero desde que caracter comienza (no lo incluye) y el segundo en qué caracter debe termianr (sí lo incluye).
};

console.log(shortString("me hice caca", 5));
console.log(shortString("viendo big bang", 10));
