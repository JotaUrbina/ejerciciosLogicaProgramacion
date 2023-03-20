/* Dada una palabra, buscarla en una frase y retornar cuantas veces aparece en ella.
La frase y la palabra deben ser parámetros de una función*/

const searchWordInPhrase = (phrase, word) => {
  let arrayWords = phrase.split(" ");
  let repeatWord = arrayWords.filter((obj) =>
    obj.includes(word)
  );
  return repeatWord.length;
};

console.log(
  searchWordInPhrase("hola soy una caca bien caca", "caca")
);

console.log(
  searchWordInPhrase(
    "soy una caca bien caca haciendo caca limpiándome la caca",
    "caca"
  )
);
