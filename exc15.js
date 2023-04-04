/* Dada una cadena de texto, devolver el caracter más usado */

const mostUsedChar = (str) => {
  let objChar = {};
  let mostUsed = { char: "", repeat: "" };

  let norm = str
    .toLowerCase()
    .replace(/[\s+]/g, "")
    .split("")
    .forEach((item) => {
      objChar[item]
        ? (objChar[item] += 1)
        : (objChar[item] = 1);
    });

  Object.entries(objChar).forEach(([key, value]) => {
    value > mostUsed.repeat &&
      ((mostUsed.char = key), (mostUsed.repeat = value));
  });

  return mostUsed;
};

console.log(mostUsedChar("hola soy una pava"));
console.log(mostUsedChar("gooool una"));
