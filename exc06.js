/* Dibujar un cuadrado HUECO con asteríscos (solo el perímetro) */

const drawSquare = (numberSides) => {
  let draw = "";
  for (let i = 1; i <= numberSides; i++) {
    switch (i) {
      case 1:
        draw = draw += "*".repeat(numberSides) + "\n";
        break;
      case numberSides:
        draw = draw += "*".repeat(numberSides);
        break;
      default:
        draw = draw += `*${" ".repeat(
          numberSides - 2
        )}* \n`;
    }
  }
  return draw;
};

console.log(drawSquare(7));
console.log(drawSquare(5));
