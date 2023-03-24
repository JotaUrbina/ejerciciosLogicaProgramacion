/* Dado un número, mostrar los números del 1 hasta el número, pero para 
múltiplos de 3 imprimir "buzz" en lugar del número y para los múltiplos
de 5 imprimir "lightyear". Para múltiplos de 3 y 5 imprimen "BuzzLightyear" */

const getNumberList = (number) => {
  let numberList = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numberList.push("BuzzLightyear");
    } else if (i % 3 === 0) {
      numberList.push("Buzz");
    } else if (i % 5 === 0) {
      numberList.push("lightyear");
    } else {
      numberList.push(i);
    }
  }
  return numberList;
};

console.log(getNumberList(15));

/////

const getNumberList2 = (number) => {
  let numberList = "";

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numberList += "BuzzLightyear" + "\n";
    } else if (i % 3 === 0) {
      numberList += "Buzz" + "\n";
    } else if (i % 5 === 0) {
      numberList += "lightyear" + "\n";
    } else {
      numberList += i + "\n";
    }
  }
  return numberList;
};

console.log(getNumberList2(35));
