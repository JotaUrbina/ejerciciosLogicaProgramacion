/* Dado un número, retornar una escalera con escalones de "[-]" usando el
número para los niveles de la escalera */

const buildStair = (step) => {
  let drawStair = "";
  for (let i = 1; i <= step; i++) {
    drawStair += "[-]".repeat(i) + "\n";
  }
  return drawStair;
};

console.log(buildStair(5));
console.log(buildStair(2));
