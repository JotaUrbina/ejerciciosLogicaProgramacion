/* Dada una cadena de texto, darle la vuelta e invertir el orden de sus
caracteres sin usar métodos propios del lenguaje, solo estructuras
de control */

const reverseText = (text) => {
  let newWord = "";
  for (let i = text.length; i >= 1; i--) {
    newWord += text[i - 1]; //el += en este caso concatena. Es como un pseudo push
  }
  return newWord;
};

console.log(reverseText("hola"));
