/* Dado un texto y una búsqueda, censurar todas las coincidencias de 
la búsqueda en el texto con "[-CENSURADO-]"

Si el texto y la búsqueda están vacíos, mostrar "No puedes leer el texto
y la búsqueda" en el caso de que ambos parámetros no lleguen */

const censorText = (text, search) => {
  let res = undefined;
  if (!text && !search) {
    return (res = "No puedes leer el texto y la búsqueda");
  } else {
    return (res = text.replaceAll(search, "[CENSURADO]"));
  }
};

console.log(
  censorText("Holas po weon ciliao weon", "weon")
);
