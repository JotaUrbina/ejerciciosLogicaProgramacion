/* Dada una palabra, buscarla en una frase y retornar cuantas veces aparece en ella.
La frase y la palabra deben ser parámetros de una función*/

// el método REPLACE reemplaza las ocurrencias q le indico por lo segundo que le indico.
// la G indica que se aplica de forma global
//la I que se aplica indistintamente si es mayúscula o minúscula.

// el método NORMALIZE(NFD) transforma las letras con acentos a solo letras.No Funciona solo, debe ir acompañado del replace.

const searchWordInPhrase = (phrase, word) => {
  let lowerPhrase = phrase
    .toLowerCase()
    .normalize("NFD") // "omite" tildes
    .replace(/[,.;:¡!¿?´`"']/gi, ""); //reemplaza esos caracteres por un espacio vacío
  let arrayWords = lowerPhrase.split(" ");
  let repeatWord = arrayWords.filter((obj) =>
    obj.includes(
      word
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") //lo que está en corchetes se llama expresión regular
    )
  );

  return repeatWord.length;
};

console.log(
  searchWordInPhrase(
    "holá, soy una CACA bien Caca!",
    "caca"
  )
);

console.log(
  searchWordInPhrase(
    "soy una caca bien CACA haciendo caca limpiándome la caca",
    "cacá"
  )
);
