/* Dado un número, retornar una lista de 8 en 8 desde el número hasta
el 0. Cada línea de la lista debe empezar con un "nº" */

const getNumberList = (number) => {
  let numberList = "";
  for (let i = number / 8; i > 0; i--) {
    numberList += `nº ${i * 8} \n`;
  }
  return numberList;
};

console.log(getNumberList(100));

/////
/////

const getNumberListv2 = (number) => {
  let numberList = "";

  while (number > 0) {
    numberList += number + "\n";
    number -= 8;
  }
  return numberList;
};

console.log(getNumberListv2(33));
